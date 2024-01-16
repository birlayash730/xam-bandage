import { Category } from "@/app/types";
import ShopCard from "../card/shop-card";
import { Carousel, CarouselItem } from "react-bootstrap";

const CategoryListSlide = ({ categories }: { categories: Category[] }) => {
  return (
    <Carousel interval={null} data-bs-theme="light">
      <CarouselItem>
        <div className="shop-card d-flex justify-content-between  gap-2 flex-wrap container">
          {
            categories.map((category) => (
              <ShopCard category={category} key={category} />
            ))
          }
        </div>
      </CarouselItem>
    </Carousel>
  );
}

export default CategoryListSlide;