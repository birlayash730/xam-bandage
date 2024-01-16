import { Category, Product } from "@/app/types";
import { pickRandomItems, stringToColor } from "@/app/utils";
import SimpleCard from "./card/simple-card";
import { Spinner } from "react-bootstrap";

const LatestTrends = ({ products }: { products: Product[] }) => {
  if (!products.length) {
    return <div className="d-flex justify-content-center"><Spinner variant="primary" animation="border" /></div>
  }
  const [firstProduct, ...rest] = pickRandomItems([...products], 7);
  return (
    <div className="mb-4 container">
      <div className="editors-pic-title w-50 d-flex flex-column justify-content-center align-items-center mx-auto  p-4 mt-5">
        <h2 className="">Latest Trends</h2>
        <small><p className="mb-1 text-align-center" style={{ minWidth: '300px' }}>Products handpicked for latest trends</p></small>
      </div>
      <div className="d-flex">
        <div className="container-md d-flex flex-row" style={{ width: '500px', height: '700px' }}>
          <SimpleCard product={firstProduct} />
        </div>
        <div className="d-flex flex-row flex-wrap">{
          rest.map((product) => <div style={{ width: '250px', height: '350px' }} key={product.id}><SimpleCard product={product} /></div>)
        }</div>
      </div>
    </div>
  );
}

export default LatestTrends;
