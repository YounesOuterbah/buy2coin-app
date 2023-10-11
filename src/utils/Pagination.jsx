import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

export const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatePages = [];
  for (let i = 1; i <= pages; i++) {
    generatePages.push(i);
  }
  return (
    <>
      <div className="pagination flex justify-center mt-6 text-white">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="cursor-pointer mx-1 bg-[#26272b] w-8 h-8 flex items-center justify-center rounded-full p-1 disabled:cursor-not-allowed"
        >
          <BiLeftArrow />
        </button>
        {generatePages.map((page) => (
          <div
            key={page}
            className={`cursor-pointer mx-1 bg-[#26272b] w-8 h-8 flex items-center justify-center rounded-full ${
              currentPage === page ? "bg-red-500" : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))}
        <button
          disabled={currentPage === pages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="cursor-pointer mx-1 bg-[#26272b] w-8 h-8 flex items-center justify-center rounded-full p-1 disabled:cursor-not-allowed"
        >
          <BiRightArrow />
        </button>
      </div>
    </>
  );
};
