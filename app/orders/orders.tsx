"use client"

import { useCallback, useState } from "react";
import { Button, ButtonToolbar, Card, CardBody, CardTitle, Container, OverlayTrigger, Spinner, Tooltip } from "react-bootstrap";
import { useGetUserCartQuery } from "../api";
import ShoppingCartProduct from "../shopping-cart/shopping-cart-product";
import { Product } from "../types";
import { parseJwt } from "../utils";
import { useLocalStorage } from "../useLocalStorage";

const Orders = () => {
  const [token, setToken] = useLocalStorage('token', '');
  console.log(parseJwt(token));
  const { data: carts, isLoading, isError, error, refetch } = useGetUserCartQuery({ userId: parseJwt(token).sub });
  const [subtotal, setSubtotal] = useState<{ [key: number]: number }>({});
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
          {carts?.map((cart, index) => (
            <Card key={index + cart.id} className="mb-3">
              <CardTitle key="ert" className="pt-4 ps-4 text-grey">Order Date: {getFormattedDate(new Date(cart.date))}</CardTitle>
              <CardTitle key="asd" className="pt-4 ps-4 text-grey">Order Id: {cart.id}</CardTitle>
              <CardTitle key="ghg" className="pt-4 ps-4 text-grey d-flex ">
                <p className="me-2">Total Amount: ${(subtotal[cart.id] + (subtotal[cart.id] * 0.08))?.toFixed(2)}</p>
                <ButtonToolbar>
                  <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip">
                    <pre>
                      <strong>Subtotal: ${(subtotal[cart.id])?.toFixed(2)}</strong>
                    </pre>
                    <pre>
                      <strong>VAT(8%): ${(subtotal[cart.id] * 0.08)?.toFixed(2)}</strong>
                    </pre>
                    <pre>
                      <strong>Total Amount: ${(subtotal[cart.id] + (subtotal[cart.id] * 0.08))?.toFixed(2)}</strong>
                    </pre>
                  </Tooltip>}>
                    <i className="bi bi-info-circle-fill"></i>
                  </OverlayTrigger>
                </ButtonToolbar>
              </CardTitle>
              <CardBody>
                {
                  cart.products.map((product) => (
                    <ShoppingCartProduct cartId={cart.id} addToSubtotal={addToSubtotal} productDetails={product} key={`${product.productId}${product.quantity}${cart.id}`} />
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