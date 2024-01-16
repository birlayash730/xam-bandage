"use client"

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Col, Container, Row } from 'react-bootstrap';
import DeliveryAddress from '../delivery-address';
import BillingDetails from '../billing-details';
import { useParams } from 'next/navigation';
import { useGetCartQuery, useGetUserQuery } from '@/app/api';
import ShoppingCartProduct from '@/app/shopping-cart/shopping-cart-product';
import { useCallback, useState } from 'react';
import { Product } from '@/app/types';
import { parseJwt } from '@/app/utils';
import { useLocalStorage } from '@/app/useLocalStorage';

export default function Page() {
  const [token, setToken] = useLocalStorage('token', '');
  const { data: user, isLoading: isUserLoading, isError: isUserError, error: userError } = useGetUserQuery(parseJwt(token).sub);
  const { cartId } = useParams();
  const [subtotal, setSubtotal] = useState(0);
  const { data: cart, isLoading, isError, error } = useGetCartQuery(cartId as string);
  const seenIds: number[] = [];
  const addToSubtotal = useCallback((product: Product, quantity: number) => {
    if (!seenIds.includes(product.id)) {
      seenIds.push(product.id);
      setSubtotal((prevSubtotal) => prevSubtotal + (product.price * quantity));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!cart || !user) {
    return null;
  }

  return (
    <Container className='d-flex justify-content-center flex-column'>
      <DeliveryAddress user={user} />
      <Row>
        <Col md={8}>
          {
            cart.products.map((product) => (
              <ShoppingCartProduct addToSubtotal={addToSubtotal} descriptionWidth='400px' productDetails={product} key={cart.id} />
            ))
          }
        </Col>
        <Col md={4}>
          <BillingDetails subtotal={subtotal} />
        </Col>
      </Row>
    </Container>
  )
}
