import React, { useContext, useState } from "react";
import StoreContext from "../../../StoreContext";
import { Input } from "antd";
import { StyledButton, StyledSearch } from "./Search.styled";
import "antd/dist/antd.css";

const Search = ({ textValue = 0 }) => {
  const { data } = useContext(StoreContext);

  const [searchValue, setSearchValue] = useState("");
  return (
    <StoreContext.Consumer>
      {({ dataArr, updataArr, sortArr }) => (
        <StyledSearch>
          <Input
            placeholder="Enter name"
            allowClear
            enterButton="Search"
            style={{ width: "100%" }}
            onChange={e => {
              setSearchValue(e.target.value.toLowerCase());
            }}
          />
          <StyledButton
            type="primary"
            onClick={() => {
              let arr = Object.values(data).filter(item =>
                item.name.toLowerCase().includes(searchValue)
              );
              updataArr(arr);
            }}
          >
            Apply
          </StyledButton>
        </StyledSearch>
      )}
    </StoreContext.Consumer>
  );
};

export default Search;
