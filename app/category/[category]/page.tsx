'use client'

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from 'next/navigation';
import CategoryProductList from '@/app/components/product-list/category-product-list';

export default function Page() {
  const params = useParams();
  const { category } = params;
  return (
    <>
      <CategoryProductList category={(category as string)?.split("-").join(" ") || ''} />
    </>
  )
}
