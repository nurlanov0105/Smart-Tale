import {useForm} from "react-hook-form";
import {useCreateEquipment, useCreateOrder} from "../useQueries";
import type {OrderCreateFormType, UseOrderFormProps} from "../types";

export const useOrderForm = ({type, images, deadline}: UseOrderFormProps) => {
    const typeCreation = type === "order"
    const { reset,
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<OrderCreateFormType>()

    const createOrder = useCreateOrder()
    const createEquipment = useCreateEquipment()



    const onSubmit = (data: OrderCreateFormType) => {
        // const formData = new FormData()
        //
        // // if (images) {
        // //     formData.append('image', images)
        // // }
        //
        // if (images) {
        //     images.forEach((file, index) => {
        //         formData.append(`images[]`, file);
        //     });
        // }

        const sizes = ["xl", "li"]

        if (typeCreation){
            const adapter = {
                title: data.title,
                description: data.description,
                uploaded_images: images, //images[0]
                deadline,
                price: data.price,
                category_slug: "t-shorts",
                phone_number: data.tel,
                email: data.email,
                size: "sizes"
            }
            console.log("order", adapter)

            createOrder.mutate(adapter)
        }else {
            const adapter = {
                title: data.title,
                description: data.description,
                uploaded_images: images, //images[0]
                price: data.price,
                category_slug: "T-shorts",
                phone_number: data.tel,
                email: data.email,
            }
            console.log("equipment", adapter)
            createEquipment.mutate(adapter)
        }
    }

    return {
        handleSubmit: handleSubmit(onSubmit),
        isLoading: typeCreation ? createOrder.isPending : createEquipment.isPending,
        isError: typeCreation ? createOrder.isError : createEquipment.isError,
        register,
        errors,
        isValid
    }
}