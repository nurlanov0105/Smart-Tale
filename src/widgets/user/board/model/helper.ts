

export const COLUMN_VALUES = {
    PENDING: "Waiting",
    PROCESS: "Process",
    CHECKING: "Checking",
    SENDING: "Sending",
    ARRIVED: "Arrived"
}

export const testDestinationMap: any = {
    [COLUMN_VALUES.PENDING]: {
        [COLUMN_VALUES.PROCESS]: true,
        alert: `Сначало нужно выполнить заказ!`
    },
    [COLUMN_VALUES.PROCESS]: {
        [COLUMN_VALUES.CHECKING]: true,
        [COLUMN_VALUES.PENDING]: true,
        alert: `Сначало нужно проверить заказ!`
    },
    [COLUMN_VALUES.CHECKING]: {
        [COLUMN_VALUES.SENDING]: true,
        [COLUMN_VALUES.PROCESS]: true,
        alert: `Сначало нужно отправить заказ!`
    },
    [COLUMN_VALUES.SENDING]: {
        [COLUMN_VALUES.ARRIVED]: true,
        [COLUMN_VALUES.CHECKING]: true,
        alert: `Вы не можете перенести заказ в выбранную область!`
    },
    [COLUMN_VALUES.ARRIVED]: {
        alert: `Вы не можете перенести заказ в выбранную область!`,
    }
}