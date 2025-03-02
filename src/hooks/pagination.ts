"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const usePagination = <T = any>({
  items,
  maxItemsPerPage,
}: {
  items: T[];
  maxItemsPerPage: number;
}) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages: number = Math.ceil(items.length / maxItemsPerPage);

  const endIndex: number = currentPage + maxItemsPerPage;
  const paginatedItems = items.slice(currentPage, endIndex);

  const handlePaginationClick = (event: { selected: number }) => {
    const newCurrentPage = (event.selected * maxItemsPerPage) % items.length;
    setCurrentPage(newCurrentPage);
    router.push("#projects", { scroll: true });
  };

  return {
    paginatedItems,
    pages,
    handlePaginationClick,
  };
};
