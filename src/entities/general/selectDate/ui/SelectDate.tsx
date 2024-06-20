import React, {FC} from "react";
import { SelectDateMenu } from "@/shared/ui";
import { DateProps } from "../model/types";
import {Controller, useFormContext} from "react-hook-form";
import {useDate2} from "@/entities/general/selectDate/model/useDate2";
import styles from "./styles.module.scss";
import {ANNOUNCEMENT_FORM_NAMES} from "@/shared/lib";

const SelectDate: FC<DateProps> = ({type = "admin"}) => {

    const {
        setValue,
        control,
        watch
    } = useFormContext()

    const year = watch(ANNOUNCEMENT_FORM_NAMES.year) || { value: 0, postValue: 0 };
    const month = watch(ANNOUNCEMENT_FORM_NAMES.month) || { value: "", postValue: 0 };
    const day = watch(ANNOUNCEMENT_FORM_NAMES.day) || { value: 0, postValue: 0 };

   const {
       days,
       months,
       years
   } = useDate2({year: year, month: month, day: day, type, setValue});

   return (
      <div className={styles.date}>
          <Controller
              name="day"
              control={control}
              defaultValue={day}
              rules={{ required: 'Выберите день' }}
              render={({ field }) => (
                  <SelectDateMenu
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
                  <SelectDateMenu
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
                  <SelectDateMenu
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
