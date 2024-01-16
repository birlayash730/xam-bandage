'use client'

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import ShoppingCartProduct from './shopping-cart-product';
import { useGetUserCartQuery } from '../api';
import { parseJwt } from '../utils';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { Product } from '../types';

export default function Page() {
  const token = typeof 'process' === 'undefined' ? localStorage.getItem('token') || '' : '';
  const { data: carts, isLoading, isError, error, refetch } = useGetUserCartQuery({ userId: parseJwt(token).sub });
  const currentCart = carts?.[0];
  const [subtotal, setSubtotal] = useState(0);
  const seenIds: number[] = [];
  const addToSubtotal = useCallback((product: Product, quantity: number) => {
    if (!seenIds.includes(product.id)) {
      seenIds.push(product.id);
      setSubtotal((prevSubtotal) => prevSubtotal + (product.price * quantity));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div className="d-flex justify-content-center"><Spinner variant="primary" animation="border" /></div>;
  }

  if (isError) {
    console.log(error);
    return <div>{`Error: ` + (error as any)?.data?.message}</div>;
  }

  if (!currentCart) {
    return <div>No items added to the cart.</div>
  }
  const { products: productList } = currentCart;
  const totalItems = productList.reduce((acc, item) => acc + item.quantity, 0);
  const handleRefresh = () => {
    refetch();
  };

  return (
    <Container className='d-flex flex-column justify-content-center'>
      <h3 className='my-4'>Shopping Cart</h3>
      <div className='d-flex flex-row m-4'>
        <section className='d-flex flex-column me-3'>
          {productList.map((productDetails) => (
            <ShoppingCartProduct addToSubtotal={addToSubtotal} productDetails={productDetails} key={productDetails.productId} />
          ))}
        </section>
        <Card className='d-flex flex-column p-4'>
          <p>Sub Total ({totalItems}) : <strong>${subtotal}</strong></p>
          <Link href="/checkout-page/[cartId]" as={`/checkout-page/${currentCart.id}`}>
            <Button variant="primary">Proceed to buy</Button>
          </Link>
        </Card>
      </div>
    </Container>
  )
}
