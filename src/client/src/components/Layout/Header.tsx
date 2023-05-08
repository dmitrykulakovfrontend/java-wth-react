// import useLayout from "@/contexts/useLayout";
import React, { useState } from "react";
import Button from "../Button";
import Search from "@/assets/images/icons/search.svg";
import Dropdown, { Option } from "../Dropdown";
import useSearch from "@/contexts/useSearch";
import { Link, useNavigate } from "react-router-dom";

import logo from "@/assets/images/logo.png";

const options = [
  { value: "customer", label: "Заказчик" },
  { value: "supplier", label: "Поставщик" },
];
function Header() {
  // const { search, setSearch } = useSearch();
  const [search, setSearch] = useState("");
  // const { layout, setLayout } = useLayout();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState({
    value: "type",
    label: "Тип",
  });
  const searchType =
    selectedOption.value === "type" ? "customer" : selectedOption.value;

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
      <div className="flex gap-2">
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/company/${search}/${searchType}`);
          }}
          className=" relative bg-[#F6F6F6] rounded-lg min-w-[400px]"
        >
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            placeholder="Поиск (по ИНН)"
            className="w-full text-center px-4 py-2 bg-[#F6F6F6]  rounded-lg h-full"
          />
          {/* <Search className="absolute right-2 hover:cursor-pointer top-[50%] translate-y-[-50%]" /> */}
          <button
            type="submit"
            className="absolute right-2 top-[50%] translate-y-[-50%]"
          >
            <Search />
          </button>
        </form>
      </div>
      <Button type="light" className="px-4 py-2">
        Личный Кабинет
      </Button>
    </header>
  );
}

export default Header;
