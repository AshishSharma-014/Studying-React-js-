import './Product.css';

function Product ({title, features, price}) {
    let isDiscount = price > 4000;
    let styles = {backgroundColor : isDiscount ? "blue" : ""};
    return (
        <div className='Product' style = {styles}>
        <h1>{title}</h1>
        <h2>{price}</h2>
        <p>This is description</p>
        <p>{features.map((feature) => <li>{feature}</li>)}</p>
        {isDiscount ? <p>Discount of 5%</p> : null}
        </div>
    )
}
export default Product;