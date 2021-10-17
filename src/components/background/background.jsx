import React, { useEffect } from "react";

export const Background = (props) => {
    useEffect(() => {
        props.startEventsGenerator(5000);
    });

    return <></>;
};
