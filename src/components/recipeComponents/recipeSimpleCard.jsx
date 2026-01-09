const RecipeSimpleCard = ({ title, categories, id}) => {
    return (
        <div 
            id={id} 
            className="card-recipe-simple">
            <h3>
                {title}
            </h3>
            <div>
                {categories.map((item) => {
                    return(<button 
                        className="category-pill"
                        key={`${id}-${item}` }>{item}</button>)
                })}
            </div>
         </div>
    )

}

export default RecipeSimpleCard;