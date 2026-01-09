import recipes from '../../data/recipe.jsx';
import RecipeCard from '../../components/pantryComponents/ItemCard.jsx';
export default function Cookbook() {
    return(
        <div>
            <h1>Cookbook</h1>
            <div className="pantry-container">
                {pantryItems.map((item)=> {
                    return (<RecipeCard 
                        id={item.id} 
                        title={item.title}
                        categories={item.categories}
                        />)
                })}
            </div>
        </div>
    )
}