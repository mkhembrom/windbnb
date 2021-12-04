import { createContext, useReducer } from 'react';
import { data } from '../data/stays';

export const StoreContext = createContext();

const initialState = { dataItem: data };

const storeReducer = (state, action) => {
	switch(action.type) {
		case "SEARCH":
			const items = data.filter((item) => item.city === action.payload);

			return {
				dataItem: items
			};
		case "SEARCH_BY_GUEST":
			const guest = data.filter((item) => item.maxGuests >= action.payload);
			return {
				dataItem: guest
			};
		default: 
			return state;
	}
}


export const StoreProvider = ({children}) => {
	
	const [state, dispatch] = useReducer(storeReducer, initialState);

	const value = { 
		dataItem: state.dataItem,
		dispatch
	};

	return(
		<StoreContext.Provider value={value}>
			{children}
		</StoreContext.Provider>
	);
}
