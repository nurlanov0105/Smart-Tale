export const testDestinationMap: any = {
    new: {
        process: true,
        alert: `Сначало нужно выполнить заказ!`
    },
    process: {
        checking: true,
        new: true,
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
        sending: true,
        alert: `Вы не можете перенести заказ в выбранную область!`,

    }
}

export const COLUMN_VALUES = {
    NEW: "new",
    PROCESS: "process",
    CHECKING: "checking",
    SENDING: "sending",
    ARRIVED: "arrived"
}
