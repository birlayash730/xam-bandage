"use server"

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import ProductList from '../components/product-list/product-list';

export default async function Page() {
  return (
    <>
      <ProductList />
    </>
  )
}
