import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const history = useNavigate();

  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`/api/products/${params._id}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
        console.log(product);
      });
  }, [params._id]);

  const addToCart = (e, product) => {
    setAdded(true)
  };
  return (
    <div className="container mx-auto mt-12">
      <button
        className="mb-12 font-bold"
        onClick={() => {
          history(-1);
        }}
      >
        Back
      </button>

      <div className="flex">
        <img src={product.image} alt="pizza" />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.name}</h1>
          <div className="text-md">{product.size}</div>
          <div className="font-bold mt-2">₹ {product.price}</div>
          <button
            disabled={added}
            onClick={(e) => {
              addToCart(e, product);
            }}
            className={`${
              added ? "bg-green-500" : "bg-yellow-500"
            } py-1 px-4 rounded-full font-bold`}
          >
             {added ? "ADDED" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
