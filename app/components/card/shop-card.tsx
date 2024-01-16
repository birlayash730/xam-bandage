import { Category } from "@/app/types";
import { capitalizeFirstLetter, stringToColor } from "@/app/utils";
import Link from "next/link";
import { Card, CardBody } from "react-bootstrap";

const ShopCard = ({ category }: { category?: Category }) => {
  return (
    <Link href="/category/[category]" as={`/category/${category?.split(" ").join("-")}`}>
      <Card className="rounded-0 border-0 col-2">
        <CardBody style={{ background: stringToColor(category || ''), color: '#FFFFFF', height: '250px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="rounded-0 border-0">
          <h4>{capitalizeFirstLetter(category || '')}</h4>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ShopCard;