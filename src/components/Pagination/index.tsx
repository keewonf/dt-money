import { CaretLeft, CaretRight } from "phosphor-react";
import { ArrowButton, PageButtons, PaginationContainer } from "./styles";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

function getPaginationNumbers(
  currentPage: number,
  totalPages: number
): (number | string)[] {
  const pages: (number | string)[] = [];

  // Only 1 page
  if (totalPages <= 1) return [1];

  // If page is 3 or less
  if (currentPage <= 3) {
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      pages.push(i);
    }
    if (totalPages > 3) pages.push("...");
    pages.push(totalPages);
  }

  // If page is one of the latest
  else if (currentPage >= totalPages - 2) {
    pages.push(1);
    pages.push("...");
    for (let i = totalPages - 2; i <= totalPages; i++) {
      pages.push(i);
    }
  }

  // Page in the middle
  else {
    pages.push(1);
    pages.push("...");
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pages.push(i);
    }
    pages.push("...");
    pages.push(totalPages);
  }

  return pages;
}

export function Pagination({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) {
  const paginationNumbers = getPaginationNumbers(currentPage, totalPages);

  return (
    <PaginationContainer>
      <ArrowButton
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <CaretLeft size={22} weight="bold" />
      </ArrowButton>
      <PageButtons>
        {paginationNumbers.map((page, index) =>
          page === "..." ? (
            <span key={index}>...</span> // Aqui renderizamos o "..."
          ) : (
            <button
              key={index}
              onClick={() => onPageChange(Number(page))}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          )
        )}
      </PageButtons>
      <ArrowButton
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <CaretRight size={22} weight="bold" />
      </ArrowButton>
    </PaginationContainer>
  );
}
