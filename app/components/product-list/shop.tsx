import { Product } from "@/app/types";
import { FormSelect } from "react-bootstrap";
import ProductDetailCard from "../card/Product-detail-card";

const Shop = ({ products }: { products: Product[] }) => {
  return (
    <section className="shop container">
      <div className="shop-header d-flex justify-content-between pt-4">
        <h3 className="d-flex justify-content-around " >
          Shop
        </h3>
      </div>
      <div className="filter-actions d-flex justify-content-between py-4">
        <small>Showing all {products.length} results</small>
        <div className="filter d-flex">
          <FormSelect className="me-3" style={{ width: "200px" }}>
            <option>Sort By</option>
            <option value="1">Popularity</option>
            <option value="2">Price low to high</option>
            <option value="3">Price high to low</option>
          </FormSelect>
        </div>
      </div>
      <div className="product-list d-flex flex-wrap">
        {products.map((product) => (
          <ProductDetailCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export default Shop;