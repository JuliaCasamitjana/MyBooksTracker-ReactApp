import React from 'react';
import {BookWithSwitch} from './Book';

export default class BooksToRead extends React.Component{
	state ={
		error:''
	}
	
	handleAddBook = (e) =>{
		e.preventDefault();
		const title = e.target.elements.title.value.trim(); //Agafa el que hi ha al input amb name title i trim elimina espais en blanc
		const author = e.target.elements.author.value.trim(); 
		const description = e.target.elements.description.value.trim(); 

		if(!title || !author){
			this.setState(()=> ({error: 'Fill Title and Author!' }));
		}else if
		(this.props.booksToRead.some((b)=> 
				title === b.title) || 
		this.props.booksReaded.some((b)=> 
				title === b.title)
		)
		{
			this.setState(()=> ({error: 'This book already exists!' }));

		}else{
			this.setState(()=> ({error:''}));
			this.props.addBook({
				title: title,
				author: author,
				description: description
			}); //Fem servir funció addBook del parent BooksApp gràcies a props
			e.target.elements.title.value ='';  //Buida l'input
			e.target.elements.author.value ='';  //Buida l'input
			e.target.elements.description.value ='';  //Buida l'input
		}
		
	}
	render() {

	return(
		<div className="containersBooks__books">
			<h2 className="containersBooks__books__title">Books I want to Read</h2>
				<div className="containersBooks__books__container">
					{this.props.booksToRead.map((b, i) => 
						<BookWithSwitch
							key={b.title}
							book={b}
							removeBook={this.props.removeBook}
							switchToReaded={this.props.switchToReaded}
							showDetails={this.props.showDetails}
					 	/ >
					)}
				</div>
				<div className="formBook">
					{(this.props.booksToRead.length === 0) && <p>Type the next book you want to read!</p>}
					<form  onSubmit ={this.handleAddBook}>
						<input 

							placeholder="Title"
							autoFocus
							type="text" 
							name="title" />
						<input	
							type="text"
							name="author"
							placeholder="Author"
						/>
						<textarea	
							type="text"
							name="description"
							placeholder="Description (Optional)">
						</textarea>
						<button className="addButton">Add Book</button>
					</form>
					{(this.state.error !== '') && <p>{this.state.error}</p>}
				</div>
			
		</div>
	)}
}

