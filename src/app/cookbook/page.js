import recipes from '../../data/recipes.jsx';
import RecipeSimpleCard from '../../components/recipeComponents/RecipeSimpleCard.jsx';
export default function Cookbook() {
    return(
        <div>
            <h1>Cookbook</h1>
            <div className="recipe-container">
                {recipes.map((item)=> {
                    return (<RecipeSimpleCard 
                        key={item.id}
                        id={item.id} 
                        title={item.title}
                        categories={item.categories}
                        />)
                })}
            </div>
        </div>
    )
}