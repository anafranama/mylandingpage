import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card">
			<img src={props.link} className="card-img-top" alt="..."></img>
			<div className="card-body ">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<div style={{ textAlign: "center" }}>
					<a href="#" className="btn btn-primary anchorImagenes ">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string
};
