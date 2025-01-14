import { Input } from "./input";

export const Search = () => {
  return (
    <div className="flex p-5 items-center">
      <Input type="search" />
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  );
};
