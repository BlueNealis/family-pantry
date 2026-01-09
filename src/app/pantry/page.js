import pantryItems from '../../data/pantry.jsx';
import ItemCard from '../../components/pantryComponents/ItemCard.jsx';
export default function Pantry() {
    return(
        <div>
            <h1>Pantry</h1>
            {pantryItems.map((item)=> {
                <ItemCard 
                    id={item.id} 
                    name={item.name}
                    buyDate={item.buyDate}
                    quantity={item.quantity}
                    />
            })}
        </div>
    )
}