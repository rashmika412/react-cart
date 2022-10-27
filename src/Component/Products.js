import Productitem from "./Productitem";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../page/CartContext";



const Products = (props) => {
  // console.log(props);
  // const { name } = useContext(CartContext);


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((products) => {
        // console.log("check products", products);
        setProducts(products);
      });
  }, []);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products { }</h1>

      <div className="grid grid-cols-5 my-8 gap-24">
        {products.map((pizza) => (
          <Productitem key={pizza._id} food={pizza} />
        ))}
      </div>
    </div>
  );
};

export default Products;
