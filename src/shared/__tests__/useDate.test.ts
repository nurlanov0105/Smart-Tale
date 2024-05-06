import {renderHook} from "@testing-library/react";
import {monthsList, daysInCurrentMonth} from "@/entities/general/selectDate/model/helper";
import {useDate} from "@/entities/general/selectDate/model/useDate";

const initialValues = {
    year: { value: 0, postValue: 0 },
    month: { value: "", postValue: 0 },
    day: { value: 0, postValue: 0 }
}
describe("useDate hook" , () => {

    it('returns lists for admin type', () => {
        const { result, rerender } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'admin')
            , {
                initialProps: initialValues
            });

        // Проверяем исходные списки
        expect(result.current.months).toHaveLength(12);
        expect(result.current.years).toHaveLength(21);
        expect(result.current.days).toHaveLength(31);

        // Обновляем параметры и снова проверяем списки
        rerender({
            year: { value: 2024, postValue: 2024 },
            month: { value: "Май", postValue: 5 },
            day: { value: 15, postValue: 15 }
        });

        expect(result.current.months).toHaveLength(12); // Июнь - декабрь (включительно)
        expect(result.current.years).toHaveLength(21); // 2023 - 2030 (включительно)
        expect(result.current.days).toHaveLength(31); // Кол-во дней в месяце
    });

    it('returns initial lists for user type', () => {
        const { result } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'user')
            , {
                initialProps: initialValues
            });

        //Получаем текущую дату
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        // Ожидаем, что текущий месяц и следующие месяцы будут в списке
        expect(result.current.months).toHaveLength(12 - currentMonth + 1);
        // Ожидаем, что текущий год и следующие годы будут в списке
        expect(result.current.years).toHaveLength(2030 - currentYear + 1);
        // Ожидаем, что в списке будут все дни
        expect(result.current.days).toHaveLength(daysInCurrentMonth(currentYear, currentMonth));
    });

    it('returns filtered lists for user type', () => {
        const { result, rerender } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'user')
            , {
                initialProps: initialValues
            });

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        const month = monthsList().find(m => m.postValue === currentMonth)

        rerender({
            year: { value: currentYear, postValue: currentYear },
            month: { value: month!.value, postValue: currentMonth },
            day: { value: currentDay, postValue: currentDay }
        });

        // Проверяем отфильтрованные списки
        expect(result.current.months).toHaveLength(12 - currentMonth + 1);
        // Ожидаем, что текущий год и следующие годы будут в списке
        expect(result.current.years).toHaveLength(2030 - currentYear + 1);
        // Ожидаем, что в списке будут только предстоящие дни текущего месяца
        expect(result.current.days).toHaveLength(daysInCurrentMonth(currentYear, currentMonth) - currentDay);

    });

    it("returns an array of years from 2010 to 2030", () => {
        const { result } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'admin')
            , {
                initialProps: initialValues
            });

        const expectedYears = [];
        for (let i = 2010; i <= 2030; i++) {
            expectedYears.push({ value: i, postValue: i });
        }

        expect(result.current.years).toEqual(expectedYears);
    });

    it("returns an array of days in current month and year", () => {
        const { result } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'admin')
            , {
                initialProps: initialValues
            });

        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;

        const expectedDays = [];
        for (let i = 1; i <= daysInCurrentMonth(currentYear, currentMonth); i++) {
            expectedDays.push({ value: i, postValue: i });
        }

        expect(result.current.days).toEqual(expectedDays);
    });

    it('returns the highest day when changing the month', () => {
        const { result, rerender } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'user')
            , {
                initialProps: initialValues
            });

        rerender({
            year: { value: 2024, postValue: 2024 },
            month: { value: "Февраль", postValue: 2 }, //выбираем февраль у которого 29 дней
            day: { value: 31, postValue: 31 } //ставим день на 31 число
        });

        //Ожидаем, что последний день в списке будет равен 29
        expect(result.current.days[result.current.days.length - 1].postValue).toBe(29)
    });

    it('returns the current day, month and year, if selected irrelevant date', () => {
        const { result, rerender } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'user')
            , {
                initialProps: initialValues
            });

        const currentDate = new Date()
        const currentDay = currentDate.getDate(); //получаем текущий день
        const currentYear = currentDate.getFullYear(); //получаем текущий день
        const currentMonth = currentDate.getMonth() + 1; //получаем текущий месяц

        rerender({
            year: { value: 2010, postValue: 2010}, //Ставлю 2010 год
            month: { value: "Январь", postValue: 1 }, //выбираем февраль у которого 29 дней
            day: { value: 31, postValue: 31 } //ставим день на 31 число
        });

        console.log(result.current.months)
        //Ожидаем что получим текущий месяц, текущего года, так как не можем выбирать месяц, который был до текущего месяца
        expect(result.current.months[0].postValue).toBe(currentMonth)
        //Ожидаем что получим текущий год, так как не можем выбирать год, который был до текущего года
        expect(result.current.years[0].postValue).toBe(currentYear)
        //Ожидаем что получим завтрашний день текущего месяца, текущего года
        // expect(result.current.days[0].postValue).toBe(currentDay + 1)
    });

    it('returns the tomorrow day, if selected current month and year', () => {
        const { result, rerender } = renderHook(({ year, month, day }) =>
                useDate(year, month, jest.fn(), day, jest.fn(), 'user')
            , {
                initialProps: initialValues
            });

        const currentDate = new Date()
        const currentDay = currentDate.getDate(); //получаем текущий день
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const month = monthsList().find(m => m.postValue === currentMonth)

        rerender({
            year: { value: currentYear, postValue: currentYear},
            month: { value: month!.value, postValue: currentMonth },
            day: { value: 1, postValue: 1 } //выбираем 1-е число
        });

        //Ожидаем что получим завтрашний день текущего месяца, текущего года, а не 1 число
        expect(result.current.days[0].postValue).toBe(currentDay + 1)
    });
})