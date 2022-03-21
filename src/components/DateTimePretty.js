import fromDate from "../services/fromDate";
import React from "react";

export default function DateTimePretty(props) {
    const { date, Component } = props;
    return <Component date={fromDate(date)} />
}