function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <button
        disabled={
          currentPage === 1
        }
        onClick={() =>
          setCurrentPage(
            currentPage - 1
          )
        }
      >
        Previous
      </button>

      <span
        style={{
          margin: "0 10px",
        }}
      >
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          setCurrentPage(
            currentPage + 1
          )
        }
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;