function Cards({firstName, lastName, imageURL}){

    return <div className="card" >
        <img alt="#" src={imageURL} ></img>
        <p>{firstName} {lastName}</p>
    </div>
}

export default Cards;