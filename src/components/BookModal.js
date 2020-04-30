import React from 'react';
import Book from './Book';
import Modal from 'react-modal';


const BookModal = (props) => (
	<Modal
	isOpen = { props.showDetails }
	onRequestClose={props.detailsBookClear}
	contentLabel = "Book Details"
	closeTimeoutMS={200}
	className ="bookModal"
	>

	{(props.bookInDetail ==! {}) && <h3>Details</h3>}
	<h4>{props.bookInDetail.title}</h4>
	<p>{props.bookInDetail.author}</p>
	<p>{props.bookInDetail.description}</p>
	{(props.bookInDetail.description === '') && <p>You didn't provide any description </p>}

	</Modal>
)

export default BookModal;
