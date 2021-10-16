import React, { useEffect } from "react";

export const Background = (props) => {
    const randomMessage = () => {
        setInterval(() => alert(Math.random() * 10), 5000);
    };

    useEffect(() => randomMessage());

    return <></>;
};
