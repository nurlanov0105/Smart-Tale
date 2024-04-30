import React from "react";

import styles from "./(main)/styles.module.scss";

const LoadingPage = () => {
   return (
      <div className={styles.loader}>
         <div className="spinner" />
      </div>
   );
};

export default LoadingPage;
