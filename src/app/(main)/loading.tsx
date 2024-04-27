import React from "react";

import styles from "./styles.module.scss";

const LoadingPage = () => {
   return (
      <div className={styles.loader}>
         <div className="spinner" />
      </div>
   );
};

export default LoadingPage;
