import products from "../data";
import { useParams, Link } from "react-router-dom";

const SingleProduct = () => {
  console.log(useParams());
  const { productId } = useParams();
  const item = products?.find((product) => productId === product.id);
  return (
    <section className="section product">
      <h2>single product</h2>
      <img src={item.image} alt="item" />
      <p>{item.name}</p>
      <Link to="/products" className="btn">
        Back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
