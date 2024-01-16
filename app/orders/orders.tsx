"use client"

import { useCallback, useState } from "react";
import { Card, CardBody, CardTitle, Container, Spinner } from "react-bootstrap";
import { useGetUserCartQuery } from "../api";
import ShoppingCartProduct from "../shopping-cart/shopping-cart-product";
import { Product } from "../types";
import { parseJwt } from "../utils";

const Orders = () => {
  let token = '';
  if (typeof 'process' === 'undefined') {
    token = localStorage.getItem('token') || '';
  }
  const { data: carts, isLoading, isError, error, refetch } = useGetUserCartQuery({ userId: parseJwt(token).sub });
  const [subtotal, setSubtotal] = useState<{ [key: number]: number }>({});
  console.log(carts);
  function getFormattedDate(date: Date): string {
    const dateStr =
      date.getDate() < 10 ? '0' + `${date.getDate()}` : date.getDate();
    const monthStr =
      date.getMonth() + 1 < 10
        ? '0' + `${date.getMonth() + 1}`
        : date.getMonth() + 1;
    return `${dateStr}/${monthStr}/${date.getFullYear()}`;
  }

  const seenIds: { [key: number]: number[] } = {};
  const addToSubtotal = useCallback((product: Product, quantity: number, cartId?: number) => {
    if (cartId && (!seenIds[cartId] || !seenIds[cartId].includes(product.id))) {
      if (seenIds[cartId]) {
        seenIds[cartId].push(product.id);
      } else {
        seenIds[cartId] = [product.id];
      }
      setSubtotal((prevSubtotal) => ({ ...prevSubtotal, [cartId]: (prevSubtotal[cartId] || 0) + (quantity * product.price) }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading && !carts) {
    return <div className="d-flex justify-content-center">
      <Spinner variant="primary" animation="border" />
    </div>
  }

  return (
    <Container>
      <h3 className='my-4'>Previous Orders</h3>
      <div className='d-flex flex-row m-4'>
        <section className='d-flex flex-column me-3'>
          {carts?.map((cart) => (
            <Card key={cart.id} className="mb-3">
              <CardTitle className="pt-4 ps-4 text-grey">Order Date: {getFormattedDate(new Date(cart.date))}</CardTitle>
              <CardTitle className="pt-4 ps-4 text-grey">Order Id: {cart.id}</CardTitle>
              <CardTitle className="pt-4 ps-4 text-grey">Total Amount: ${(subtotal[cart.id] + (subtotal[cart.id] * 0.08)).toFixed(2)}</CardTitle>
              <CardBody>
                {
                  cart.products.map((product) => (
                    <ShoppingCartProduct cartId={cart.id} addToSubtotal={addToSubtotal} productDetails={product} key={cart.id} />
                  ))
                }
              </CardBody>
            </Card>
          ))}
        </section>
      </div>
    </Container>
  );
}

export default Orders;