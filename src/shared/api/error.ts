export const errorCatch = (error: any): string => {
    const message = error?.response?.data['non_field_errors']

    return message
        ? typeof message === "object"
            ? message[0]
            : message
        : error.message
}