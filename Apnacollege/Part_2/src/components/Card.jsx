import './Card.css';

function Card({title, desc, func, price}) {
    let oldPrice = ["12,499", "4,599", "500", "499"];
    let newPrice = ["9,999", "3,000", "250", "249"];
    return (
        <div className='Card'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>{func}</p>
            <h4>{price}</h4>

        </div>
    )
}
export default Card;