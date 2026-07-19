import './AmazonCards.css';
import Card from './Card';

function AmazonCards() {
    return (
        <div>
            <h1>Blockbuster Deals on Computer Accessories | Shop Now</h1>
            <div className='CardDiv'>
                <Card title={"Logitech MX Master"} desc={"8000 DPI"} func={"5 programmable buttons"} price={"12,495"} />
                <Card title={"Apple Pencil (2nd gen)"} desc={"Intutive touch surface"} func={"Designed for Ipad Pro"} price={"11,900"} />
                <Card title={"Zebronics"} desc={"8000 DPI"} func={"5 programmable buttons"} price={"1,599"} />
                <Card title={"Petronics Toad"} desc={"Wireless Mouse 2.4 GHz"} func={"Optical Orientation"} price={"599"} />
            </div>
        </div>
    )
}
export default AmazonCards;