import Header from "@/components/Layout/Header";
import Menu from "@/components/Layout/Menu";
import { LayoutProvider } from "@/contexts/useLayout";
import { SearchProvider } from "@/contexts/useSearch";

function ErrorPage() {
  return (
    <div className={` font-exo2 text-black bg-gray-100 min-h-screen`}>
      <LayoutProvider>
        <SearchProvider>
          <Header />
          <div className="flex">
            <Menu />
            <div className="flex flex-col items-center justify-center flex-1 min-h-screen">
              <h1 className="text-2xl font-bold">404 not found or error</h1>
            </div>
          </div>
        </SearchProvider>
      </LayoutProvider>
    </div>
  );
}

export default ErrorPage;
