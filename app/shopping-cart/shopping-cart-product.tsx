"use client"

import { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useGetProductQuery } from "../api";
import { Product } from "../types";


const ShoppingCartProduct = ({ productDetails, addToSubtotal, descriptionWidth, cartId }: { productDetails: { productId: number, quantity: number }, addToSubtotal?: (product: Product, quantity: number, cartId?: number) => void, descriptionWidth?: string, cartId?: number }) => {
  const { data: product, isLoading, isError, error } = useGetProductQuery(productDetails.productId);
  useEffect(() => {
    if (product && addToSubtotal) {
      console.log(product, productDetails.quantity);
      addToSubtotal(product, productDetails.quantity, cartId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
  return (
    <div className="container d-flex flex-row mb-2">
      <Image className='me-3' src={product?.image} alt={product?.title} width={100} height={150} />
      <div className="product-details p-2" style={{ width: descriptionWidth || '800px' }} >
        <h5>{product?.title}</h5>
        <p className='text-secondary ellipsis'>{product?.description}</p>
        <h5><strong>${product?.price}</strong></h5>
        <small className='text-secondary'>Quantity : <span className='text-success'>{productDetails.quantity}</span></small>
      </div>
    </div>
  );
}

export default ShoppingCartProduct;