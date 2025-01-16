"use client";
import { useState } from "react";

export const usePagination = <T = any>({
  items,
  maxItemsPerPage,
}: {
  items: T[];
  maxItemsPerPage: number;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const pages: number = Math.ceil(items.length / maxItemsPerPage);

  const endIndex: number = currentPage + maxItemsPerPage;
  const paginatedItems = items.slice(currentPage, endIndex);

  const handlePaginationClick = (index: number) => {
    const newCurrentPage = (index * maxItemsPerPage) % items.length;
    setCurrentPage(newCurrentPage);
  };

  return {
    paginatedItems,
    pages,
    handlePaginationClick,
  };
};
