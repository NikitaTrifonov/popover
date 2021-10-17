import React from "react";
import { PopoverContainer } from "../popover/popoverContainer";
import style from "./body.module.css";

export const Body = (props) => {
    const { isShowPopover } = props;

    return <div className={style.body_wrapper}>{isShowPopover && <PopoverContainer />}</div>;
};
