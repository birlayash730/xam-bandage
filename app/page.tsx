"use client"

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import CarouselSection from './components/carousel';
import LatestTrends from './components/latest-trends';
import Hero from './components/hero';
import BestSellerProduct from './components/bestseller-product';
import { useGetProductsQuery } from './api';


export default function Home() {
  const carouselData = [
    {
      season: "SUMMER 2020",
      imgUrl: "./carousel-inner.jpg",
      discount: "30%",
      title: "Season's Discount offers",
      description: "Summer season biggest summer sale is here."
    },
    {
      season: "SUMMER 2020",
      imgUrl: "./shop-hero-slide.jpg",
      discount: "30%",
      title: "New Collection",
      description: "Season's new collection is here."
    }
  ]
  const { data: products, isLoading: productsLoading, isError: productsError, error: productsErrorData, refetch: refetchProducts } = useGetProductsQuery({});
  return (
    <>
      <CarouselSection className=''>
        <Hero key={0} />
      </CarouselSection>
      <LatestTrends products={products || []} />
      <BestSellerProduct products={products || []} />
    </>
  )
}
