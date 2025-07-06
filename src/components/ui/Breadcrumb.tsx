"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";

interface BreadcrumbProps {
  tabs: { label: string }[];
  children: React.ReactNode;
  onTabChange: (tab: string) => void;
}

export default function Breadcrumb({
  tabs,
  children,
  onTabChange,
}: BreadcrumbProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <ul className="list-none p-0 m-0 border rounded-lg border-gray-200 font-medium text-sm flex w-full max-w-100">
        {tabs.map((item) => (
          <motion.li
            key={item.label}
            initial={false}
            animate={{
              backgroundColor:
                item === selectedTab ? "hsl(262, 83%, 58%)" : "#eee0",
              color: item === selectedTab ? "white" : "gray",
            }}
            className="w-full list-none p-1 m-1 rounded-lg cursor-pointer flex justify-center items-center"
            onClick={() => {
              setSelectedTab(item);
              onTabChange(item.label);
            }}
          >
            {item.label}
            {item === selectedTab ? (
              <motion.div
                className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[var(--accent)]"
                layoutId="underline"
                id="underline"
              />
            ) : null}
          </motion.li>
        ))}
      </ul>

      <div className="w-full mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
