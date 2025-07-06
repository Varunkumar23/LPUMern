import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

const LIMIT = 10;
const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const searchText = searchParams.get("text");
  const [page, setPage] = useState(1);
  const getSearchResults = async () => {
    try {
      const skip = LIMIT * (page - 1);
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${searchText}&limit=${LIMIT}&skip=${skip}`
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.log(`Error getting the product info: ${err.message}`);
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [searchText,page]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-4 py-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-amber-700 mb-6 text-center">
          Search Results{searchText ? ` for "${searchText}"` : ""}
        </h1>
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg mt-10">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((elem) => (
              <ProductCard key={elem.id} {...elem} />
            ))}
          </div>
        )}
        <div className="flex justify-center mt-10 gap-3">
          <button
            className="px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold shadow hover:bg-amber-800 transition"
            onClick={() => setPage(1)}
          >
            1
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold shadow hover:bg-amber-800 transition"
            onClick={() => setPage(2)}
          >
            2
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold shadow hover:bg-amber-800 transition"
            onClick={() => setPage(3)}
          >
            3
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-amber-700 text-white font-semibold shadow hover:bg-amber-800 transition"
            onClick={() => setPage(4)}
          >
            4
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { SearchPage };
