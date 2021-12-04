import './cardList.css';
import Card from '../Card';
import {useContext} from 'react';
import { StoreContext } from '../../Context/storeContext';

const CardList = () => {

	const { dataItem } = useContext(StoreContext);
// .filter((item) => item.city === "Helsinki")


	return(
		<div className="cardList">
			{dataItem.map((item) => {
				return <div key={item.id}><Card item={item} /></div>;
			})}
		</div>
	);
}

export default CardList;