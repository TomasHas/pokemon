import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import CardContainer from "../../components/cardContainer/CardContainer";
import Pagination from "../../components/pagination/Pagination";
import { fetchPokemons } from "../../features/pokemonSlice";
import styles from "./home.module.css";
import Filters from "../../components/filters/Filters";

function Home() {
  const data = useSelector((state) => state.pokemon.filteredPokemons);
  // console.log(data);
  // console.log(data.length);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showFilters, setShowFilters] = useState(true);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // console.log("currentPage", currentPage);
  // console.log("totalPages", totalPages);
  // console.log("totalItems", totalItems);
  // console.log("data", data);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(startIndex, endIndex);
  // console.log(data.slice(startIndex, endIndex));

  // const handlePageClick = (page) => {
  //   console.log("page", page);
  //   setCurrentPage(page);
  // };

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      {/* <h1>Home</h1> */}
      <CardContainer data={itemsToShow} />{" "}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        // handlePageClick={handlePageClick}
      />
    </div>
  );
}

export default Home;
