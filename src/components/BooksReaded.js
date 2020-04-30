import React from 'react';
import Book from './Book';

const BooksReaded = (props) => (
	<div className="containersBooks__books">
			<h2 className="containersBooks__title">Readed Books</h2>
			<div className=" containersBooks__books__container">
			{props.booksReaded.map((b) => 
				<Book
					key={b.title}
					book={b}
					removeBook={props.removeBook}
					showDetails={props.showDetails}
			 	/>
			)}
			</div>
	</div>
);

export default BooksReaded;