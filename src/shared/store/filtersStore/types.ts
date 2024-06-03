export interface DefaultTypes{
    schedule: string[],
    incomeLevel: string,
    location: string[],
    job_title: string[],
    experience: string
}

interface SetterType {
    value: string
    key: keyof DefaultTypes
}
export interface FilterStoreTypes{
    defaultValues: DefaultTypes
    setter: (value: SetterType) => void
    //setGraphic: (value: string) => void
}