import "./card.css";
import "../../data/stays";

const Card = ({item}) => {
	return (
		<div className="card">
			<img src={item.photo} alt={item.title} />
			<div className="title-header">
				<div className="main-title">
				{item.superHost === true ? (
					<>
					<div className="title">Super Host</div>
					<div className="subtitle">{item.type}. {item.beds} beds</div>
					</>
					) : (
					<div className="subtitle">{item.type}</div>
					)}
					
				</div>
				<div className="rating"><i className="fas fa-star"></i>{item.rating}</div>
			</div>	
			<h1 className="title-body">{item.title}</h1>
		</div>
	);
};

// {item.title.length > 35 ? item.title.slice(0, 35).concat('...') : item.title }

export default Card;