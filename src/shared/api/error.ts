export const errorCatch = (error: any): string => {
    const message = error?.response?.data.Error

    return message
        ? typeof message === "object"
            ? message[0]
            : message
        : error.message
}