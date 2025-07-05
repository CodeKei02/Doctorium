export const Indicator = ({ indicatorColor }: { indicatorColor: string }) => {
  return <span className={`w-2 h-2 ${indicatorColor} rounded-full`}></span>;
};
