export const testDestinationMap: any = {
    pending: {
        process: true,
        alert: `Сначало нужно выполнить заказ!`
    },
    process: {
        checking: true,
        pending: true,
        alert: `Сначало нужно проверить заказ!`
    },
    checking: {
        sending: true,
        process: true,
        alert: `Сначало нужно отправить заказ!`
    },
    sending: {
        arrived: true,
        checking: true,
        alert: `Вы не можете перенести заказ в выбранную область!`
    },
    arrived: {
        alert: `Вы не можете перенести заказ в выбранную область!`,
    }
}

export const COLUMN_VALUES = {
    PENDING: "pending",
    PROCESS: "process",
    CHECKING: "checking",
    SENDING: "sending",
    ARRIVED: "arrived"
}
