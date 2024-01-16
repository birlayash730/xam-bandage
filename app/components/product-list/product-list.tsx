"use client"

import { useGetCategoriesQuery, useGetProductsQuery } from "@/app/api";
import CarouselSection from "../carousel";
import CategoryListSlide from "./Category-list-slide";
import Shop from "./shop";
import { Spinner } from "react-bootstrap";

function chunkArray<T>(array: T[], chunkSize = 5) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const ProductList = () => {
  const { data: products, isLoading: productsLoading, isError: productsError, error: productsErrorData, refetch: refetchProducts } = useGetProductsQuery({});
  const { data: categories, isLoading: categoriesLoading, isError: categoriesError, error: categoriesErrorData, refetch: refetchCategories } = useGetCategoriesQuery();

  if (productsLoading || categoriesLoading) {
    return <div className="d-flex justify-content-center"><Spinner variant="primary" animation="border" /></div>;
  }
  console.log(products, categories);
  if (productsError || categoriesError) {
    return <div>{`Error: ` + (productsErrorData || categoriesErrorData)}</div>;
  }

  const handleRefresh = () => {
    refetchProducts();
    refetchCategories();
  };
  return (
    <>
      <CarouselSection className="shop-collection mt-4">
        <CategoryListSlide categories={categories || []} />
      </CarouselSection>
      <Shop products={products || []} />
    </>
  );
}

export default ProductList;