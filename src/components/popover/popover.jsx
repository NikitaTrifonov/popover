import React from "react";
import { getEventTimeMessage } from "../../common/dateUtils.js";
import style from "./popover.module.css";

export const Popover = (props) => {
    const events = props.events;

    return (
        <div className={style.popover_wrapper}>
            <div className={style.triangle}></div>
            <div className={style.popover_body}>
                {events.map((e) => (
                    <div key={e.id} className={style.event}>
                        <div className={style.title}>{e.title}</div>
                        <div className={style.date}>{getEventTimeMessage(e.date)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
