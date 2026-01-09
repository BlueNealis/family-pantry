const itemCard = ({name, quantity, buyDate, id}) => {
    return(
        <div 
        key={id}
        id={id}>
            <h2>{name}</h2>
            <p>{quantity}</p>
            <p>{buyDate}</p>
        </div>
    )
}

export default itemCard;