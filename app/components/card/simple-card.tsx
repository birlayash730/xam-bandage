// const SimpleCard = () => {
//     return (<>

//     </>);
// }

// export default SimpleCard;
import { Category, Product } from '@/app/types';
import { capitalizeFirstLetter, stringToColor } from '@/app/utils';
import Link from 'next/link';
import { CardBody, CardImg, CardImgOverlay } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SimpleCard({ product }: { product: Product }) {
  return (
    <Card className={`rounded-0 border-0`} style={{ height: 'inherit' }}>
      <CardImg className='rounded-0 border-0 product-image  m-2' variant="bottom" src={product?.image} alt={product.title} />
      <Link href="/category/[category]" as={`/category/${product?.category?.split(" ").join("-")}`}><Button variant="light" style={{ position: 'absolute', left: '15%', bottom: '10%', width: '200px', background: stringToColor(product.category) }} className='w-40 rounded-0 border-0 ellipsis text-light'>{capitalizeFirstLetter(product?.category)}</Button></Link>
    </Card>
  );
}

export default SimpleCard;