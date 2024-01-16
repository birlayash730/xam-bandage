"use client"

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Container, Image, Spinner } from 'react-bootstrap';
import { useAddProductToCartMutation, useGetProductQuery, useGetUserCartQuery } from '../../api';
import { useParams, useRouter } from 'next/navigation';
import { parseJwt } from '@/app/utils';
import { Product } from '@/app/types';
import { useLocalStorage } from '@/app/useLocalStorage';
import Link from 'next/link';

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { data: product, isLoading, isError, error, refetch } = useGetProductQuery(Number(id));
  const [addProductToCart, { isLoading: isAddLoading, isError: isAddError, isSuccess: isAddSuccess }] = useAddProductToCartMutation();
  const [token, setToken] = useLocalStorage('token', '');
  const { data: carts, isLoading: isCartLoading, isError: isCartError, error: cartsError, refetch: cartRefetch } = useGetUserCartQuery({ userId: parseJwt(token).sub });
  if (!product || !carts) {
    return null;
  }

  if (isAddError) {
    console.log("Show Red Toaster: Adding to cart failed!");
  }

  if (isAddSuccess) {
    console.log("Show Green Toaster: Added to cart successfully!");
  }

  const addToCart = async (product: Product) => {
    try {
      await addProductToCart({ productId: product.id, quantity: 1, cartId: carts[0].id, userId: parseJwt(token).sub }).unwrap();
      router.push("/shopping-cart");
    } catch (err) {
      console.log("Show Red Toaster: Adding to cart failed!");
    }
  }
  if (isLoading && !product) {
    return <div className="d-flex justify-content-center">
      <Spinner variant="primary" animation="border" />
    </div>;
  }
  console.log(product, isLoading);
  return (
    <Container>
      <div className="product d-flex flex-row my-2" >
        <section className="product-images col-6 d-flex justify-content-center" >
          <Image className="product-image" width="inherit" height="inherit" src={product?.image} alt={product?.title} />
        </section>
        <section className="product-details  p-4">
          <h3>{product?.title}</h3>
          <h3><strong>${product?.price}</strong></h3>
          <small className='text-secondary'>Availability : <span className='text-success'>In Stock</span></small>
          <p className='text-secondary'>{product?.description}</p>
          <div className='d-flex flex-row'>
            <Link href='/checkout-page/[cartId]' as={`/checkout-page/${carts[0].id}`} >
              <Button variant='primary'>Buy Now</Button>
            </Link>
            <Button onClick={() => addToCart(product)} className='mx-4'>
              <i className="bi bi-cart"></i> Add to Cart
            </Button>
          </div>
        </section>
      </div>
    </Container>
  )
}
