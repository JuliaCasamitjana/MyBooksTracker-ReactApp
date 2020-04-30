import React from 'react';

const Book = (props) => (
	<div className="bookBox" >
		<button className="removeButton" onClick={(bookRemove) => {
			props.removeBook(props.book)}
		}
		>
		x
		</button>
		<div className="bookBox__text">
			<p className="bookBox__text__title">{props.book.title}</p>
			<p className="bookBox__text__author">{props.book.author}</p>
			<button className="detailsButton" onClick={(details) => {
				props.showDetails(props.book)}
				}>
			Details
			</button>
		</div>
	</div>
);

const withSwitch=(WrappedComponent)=>{
return (props)=>(
	<div className="bookBox-wrapper">
		<WrappedComponent {...props} />
		<button className="button" onClick={(bookToSwitch) => {
				props.switchToReaded(props.book)}
			}
			>
			Readed!
		</button>
	</div>
	);
}

const BookWithSwitch = withSwitch(Book);

export {BookWithSwitch, Book as default};