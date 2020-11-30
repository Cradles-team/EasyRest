import React from "react";

const StoreContext = React.createContext({
    data: {},
    dataArr: [],
    updataArr: (arr) => {
    },
    sortArr: (arr, compareFunc) => {
    },
});

export default StoreContext;