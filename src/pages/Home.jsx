import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      setProducts(result);
    } catch (error) {
      console.log("Error occurred:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">

      {loading ?
        (
          <div className="w-full mt-20 flex justify-center">
            <Spinner />
          </div>
        ) :
        (
          <div className="w-full mx-auto grid grid-cols-3 justify-items-center justify-center gap-y-16 gap-x-7 mt-24 mb-10 px-20">
            {
              products.map((product) => (
                <Product key={product.id} product={product} />

              ))}
          </div>
        )
      }
    </div>
  );
};

export default Home;
