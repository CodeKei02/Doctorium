import type { AppProps } from "next/app";
import { Sidebar } from "@/components/layout/Sidebar";
import "@/styles/globals.css";
import { useSidebarStore } from "@/stores/sidebar";

const AppContent = ({
  Component,
  pageProps,
}: Pick<AppProps, "Component" | "pageProps">) => {
  const { isOpen } = useSidebarStore();
  return (
    <div className={`min-h-screen mb-5 bg-gray-50 ${isOpen ? "md:ml-64" : ""}`}>
      <Sidebar />
      <main className="pt-5 px-4 max-w-full">
        <div className="max-w-7xl mx-auto">
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
};

export const App = ({ Component, pageProps }: AppProps) => {
  return <AppContent Component={Component} pageProps={pageProps} />;
};

export default App;
