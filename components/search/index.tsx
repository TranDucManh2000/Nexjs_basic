import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FC } from "react";
import useSearch from "./hook";
import { ReceivedProps } from "./hook";
import SearchWrapper from "./styled";

const SearchLayout: FC<ReceivedProps> = ({ search, onChange, clear }) => {
  const suffix = <SearchOutlined style={{ fontSize: 20, color: "#fff" }} />;
  return (
    <SearchWrapper>
      <Input
        prefix={suffix}
        placeholder="Search collections & users"
        // allowClear
        value={search}
        onChange={onChange}
        className="inpurSearch"
        suffix={
          search === undefined || search === "" ? (
            ""
          ) : (
            <CloseOutlined
              onClick={clear}
              style={{ fontSize: 15, color: "#fff" }}
            />
          )
        }
      />
    </SearchWrapper>
  );
};

const SearchNft: FC<ReceivedProps> = (props) => (
  <SearchLayout {...useSearch(props)} />
);

export default SearchNft;
