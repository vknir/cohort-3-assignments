function Item(props){

    return <div className="item">
        <div className="item__display-img"></div>
        <div className="item__details">
            <p>{props.title}</p>
            <span>{props.status ? 'In stock': 'Out of stock'}</span>
            <div className="item__button-wrapper">
                <button onClick={ props.increaseQuant} >+</button>
                <span>{props.quantity}</span>
                <button onClick={ props.decreaseQuant}>-</button>
                <span onClick={props.removeItem}>Delete</span>
            </div>
        </div>
    </div>
}

export default Item;