import { Product } from "@/app/types";
import { pickRandomItems } from "@/app/utils";
import ProductDetailCard from "./card/Product-detail-card";
import { Spinner } from "react-bootstrap";

const BestSellerProduct = ({ products }: { products: Product[] }) => {
  if (!products.length) {
    return <div className="d-flex justify-content-center"><Spinner variant="primary" animation="border" /></div>;
  }
  return (
    <div className="mb-4 container-md">
      <div className="w-100 editors-pic-title d-flex flex-column">
        <div className="section-heading p-4 d-flex flex-column justify-content-center align-items-center mx-auto mt-5">
          <small><p className="mb-1 d-flex justify-content-center">Feature Post</p></small>
          <h2 className="d-flex justify-content-center">Bestseller Products</h2>
          <small><p className="mb-1 d-flex justify-content-center" style={{ minWidth: '300px' }}>Our overall best performing products</p></small>
        </div>
        <div className=' d-flex flex-row gap-2 flex-wrap' >{
          pickRandomItems([...products]).map((product) => (
            <ProductDetailCard product={product} key={product.id} />
          ))
        }</div>
      </div>
    </div>

  );
}

export default BestSellerProduct;