export interface DefaultFilterTypes{
    schedule: string[],
    incomeLevel: string,
    location: string[],
    job_title: string[],
    experience: string
}

interface SetterType {
    value: string
    key: keyof DefaultFilterTypes
}
export interface FilterStoreTypes{
    defaultValues: DefaultFilterTypes
    setter: (value: SetterType) => void
    //setGraphic: (value: string) => void
}