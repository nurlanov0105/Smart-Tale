import React, {FC, useMemo} from "react";
import { SelectDateField } from "@/shared/ui";
import { DateProps } from "../model/types";
import {Controller} from "react-hook-form";
import {useDate2} from "@/entities/general/selectDate/model/useDate2";
import styles from "./styles.module.scss";

const SelectDate: FC<DateProps> = ({
        month,
        control,
        year,
        day,
        setValue,
        type = "admin", //user будем только передавать, admin по дефолту

    }) => {


   const { days, months, years
   } = useDate2(year, month, day, type, setValue);

   return (
      <div className={styles.date}>
          <Controller
              name="day"
              control={control}
              defaultValue={day}
              rules={{ required: 'Выберите день' }}
              render={({ field }) => (
                  <SelectDateField
                      data={days}
                      value={field.value}
                      setDate={(value) => {
                          field.onChange(value);
                      }}
                      title="День"
                      classname={styles.date__day}
                      type={type}
                  />
              )}
          />

          <Controller
              name="month"
              control={control}
              defaultValue={month}
              rules={{ required: 'Выберите месяц' }}
              render={({ field }) => (
                  <SelectDateField
                      data={months}
                      value={field.value}
                      setDate={(value) => {
                          field.onChange(value);
                      }}
                      title="Месяц"
                      classname={styles.date__month}
                      type={type}
                  />
              )}
          />
          <Controller
              name="year"
              control={control}
              defaultValue={year}
              rules={{ required: 'Выберите год' }}
              render={({ field }) => (
                  <SelectDateField
                      data={years}
                      setDate={(value) => {
                          field.onChange(value);
                      }}
                      value={field.value}
                      title="Год"
                      classname={styles.date__year}
                      type={type}
                  />
              )}
          />
      </div>
   );
};

export default SelectDate;
