import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/contexts/store";
import { Sidebar } from "@/components/layout/Sidebar";
import { useSidebar } from "@/hooks/useSidebar";

const AppContent = ({
  Component,
  pageProps,
}: Pick<AppProps, "Component" | "pageProps">) => {
  const { isOpen } = useSidebar();
  return (
    <div className={`min-h-screen bg-gray-50 ${isOpen ? "md:ml-64" : ""}`}>
      <Sidebar />
      <main className="pt-5 px-4 max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
};

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AppContent Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

export default App;
