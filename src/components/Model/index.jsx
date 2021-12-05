import './model.css';
import {data} from '../../data/stays';
import { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../Context/storeContext';
import "react-tippy/dist/tippy.css";
import {Tooltip} from 'react-tippy';
import {Switch} from '../Switch';
import {motion} from 'framer-motion';

export const Model = ({setOpen}) => {


	const { dispatch, dataItem } = useContext(StoreContext);
	const stay = dataItem[0].city;
	

	const dataLocation = data.map((item) => item.city);
	const locationOption = [...new Set(dataLocation)]

	const [location, setLocation] = useState(stay);
	const [guest, setGuest] = useState(0);

	// const [value, setValue] = useState(0);
	// 
	 
	const [childValue, setChildValue] = useState(0);
	const [adultValue, setAdultValue] = useState(0);

	useEffect(()=>{
		if(guest < 10) {
		setGuest(childValue+adultValue);

		} else {
			if(childValue+adultValue > guest) {
				return "limit";
			}
		}
		
	}, [childValue, adultValue, location, guest]);


	const [tab, setTab] = useState("");

	const handleSearch = (items) => {
		setLocation(items);

		// handleSearchLoaction(guest);
		dispatch({ type: "SEARCH", payload: items });
		
	}

	const handleSearchGuest = (guest) => {
		setGuest(guest);

		// handleSearchLoaction(guest);
		dispatch({ type: "SEARCH_BY_GUEST", payload: guest });
		
	}


	const handleSearchLoaction = (guest) => {
		
		
		// dispatch({ type: "SEARCH_BY_GUEST", payload: guest });
		setOpen(false);
	}

	const Location = () => {
		return (
			<>
			 {/* onClick={() => handleSearch(item)} */}
				<nav className="selectLocation">
					{locationOption.map((item, index) => {
						return <div key={index}><motion.li whileHover={{x: 30}} className="options" onClick={() => handleSearch(item)}><i className="fas fa-map-marker-alt"></i>{item}, Finland</motion.li></div>;
					})}
				</nav>
			</>
		);
	}

	const Guest = () => {
		return (
			<>
			<nav className="selectSwitch" onClick={() => handleSearchGuest(guest)}>
				<Switch title="Adults" subtitle="Age 13 or above" value={adultValue} setValue={setAdultValue}/>
				<Switch title="Children" subtitle="Age 2-12" value={childValue} setValue={setChildValue}/>
			</nav>
			</>
		);
	}


	
	

	return(
		<div className="model">
			<nav className="nav-model">
			
				<li className={tab === "location" ? "nav-list-model nav-active" : "nav-list-model"} onClick={() => setTab("location")}>
					<Tooltip title="Search by location">
					<div className="location-text">
						<div className="location-heading">Location</div>
						<div>
						{location}, Finland
						</div>
					</div>
					</Tooltip>
				</li>
				
				<li className={tab === "guest" ? "nav-list-model nav-active" : "nav-list-model"} onClick={() => setTab("guest")}>
					<Tooltip title="Search by number of guests">
					<div className="location-text">
						<div className="location-heading">Guest</div>
						<div className="gguest">
						{guest} guests
						</div>
					</div>
					</Tooltip>
				</li>
				<li className="nav-list-model">
					<motion.button whileHover={{scale: 1.2}} className="btn" onClick={() => handleSearchLoaction(guest)}><motion.i whileHover={{scale: 1.5}} className="fas fa-search"></motion.i><span>Search</span></motion.button>
				</li>
			</nav>
			{tab === "location" ? <Location /> : ''}
			{tab === "guest" ? <Guest /> : ''}
		</div>
	);
}