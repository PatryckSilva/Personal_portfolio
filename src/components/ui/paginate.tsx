import { usePagination } from "@/hooks/pagination";
import ReactPaginate from "react-paginate";

type handlePagination = ReturnType<
  typeof usePagination
>["handlePaginationClick"];

type PaginationProps = {
  pages: number;
  handlePaginationClick: handlePagination;
};

export const Pagination = ({
  handlePaginationClick,
  pages,
}: PaginationProps) => {
  return (
    <div className={`mb-5`}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={">"}
        previousLabel={"<"}
        onPageChange={handlePaginationClick}
        pageRangeDisplayed={0}
        pageCount={pages}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousClassName="page-num"
        nextClassName="page-num"
        breakClassName="ellipsis"
        disabledClassName="disabled"
        activeClassName="active"
        pageLinkClassName="link_pagination"
      />
    </div>
  );
};
