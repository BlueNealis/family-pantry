import pantry from 'pantry.json'
import ItemCard from '../components/pantryComponents';
const pantry = () => {
    return(
        <div>
            {pantry.map((item)=> {
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