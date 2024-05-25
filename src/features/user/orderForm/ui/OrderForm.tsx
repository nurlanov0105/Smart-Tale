import React, {FC} from "react";
import { AddImages } from "@/features/general/addImages";
import { SelectDate } from "@/entities/general/selectDate";
import {Button, InputField, PhoneInput, TextArea} from "@/shared/ui";
import type {  OrderProps } from "../model/types";
import { useThemeStore } from "@/shared/themeStore";
import { ORDER_FORM_NAMES, sizesDataLetters, sizesDataNumbers, sizesTypes} from "../model/consts.data";
import { currencies } from "@/widgets/user/createVacancy/model/values.data";
import { SizeItem } from "@/entities/user/sizeItem";

import { useOrderForm } from "../model/hooks/useOrderForm";
import {descriptionSchema, emailSchema, priceSchema, titleSchema} from "../model/validationSchema";
import {Controller} from "react-hook-form";
import Select2 from "@/shared/ui/select/Select2";
import clsx from "clsx";
import styles from "./styles.module.scss";

const OrderForm: FC<OrderProps> = ({ type }) => {
   const theme = useThemeStore((state) => state.theme);

   const {
      handleSubmit,
      isError,
      isLoading,
      register,
      errors,
      isValid ,
      control,
       setValue,
       watch
   } = useOrderForm(type) //Тип создания(заказа или оборудования)

   const sizes = watch('sizes')
   const sizeType = watch('sizeType', { value: sizesTypes[0].value, postValue: sizesTypes[0].postValue })

   const month = watch("month") || {value: "", postValue: 0}
   const year = watch("year") || {value: 0, postValue: 0}
   const day = watch("day") || {value: 0, postValue: 0}


   return (
      <form onSubmit={handleSubmit} className={clsx(styles.form, styles[theme])}>
         <div className={styles.order}>
            <InputField
                {...register(ORDER_FORM_NAMES.title, titleSchema)}
                classname={styles.order__margin}
                disabled={false}
                type="text"
                error={errors.title?.message}
                title="Название"
            />
            <div className={styles.order__areaWrapper}>
               <TextArea
                   {...register(ORDER_FORM_NAMES.description, descriptionSchema)}
                   isDisabled={false}
                   error={errors.description?.message}
                   title="Описание"
                   type="default"
               />
            </div>

            <div className={styles.order__block_flex}>
               <div style={{width: "100%"}}>
                  <InputField
                      {...register(ORDER_FORM_NAMES.price, priceSchema)}
                      error={errors.price?.message}
                      classname={styles.order__margin}
                      disabled={false}
                      type="number"
                      title="Стоимость"
                  />
               </div>

               <div>
                  <Controller
                      name="currency"
                      control={control}
                      defaultValue={currencies[0]}
                      rules={{required: 'Выберите валюту'}}
                      render={({field}) => (
                          <Select2
                              value={field.value}
                              onChange={field.onChange}
                              data={currencies}
                              type="vacancy"
                              classname={styles.order__currency}
                          />
                      )}
                  />
               </div>

            </div>

            {
                type === "order" &&
                <div className={clsx(styles.order__select)}>
                   <h4 className="h4">Тип размера</h4>
                   <Controller
                       name="sizeType"
                       control={control}
                       defaultValue={sizesTypes[0]}
                       rules={{required: 'Выберите размер'}}
                       render={({field}) => (
                           <Select2
                               value={field.value}
                               onChange={field.onChange}
                               data={sizesTypes}
                               type="vacancy"
                               error={errors?.sizes?.message}
                           />

                       )}
                   />
                </div>
            }

            {
                type === "order" &&
                <div className={clsx(styles.order__select)}>
                   <h4 className="h4">Размеры</h4>
                   <Controller
                       name="sizes"
                       control={control}
                       defaultValue={[]}
                       rules={{required: 'Выберите размер'}}
                       render={({field}) => (
                           <Select2
                               value={field.value}
                               onChange={field.onChange}
                               data={sizeType.postValue === "letter" ? sizesDataLetters : sizesDataNumbers}
                               type="vacancy"
                               error={errors?.sizes?.message}
                               typeData="sizes"
                               sizeType={sizeType?.postValue}
                           />

                       )}
                   />
                   {errors && <p className={styles.order__error}>{errors.sizes?.message}</p>}

                   {!!sizes?.length && (
                       <ul className={styles.order__sizes}>
                          {sizes?.map((size, idx) => (
                              <SizeItem
                                  sizes={sizes}
                                  key={idx}
                                  size={size}
                                  setValue={setValue}
                                  idx={idx}
                              />
                          ))}
                       </ul>
                   )}
                </div>
            }

            {
                type === "order" &&
                <div className={styles.order__block_row}>
                   <h4 className="h4">Крайняя дата выполнения</h4>
                   <div className={styles.order__margin}>
                      <SelectDate
                          setValue={setValue}
                          control={control}

                          day={day}
                          month={month}
                          year={year}

                          type="user"
                      />
                   </div>
                   {errors.day?.message || errors.month?.message || errors.year?.message
                       && <p className={clsx(styles.order__error)}>Выберите дату</p>}
                </div>
            }
            <div className={styles.order__block}>
               <h4 className="h4">Галерея фотографий</h4>

               <Controller
                   name="images"
                   control={control}
                   rules={{required: 'This field is required'}}
                   render={({field}) => (
                       <AddImages
                           images={field.value}
                           setImages={field.onChange}
                           setValue={setValue}
                       />
                   )}
               />
            </div>

            <div className={clsx(styles.order__block, styles.order__block_gap)}>
               <h4 className="h4">Контактная информация</h4>

               <PhoneInput
                   error={errors.tel?.message}
                   control={control}
                   classname={styles.order__phoneInput}
               />
               {/*<div>*/}
               {/*   <InputField*/}
               {/*       {...register(ORDER_FORM_NAMES.email, emailSchema)}*/}
               {/*       error={errors.email?.message}*/}
               {/*       classname={styles.order__margin}*/}
               {/*       disabled={false}*/}
               {/*       type="email"*/}
               {/*       title="Почта"*/}
               {/*   />*/}
               {/*</div>*/}
            </div>
         </div>

         <div className={styles.order__btns}>
            <Button disabled={!isValid || isLoading} type="submit">
               {
                  isLoading ? "Загрузка..." : "Разместить объявление"
               }
            </Button>
         </div>
      </form>
   );
};

export default OrderForm;
