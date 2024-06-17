import React, {FC, useEffect, useState} from "react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {ORGANIZATION_ROUTES, ROUTES} from "@/shared/lib";
import {useOrganization} from "@/widgets/admin/adminOrganization/model/useOrganization";
import { useThemeStore } from "@/shared/store/themeStore";
import logo from "@@/logo.svg";
import type { LogoProps } from "../model/types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Logo: FC<LogoProps> = ({ type = "navbar", data }) => {
   const theme = useThemeStore((state) => state.theme);
   const [isMy, setIsMyOrg] = useState(false)
   ;

   const {push} = useRouter()

   const handleEdit = () => push(ORGANIZATION_ROUTES.ORGANIZATION_SETTINGS + `/${data?.slug}`)

   const {data: organization} = useOrganization(!!data)
   const isMyOrganization = organization && organization["my-orgs"]?.some(item => item.slug === data?.slug) || false

   useEffect(() => {
      setIsMyOrg(isMyOrganization)
   }, [isMyOrganization])

   return (
      <>
         {type === "organization" ? (
             <div className={clsx(styles.logo_org, styles[theme])}>
                 <div>
                     <Image
                         className={styles.logo__imageOrganization}
                         src={data?.logo || logo}
                         alt="logo"
                         width={70}
                         height={70}
                         priority
                     />

                     <div className={styles.logo__block}>
                         <h1 className="h1">{data?.title}</h1>
                        <button onClick={handleEdit}><Pencil/></button>
                     </div>

                 </div>
             </div>
             ) : (
        <div className={clsx(styles.logo, styles[theme])}>
            <Link href={ROUTES.MARKETPLACE_EQUIPMENT}>
                <Image
                    className={styles.logo__image}
                    src={logo}
                    alt="logo"
                    width={70}
                    height={70}
                    priority
                />
            </Link>
            <h1 className="h1">SmartTale</h1>
            <p className={styles.logo__text}>Мониторинг и управление швейным производством</p>
        </div>
    )}
      </>
   );
};

export default Logo;
