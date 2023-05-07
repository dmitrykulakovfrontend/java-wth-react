import Button from "@/components/Button";
import CollapsibleTable from "@/components/CollapsibleTable";
import CrossIcon from "@/assets/images/icons/cross.svg";
import FilterIcon from "@/assets/images/icons/filter.svg";
import suppliers from "@/suppliersMock.json";
import companies from "@/companiesMock.json";
import { ChangeEvent, useState } from "react";
import useSearch from "@/contexts/useSearch";
export default function Index() {
  const tableHeaders = [
    "Наименование продукции",
    "ИНН поставщика",
    "Рейтинг",
    "Статус",
  ];
  const [isFilterOpen, setFilterOpen] = useState(false);
  // const [companyType, setCompanyType] = useState("Поставщики");
  const [typeActivitySearch, setTypeActivitySearch] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentCompanies, _setCurrentCompanies] = useState(companies);
  const [filteredStatus, setFilteredStatus] = useState(-1);
  const [ratingSort, setRatingSort] = useState("DESC");

  const { search } = useSearch();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setTypeActivitySearch(e.currentTarget.value);
  }
  // function handleFilterSwitch(e: ChangeEvent<HTMLInputElement>) {
  //   setCompanyType(e.currentTarget.value);
  //   let newCompanies =
  //     e.currentTarget.value === "Поставщики"
  //       ? suppliers
  //       : e.currentTarget.value === "Заказчики"
  //       ? customers
  //       : customersAndSuppliers;
  //   // @ts-ignore
  //   setCurrentCompanies(newCompanies);
  // }
  function handleFilterSwitch(e: ChangeEvent<HTMLInputElement>) {
    setFilteredStatus(+e.currentTarget.value);
  }
  return (
    <>
      <main className="w-full p-4 mt-8 text-3xl ">
        <h2 className="mb-4">Общий рейтинг</h2>
        <div className="relative flex items-center w-full bg-white border rounded-t-lg ">
          <div
            className="absolute left-6 hover:cursor-pointer "
            onClick={() => setTypeActivitySearch("")}
          >
            <CrossIcon />
          </div>
          <input
            type="text"
            placeholder="Область деятельности"
            value={typeActivitySearch}
            onChange={handleSearch}
            className="flex-1 w-full p-2 pl-12 rounded-t-lg"
          />
          <div className="absolute right-40 hover:cursor-pointer ">
            <div onClick={() => setFilterOpen(!isFilterOpen)}>
              <FilterIcon />
            </div>

            {isFilterOpen ? (
              <div className="absolute z-10 p-4 bg-white border rounded-lg -right-full w-max top-full">
                <h3 className="mb-4 text-xl font-bold">Тип компаний:</h3>
                <div className="flex gap-4">
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="companyType"
                      value="Поставщики"
                      // checked={companyType === "Поставщики"}
                      // onChange={handleFilterSwitch}
                    />
                    Поставщики
                  </label>
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="companyType"
                      value="Заказчики"
                      // checked={companyType === "Заказчики"}
                      // onChange={handleFilterSwitch}
                    />
                    Заказчики
                  </label>
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="companyType"
                      value="Все"
                      // checked={companyType === "Все"}
                      // onChange={handleFilterSwitch}
                    />
                    Все
                  </label>
                </div>
                <h3 className="mt-4 mb-4 text-xl font-bold">
                  Статус компаний:
                </h3>
                <div className="flex gap-4">
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="filteredStatus"
                      value={-1}
                      checked={filteredStatus === -1}
                      onChange={handleFilterSwitch}
                    />
                    Любой
                  </label>
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="filteredStatus"
                      value={1}
                      checked={filteredStatus === 1}
                      onChange={handleFilterSwitch}
                    />
                    Только надёжные
                  </label>
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="filteredStatus"
                      value={0}
                      checked={filteredStatus === 0}
                      onChange={handleFilterSwitch}
                    />
                    Только ненадёжные
                  </label>
                </div>
                <h3 className="mt-4 mb-4 text-xl font-bold">
                  Сортировка рейтинга:
                </h3>
                <div className="flex gap-4">
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="ratingSort"
                      value="DESC"
                      checked={ratingSort === "DESC"}
                      onChange={() => setRatingSort("DESC")}
                    />
                    По убыванию
                  </label>
                  <label className="flex gap-2 text-base hover:cursor-pointer">
                    <input
                      type="radio"
                      name="ratingSort"
                      value="ASC"
                      checked={ratingSort === "ASC"}
                      onChange={() => setRatingSort("ASC")}
                    />
                    По возрастанию
                  </label>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Button type={"light"} className="absolute px-12 py-2 right-2">
            Найти
          </Button>
        </div>
        <CollapsibleTable
          headers={tableHeaders}
          rows={currentCompanies.sort((a, b) =>
            ratingSort === "DESC" ? b.reit - a.reit : a.reit - b.reit
          )}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          innerContent={suppliers}
          typeActivitySearch={typeActivitySearch}
          search={search}
          filteredStatus={filteredStatus}
        />
      </main>
    </>
  );
}
