import { useAddProductToCartMutation, useGetUserCartQuery } from "@/app/api";
import { Product } from "@/app/types";
import { useLocalStorage } from "@/app/useLocalStorage";
import { parseJwt } from "@/app/utils";
import Link from "next/link";
import { Button, Row } from "react-bootstrap";
import { Card, CardImg } from "react-bootstrap";

const ProductDetailCard = ({ product }: { product: Product }) => {
  const [addProductToCart, { isLoading, isError, isSuccess }] = useAddProductToCartMutation();
  const [token, setToken] = useLocalStorage('token', '');
  const { data: carts, isLoading: isCartLoading, isError: isCartError, error, refetch } = useGetUserCartQuery({ userId: parseJwt(token).sub });
  if (!product || !carts) {
    return null;
  }

  if (isError) {
    console.log("Show Red Toaster: Adding to cart failed!");
  }

  if (isSuccess) {
    console.log("Show Green Toaster: Added to cart successfully!");
  }

  const addToCart = async (product: Product) => {
    try {
      await addProductToCart({ productId: product.id, quantity: 1, cartId: carts[0].id, userId: parseJwt(token).sub }).unwrap();
    } catch (err) {
      console.log("Show Red Toaster: Adding to cart failed!");
    }
  }

  return (<>
    <Card className="mx-auto rounded-2 mb-2 info-card" >
      <Row className="d-flex flex-row justify-content-end">
        {isSuccess ? <div className="d-flex justify-content-end px-4 py-2"><i className="bi bi-bag-check-fill text-success"></i></div> : <Button onClick={() => addToCart(product)} className="me-3" variant="white" style={{ width: 50 }}>
          <i className="bi bi-cart-plus-fill p-2"></i>
        </Button>}
      </Row>
      <CardImg width="150px" height="150px" variant="top" className="rounded-0 border-0 info-card-img mt-2 p-3" src={product.image} alt={product.title} />
      <div className="card-body">
        <strong><Link href={`/product-page/[id]`} as={`/product-page/${product.id}`} className="ellipsis" title={product.title}>{product.title}</Link></strong>
        <small><p title={product.description} className="text-secondary ellipsis">{product.description}</p></small>
        <small className="text-success"><p className="mb-0" title={product.price.toString()}>${product.price}</p></small>
      </div>
    </Card >
  </>);
}

export default ProductDetailCard;