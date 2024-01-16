import { Button, Carousel, CarouselCaption, CarouselItem, Image } from "react-bootstrap";

const Hero = () => {
  const carouselData = [
    {
      id: 1,
      season: "SUMMER 2020",
      imgUrl: "./carousel-inner.jpg",
      discount: "30% Discount prices",
      title: "Season's Discount offers",
      description: "Summer season biggest summer sale is here."
    },
    {
      id: 2,
      season: "SUMMER 2020",
      imgUrl: "./shop-hero-slide.jpg",
      title: "New Collection",
      description: "Season's new collection is here."
    }
  ]
  return (
    <Carousel interval={null} data-bs-theme="light">
      {
        carouselData.map((data) => (
          <CarouselItem key={data.id}>
            <Image src={data.imgUrl} className='d-block w-100 img' alt='New Collection' />
            <CarouselCaption style={{ position: 'absolute', top: '35%', left: '0' }}>
              <p><small>{data.season}</small></p>
              <h1 className="fw-bolder">{data.title}</h1>
              <h3>{data.description}</h3>
              {
                data.discount ? <h1>{data.discount}</h1> : <></>
              }
              <Button variant="primary" href="/product-list-page">Shop Now</Button>
            </CarouselCaption>
          </CarouselItem >
        ))
      }
    </Carousel >
  );
}

export default Hero;