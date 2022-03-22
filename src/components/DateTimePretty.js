import fromDate from "../services/fromDate";
import React from "react";

export default function DateTimePretty(Component) {
    return function (props) {
        const { date } = props;
        return <Component date={fromDate(date)} />
    }
}