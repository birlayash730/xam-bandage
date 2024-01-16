import { Image } from "react-bootstrap";

const OrderDetail = () => {
    return (
        <tr>
            <td className='p-4'><Image style={{ width: '10rem' }} src={"/product-image.jpg"} alt={"Product 1"} /></td>
            <td className='p-4'>Product 1</td>
            <td className='p-4'>1</td>
            <td className='p-4'>$10.00</td>
        </tr>
    );
}

export default OrderDetail;