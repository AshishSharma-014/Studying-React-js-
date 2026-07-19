import './ProductTab.css';
import Product from './Product';
function ProductTab() {
let options = ["hi-tech", "durable", "fast"];
    return (
        <>
        <Product title = "Phone" features = {options} price={2000}/>
        <Product title = "Laptop" features={options} price={4000}/>
        <Product title = "Earphone" features={options} price={5000}/>
        </>
    )
}
export default ProductTab;