import React from "react";
import bell from "../../assets/images/bell-regular.svg";
import style from "./header.module.css";

export const Header = (props) => {
    const eventCount = 3;

    return (
        <div className={style.header_container}>
            <div className={style.ident}></div>
            <div className={style.content}>
                <div className={style.title}>Popover</div>
                <div className={style.icon_container}>
                    <img src={bell} alt="" className={style.icon} />
                    {eventCount > 0 && <div className={style.eventCount}>{eventCount < 5 ? eventCount : "..."}</div>}
                </div>
            </div>
        </div>
    );
};
