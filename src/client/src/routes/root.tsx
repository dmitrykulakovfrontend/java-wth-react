import Header from "@/components/Layout/Header";
import Menu from "@/components/Layout/Menu";
import { LayoutProvider } from "@/contexts/useLayout";
import { SearchProvider } from "@/contexts/useSearch";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className={` font-exo2 text-black bg-gray-100 min-h-screen`}>
      <LayoutProvider>
        <SearchProvider>
          <Header />
          <div className="flex">
            <Menu />
            <Outlet />
          </div>
        </SearchProvider>
      </LayoutProvider>
    </div>
  );
}

export default Root;
