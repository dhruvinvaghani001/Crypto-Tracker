import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CoinsList from "./CoinsList";
import classes from "./PaginateIteam.module.css";

const PaginatedIteam = (props) => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = props.iteam.slice(itemOffset, endOffset);
  let length = props.iteam.length;

  const pageCount = Math.ceil(length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % length;
    setItemOffset(newOffset);
  };

  return (
    <React.Fragment>
      <CoinsList filteredCoin={currentItems} />
      <ReactPaginate
        className={classes.paginate}
        breakLabel="..."
        itemClass="page-item"
        linkClass="page-link"
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        previousLabel="Previos"
        renderOnZeroPageCount={null}
      />
    </React.Fragment>
  );
};

export default PaginatedIteam;
