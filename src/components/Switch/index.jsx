import React from 'react';
import './switch.css';

export const Switch = ({title, subtitle, value, setValue}) => {

	return (
		<div className="switch">
			<h1 className="titles">{title}</h1>
			<h1 className="titles-sub">{subtitle}</h1>
			<div className="btn-switch">
				<button className="btn-switch-min" onClick={() => setValue(value-1)}>-</button>
				{value < 0 || value>10 ? setValue(0) : value}
				<button className="btn-switch-add" onClick={() => setValue(value+1)}>+</button>
			</div>
		</div>
	);
}