import { useState } from "react";

export type ReceivedProps = Record<string, any>;

const useSearch = (props: ReceivedProps) => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };
  const clear = () => {
    setSearch(undefined);
  };
  return {
    ...props,
    search,
    setSearch,
    onChange,
    clear,
  };
};

export type Props = ReturnType<typeof useSearch>;

export default useSearch;
