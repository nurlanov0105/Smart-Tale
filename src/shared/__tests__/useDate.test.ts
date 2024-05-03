

export const isTrue = (value: unknown) => {
    if (typeof value !== "number") return false
    if (value > 10) return false

    if (value < 10 && value > 0){
        return true
    }

    return false
}


describe('components', () => {
    test("Нужное число", () => {
        expect(isTrue("")).toBe(false)
    })

})