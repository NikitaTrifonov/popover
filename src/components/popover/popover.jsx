import React from "react";
import { getEventTimeMessage } from "../../common/dateUtils.js";
import style from "./popover.module.css";

export const Popover = (props) => {
    const events = [
        { date: new Date(2021, 9, 16, 22, 0, 0), text: "Event!" },
        { date: new Date(2021, 9, 17, 1, 0, 0), text: "Event!" },
        { date: new Date(), text: "Event!" },
        { date: new Date(), text: "Event!" },
        { date: new Date(), text: "Event!" },
        { date: new Date(), text: "Event!" },
    ];

    return (
        <div className={style.popover_wrapper}>
            <div className={style.triangle}></div>
            <div className={style.popover_body}>
                {events.map((e, i) => (
                    <div key={i} className={style.event}>
                        <div className={style.title}>{e.text}</div>
                        <div className={style.date}>{getEventTimeMessage(e.date)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
