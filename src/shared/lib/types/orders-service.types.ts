export type CreateOrderTypes = {
    title: string,
    description: string,
    uploaded_images: File[],
    deadline: string,
    price: number,
    //category_slug: "T-shorts",
    phone_number: string,
    email: string,
    size: string
}

export type UpdateStatusProps = {
    status: string
    orderSlug: string
}
export type UpdateOrderProps = {
    params: any //CreateOrderTypes
    orderSlug: string
}
export type UpdateEquipmentProps = {
    params: CreateOrderTypes
    equipmentSlug: string
}

export type BookingOrderProps = {
    organizationSlug: string
    orderSlug: string
}


export type CreateEquipmentTypes = {
    title: string,
    description: string,
    uploaded_images: File[],
    price: number,
    //category_slug: "T-shorts",
    phone_number: string,
    email: string,
}

