import React from 'react';
import Header from './Header'
import BooksReaded from './BooksReaded'
import BooksToRead from './BooksToRead'
import BookModal from './BookModal'

export default class BooksApp extends React.Component {
	state = {
		booksReaded: [],
		booksToRead: [],
		bookInDetail: {},
		showDetails: false
	};

	detailsBookClear = () => {this.setState(() => ( { showDetails: false } ) );}

	showDetails = (bookInDetail) =>{
		this.setState((prevState) => ({
			showDetails: true,
			bookInDetail: bookInDetail
		}))
	}
	addBook = (book) => {
		this.setState((prevState) => ({
			booksToRead: prevState.booksToRead.concat(book)
		}))
	}

	removeBook = (bookToRemove) =>{
		if (bookToRemove === this.state.bookInDetail){
			this.setState((prevState)=>({
				bookInDetail:{}
		}))
		}
		this.setState((prevState)=>({
			booksReaded: prevState.booksReaded.filter((b)=> 
				bookToRemove !==b ),
			booksToRead: prevState.booksToRead.filter((b)=> 
				bookToRemove !==b ),
		}))
	}

	switchToReaded = (bookToSwitch) =>{
		this.setState((prevState) =>({
			booksToRead: prevState.booksToRead.filter((b)=> 
				bookToSwitch !==b ),
			booksReaded: [bookToSwitch].concat(prevState.booksReaded) //Concat new book as array at the begining of prevState

		}))
	}

	componentDidMount = () => {

		const json2 = localStorage.getItem('booksToRead');
		const booksToRead = JSON.parse(json2);
		const json = localStorage.getItem('booksReaded');
		const booksReaded = JSON.parse(json);
		if (booksToRead){
			this.setState(() => ({ booksToRead }));
		}

		if (booksReaded){
			this.setState(() => ({ booksReaded }));
		}
		
	}

	componentDidUpdate = (prevProps, prevState) =>{
		if(prevState.booksReaded.length !== this.state.booksReaded.length){
			const json = JSON.stringify(this.state.booksReaded);
			localStorage.setItem('booksReaded',json)
		}
		if(prevState.booksToRead.length !== this.state.booksToRead.length){
			const json = JSON.stringify(this.state.booksToRead);
			localStorage.setItem('booksToRead',json)
		}
	}


	render() {
		return (
			<div>
				<Header />
				<div className="containersBooks container">
					<BooksToRead 
						booksToRead={this.state.booksToRead} 
						booksReaded={this.state.booksReaded}
						addBook={this.addBook} 
						removeBook={this.removeBook} 
						switchToReaded={this.switchToReaded}
						showDetails={this.showDetails}
					/>
					<BooksReaded 
						booksReaded={this.state.booksReaded} 
						removeBook={this.removeBook}
						showDetails={this.showDetails}  
					/>
				</div>
				<BookModal 
					bookInDetail={this.state.bookInDetail}
					showDetails={this.state.showDetails}
					detailsBookClear={this.detailsBookClear}
				 />
			</div>

		)

	}
} 