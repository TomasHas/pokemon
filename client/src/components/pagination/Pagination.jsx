import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i < totalPages + 1; i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);
  // console.log("totalPages", totalPages);
  // // console.log("totalItems", totalItems);
  // // console.log("dataLength,", dataLength);
  // console.log("currentPage", currentPage);
  // console.log("totalPages", totalPages);
  return (
    <div className={styles.container}>
      {pageNumbers.map((n) => {
        return (
          <button
            className={styles.btn}
            key={n}
            onClick={() => setCurrentPage(n)}
            disabled={n === currentPage}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
