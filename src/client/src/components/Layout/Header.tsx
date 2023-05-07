// import useLayout from "@/contexts/useLayout";
import { useState } from "react";
import Button from "../Button";
import Search from "@/assets/images/icons/search.svg";
import Dropdown, { Option } from "../Dropdown";
import useSearch from "@/contexts/useSearch";
import { Link } from "react-router-dom";

import logo from "@/assets/images/logo.png";

const options = [
  { value: "Заказчик", label: "Заказчик" },
  { value: "Поставщик", label: "Поставщик" },
  { value: "Комбинированный", label: "Комбинированный" },
];
function Header() {
  const { search, setSearch } = useSearch();
  // const { layout, setLayout } = useLayout();

  const [selectedOption, setSelectedOption] = useState({
    value: "Роль",
    label: "Роль",
  });

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
  };
  return (
    <header
      className={`px-16 py-4  shadow-purple flex justify-between items-center bg-white  w-full transition-all duration-300`}
    >
      <Link to="/" className="h-8">
        <img src={logo} width={192} height={32} alt="logo" />
      </Link>
      <div className=" relative bg-[#F6F6F6] rounded-lg min-w-[400px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Поиск (по ИНН)"
          className="w-full text-center px-4 py-2 bg-[#F6F6F6]  rounded-lg h-full"
        />
        {/* <Search className="absolute right-2 hover:cursor-pointer top-[50%] translate-y-[-50%]" /> */}
        <div className="absolute right-2 top-[50%] translate-y-[-50%]">
          <Search />
        </div>
      </div>{" "}
      <div className="flex gap-4">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
        <Button type="light" className="px-2">
          Личный Кабинет
        </Button>
      </div>
    </header>
  );
}

export default Header;
