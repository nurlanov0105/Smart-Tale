import React, { FC } from "react";
import { AdminRoutes } from "../model/adminRoutes";
import { AdminItem } from "@/entities/admin/adminNavItem";
import styles from "./styles.module.scss";

const AdminCategories: FC = () => {
   return (
      <ul className={styles.list}>
         {AdminRoutes.map((item) => (
            <AdminItem {...item} key={item.id} />
         ))}
      </ul>
   );
};

export default AdminCategories;
