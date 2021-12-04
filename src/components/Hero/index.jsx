import './hero.css';
import {useContext} from 'react';
import { StoreContext } from '../../Context/storeContext';

const Hero = () => {

	const { dataItem } = useContext(StoreContext);

	const stay = dataItem[0].city;

	return(
		<div className="hero">
			<div className="hero-header">Stays in {!stay ? "0" : stay }, Finland</div>
			<div className="stays">{dataItem.length < 0 ? "0" : dataItem.length}+ stays</div>
		</div>
	);
}

export default Hero;