import React from "react";
import styled from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styled.successCheckmark}>
      <div className={styled.checkIcon}>
        <span className={`${styled.iconLine} ${styled.lineTip}`}></span>
        <span className={`${styled.iconLine} ${styled.lineLong}`}></span>
        <div className={styled.iconCircle}></div>
        <div className={styled.iconFix}></div>
      </div>
    </div>
  );
};
