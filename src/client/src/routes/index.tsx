import Button from "@/components/Button";
import CollapsibleTable from "@/components/CollapsibleTable";
import CrossIcon from "@/assets/images/icons/cross.svg";
import FilterIcon from "@/assets/images/icons/filter.svg";
import suppliers from "@/suppliersMock.json";
import companies from "@/companiesMock.json";
import { ChangeEvent, useState } from "react";

export type Filter = {
  sortType: string;
  filteredStatus: number;
  search: string;
  isOpen: boolean;
};
export default function Index() {
  const tableHeaders = [
    "Наименование продукции",
    "ИНН поставщика",
    "Рейтинг",
    "Статус",
  ];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCompanies, _setCurrentCompanies] = useState(companies);
  const [filter, setFilter] = useState<Filter>({
    sortType: "DESC",
    filteredStatus: -1,
    search: "",
    isOpen: false,
  });

  const sortedCompanies = currentCompanies.sort((a, b) =>
    filter.sortType === "DESC" ? b.reit - a.reit : a.reit - b.reit
  );

  return (
    <>
      <main className="w-full p-4 mt-8 text-3xl">
        <h2 className="mb-4">Общий рейтинг</h2>
        <TableControls filter={filter} setFilter={setFilter} />
        <CollapsibleTable
          headers={tableHeaders}
          rows={sortedCompanies}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          innerContent={suppliers}
          typeActivitySearch={filter.search}
          filteredStatus={filter.filteredStatus}
        />
      </main>
    </>
  );
}

export type TableControlsProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

function TableControls({ filter, setFilter }: TableControlsProps) {
  function clearSearch() {
    setFilter({ ...filter, search: "" });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const key = e.target.name;
    const isNumber = /^-?[0-9]+$/.test(value);
    setFilter({ ...filter, [key]: isNumber ? +value : value });
  }

  return (
    <div className="relative flex items-center w-full bg-white border rounded-t-lg ">
      <div
        className="absolute left-6 hover:cursor-pointer "
        onClick={clearSearch}
      >
        <CrossIcon />
      </div>
      <input
        type="text"
        name="search"
        placeholder="Область деятельности"
        value={filter.search}
        onChange={handleChange}
        className="flex-1 w-full p-2 pl-12 bg-transparent rounded-t-lg"
      />
      <FilterMenu
        filter={filter}
        setFilter={setFilter}
        handleChange={handleChange}
      />
      <Button type={"light"} className="absolute px-12 py-2 right-2">
        Найти
      </Button>
    </div>
  );
}

export type FilterMenuProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FilterMenu = ({ filter, handleChange, setFilter }: FilterMenuProps) => {
  function switchFilterMenu() {
    setFilter({ ...filter, isOpen: !filter.isOpen });
  }
  return (
    <div className="absolute right-40 hover:cursor-pointer ">
      <div onClick={switchFilterMenu}>
        <FilterIcon />
      </div>

      {filter.isOpen && (
        <div className="absolute z-10 p-4 bg-white border rounded-lg -right-full w-max top-full">
          <h3 className="mt-4 mb-4 text-xl font-bold">Статус компаний:</h3>
          <div className="flex gap-4">
            <label className="flex gap-2 text-base hover:cursor-pointer">
              <input
                type="radio"
                name="filteredStatus"
                value={-1}
                checked={filter.filteredStatus === -1}
                onChange={handleChange}
              />
              Любой
            </label>
            <label className="flex gap-2 text-base hover:cursor-pointer">
              <input
                type="radio"
                name="filteredStatus"
                value={1}
                checked={filter.filteredStatus === 1}
                onChange={handleChange}
              />
              Только надёжные
            </label>
            <label className="flex gap-2 text-base hover:cursor-pointer">
              <input
                type="radio"
                name="filteredStatus"
                value={0}
                checked={filter.filteredStatus === 0}
                onChange={handleChange}
              />
              Только ненадёжные
            </label>
          </div>
          <h3 className="mt-4 mb-4 text-xl font-bold">Сортировка рейтинга:</h3>
          <div className="flex gap-4">
            <label className="flex gap-2 text-base hover:cursor-pointer">
              <input
                type="radio"
                name="sortType"
                value="DESC"
                checked={filter.sortType === "DESC"}
                onChange={handleChange}
              />
              По убыванию
            </label>
            <label className="flex gap-2 text-base hover:cursor-pointer">
              <input
                type="radio"
                name="sortType"
                value="ASC"
                checked={filter.sortType === "ASC"}
                onChange={handleChange}
              />
              По возрастанию
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
