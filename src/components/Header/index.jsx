import "./header.css";
import { motion } from "framer-motion";
import { Model } from '../Model';
import {useState, useContext} from 'react';
import { StoreContext } from '../../Context/storeContext';


const Header = () => {
	let array = [];
	const { dataItem } = useContext(StoreContext);

	
		let size = dataItem.length;
		
		for(let i=0; i<size; i++) {
			array.push(dataItem[i].maxGuests);
		}
		

		const guest = Math.max(...array);
	
	const s = guest < size ? 0 : 0;
	const stay = dataItem[s].city;

	console.log(guest);

	

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	
	
	return (
		<>
			
			
				
				<motion.div className="header">
				<motion.div className="logo">
					<a href="/"><img src="logo.png" alt="logo" /></a>
				</motion.div>
				
				<motion.nav className="nav" onClick={handleClick}>
					<motion.li 
						className="nav-list"> 
						{!stay ? "Location" : `${stay}, Finland` }
					</motion.li>
					<motion.li 
						className="nav-list">{ !guest ?  "Add guest" :  `${guest}, guest`}</motion.li>
					<motion.li 
						className="nav-list" 
						
					>
						<i className="fas fa-search"></i>
					</motion.li>
				</motion.nav>
				
				</motion.div>
			
			
			{open && <Model setOpen={setOpen}/>}
		</>
	);
};

export default Header;
