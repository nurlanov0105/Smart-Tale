import React, {FC} from 'react';
import {useRouter} from "next/navigation";
import {AnnouncementTypes, MODAL_KEYS} from "@/shared/lib";
import {Button} from "@/shared/ui";
import {AnnouncementRoutes, CardDetailsRoutes, useOrderApply} from "@/widgets/general/cardModal";
import {closeModal, showModal} from "@/views/modal";
import {useSubscribeStore} from "@/shared/store/subscribeStore/subscribeStore";
import styles from "./styles.module.scss";
import {useStartChat} from "@/widgets/general/chats/model/useQueries";

interface Props {
    authorSlug: string
    isApplied: boolean
    handleShowChat: () => void
    type: string
    slug: string

}
const CardButtons:FC<Props> = ({authorSlug, isApplied, slug, type, handleShowChat}) => {
    const router = useRouter();
    const { mutate, isPending } = useOrderApply();

    const { mutate: startChat, isPending: isLoading } = useStartChat();

    const currentUser = useSubscribeStore((state) => state.data);
    const hasAccess = useSubscribeStore(state => state.position?.flag_update_order);

    const handleChangeRoute = () => {
        router.push(AnnouncementRoutes[type] + `/${slug}`);

        closeModal();

        if (!slug) {
            showModal(MODAL_KEYS.infoModal, { componentName: MODAL_KEYS.error });
        }
    };
    const handleOrder = () => mutate(slug);

    const handleRouteDetails = () => {
        router.push(CardDetailsRoutes[type] + `/${slug}`);
        closeModal();
    };
    const handeRouteChat = () => {
        startChat(authorSlug)
    }

    const isApplyText = isApplied ? "Запрос уже отправлен" : "Отправить заявку";

    const typeButton = () => {
        if (currentUser?.profile.slug === authorSlug){
            return <Button onClick={handleChangeRoute}>Изменить</Button>
        }

        if (type === AnnouncementTypes.order){
            if (!hasAccess) {
                return <Button onClick={handeRouteChat}>Написать</Button>
            }
            return (
                <Button onClick={handleOrder} disabled={isApplied}>
                    {isPending ? "Загрузка..." : isApplyText}
                </Button>
            )
        }

        return <Button onClick={handeRouteChat}>Написать</Button>
    };

    return (
        <div className={styles.buttons}>
            {typeButton()}

            <Button onClick={handleRouteDetails} className={styles.buttons__btn}>
                Подробнее
            </Button>
        </div>
    );
};

export default CardButtons;