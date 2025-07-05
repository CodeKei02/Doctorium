export const Text: React.FC<{ page: string }> = ({ page }) => {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-lg text-center text-gray-500">
        {" "}
        {page} - En desarrollo
      </h2>
    </div>
  );
};
