import React from "react";
import { Popover } from "../popover/popover";
import style from "./body.module.css";

export const Body = (props) => {
    const isShowPopover = true;
    return <div className={style.body_wrapper}>{isShowPopover && <Popover />}</div>;
};
