import { ISize } from "@/features/user/standartCard";

export const categoryData = (data: any, selectedCategory: string) => {
   if (selectedCategory === "Описание") {
      return <p>{data.data.description}</p>;
   } else if (selectedCategory === "Контакты автора") {
      return (
         <ul>
            <li>
               Номер телефона: {data.data.phone_number ? data.data.phone_number : "Отсутствует"}
            </li>
            <li>Почта: {data.data.email ? data.data.email : "Отсутствует"}</li>
         </ul>
      );
   } else {
      return (
         <ul>
            {data.data.size.map((item: ISize, i: number) => (
               <li key={i}>{item.size}</li>
            ))}
         </ul>
      );
   }
};
