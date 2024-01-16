import { Category, Product } from "@/app/types";
import Shop from "./shop";
import { useGetProductsByCategoryQuery } from "@/app/api";

const CategoryProductList = ({ category }: { category: Category }) => {
  const { data: categoryProducts, isLoading: categoriesLoading, isError: categoriesError, error: categoriesErrorData, refetch: refetchCategoryProducts } = useGetProductsByCategoryQuery({ category });
  const handleRefresh = () => {
    refetchCategoryProducts();
  };
  return (
    <Shop products={categoryProducts || []} />
  );
}

export default CategoryProductList;