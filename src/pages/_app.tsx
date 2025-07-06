import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/contexts/store";
import { Sidebar } from "@/components/layout/Sidebar";
import { useSidebar } from "@/hooks/useSidebar";

const AppContent = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  const { isOpen } = useSidebar();
  return (
    <div className={`min-h-screen bg-gray-50 ${isOpen ? "md:ml-64" : ""}`}>
      <Sidebar />
      <main className="pt-5 mb-4 px-4 max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
};

export const App = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <Provider store={store}>
      <AppContent Component={Component} pageProps={pageProps} />
    </Provider>
  );
};

export default App;
