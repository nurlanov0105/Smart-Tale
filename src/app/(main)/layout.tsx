import React, {FC, PropsWithChildren} from "react";
import { Navbar } from "@/widgets/general/navbar";
import { Header } from "@/widgets/general/header";
import { NavbarLine } from "@/entities/general/navbarLine";
import { HeaderIntro } from "@/entities/general/headerIntro";
import styles from "./styles.module.scss";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <main className={styles.main}>
         <NavbarLine />
         <Navbar />
         <div className={styles.main__wrapper}>
            <Header />
            <div className={styles.main__content}>
               <div className={styles.main__intro}>
                  <HeaderIntro />
               </div>
                {/*<Suspense fallback={<p>Loading...</p>}>*/}
                {/*    {children}*/}
                {/*</Suspense>*/}
                {children}
            </div>
         </div>
      </main>
   );
};

export default MainLayout;


//Тест-драйв
//1. 7 дней
//2. Создание собственной организации
//3. Возможность принимать заказы
//4. Доступ к админке
//5. Удобное управление организацией
//6. Качественный мониторинг заказов
//7. Добавление сотрудников в свою организацию с выдачей прав доступа
//8. Количество организаций для создания - 1

//700 сом

//Базовый
//1. 2 месяца
//2. Создание собственной организации
//3. Возможность принимать заказы
//4. Доступ к админке
//5. Удобное управление организацией
//6. Качественный мониторинг заказов
//7. Добавление сотрудников в свою организацию с выдачей прав доступа
//8. Количество организаций для создания - 1

//3000 сом
//1500 сом



//Премиум
//1. Навсегда
//2. Создание собственной организации
//3. Возможность принимать заказы
//4. Доступ к админке
//5. Удобное управление организацией
//6. Качественный мониторинг заказов
//7. Добавление сотрудников в свою организацию с выдачей прав доступа
//8. Количество организаций для создания - Infinity

//10000 сом
//5000 сом