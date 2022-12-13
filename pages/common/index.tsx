import React from "react";
import ButtonCf from "../../components/button";
import Header from "../../components/header";
import styles from "../../styles//Home.module.css";

const Demo = () => {
  return (
    <div>
      <Header />
      <div className={styles.description}>
        <h1>Button</h1>
        <ButtonCf variant="warning">warning</ButtonCf>
        <ButtonCf variant="default">default</ButtonCf>
      </div>
    </div>
  );
};

export default Demo;
