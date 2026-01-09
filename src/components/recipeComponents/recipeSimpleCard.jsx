const recipeSimpleCard = ({ title, categories}) => {
    return (
        <div className="card-recipe-simple">
            <h3>
                {title}
            </h3>
            <div>
                {categories.map((item) => {
                    return(<button 
                        className="category-pill">{item}</button>)
                })}
            </div>
         </div>
    )

}

export default recipeSimpleCard;