import { pantryItems } from '../../data/pantry.json'
import ItemCard from '../../components/pantryComponents/ItemCard.jsx';
export default function Pantry() {
    return(
        <div>
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