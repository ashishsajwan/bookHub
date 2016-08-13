import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {BooksService} from '../services/books.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'bookslist',
  templateUrl: 'app/templates/books.template.html',
  providers: [BooksService, HTTP_PROVIDERS]
})

export class BooksComponent implements OnInit {
  @Output() bookChange = new EventEmitter();
  @Input() bookmarked = false;
  books = [];
  _books = [];
  currentBook = null;
  constructor(private _booksService: BooksService) {
    var keyups = Observable.fromEvent($('#search-container'),'keyup').map(e => e.target.value).distinctUntilChanged();
    keyups.subscribe(data => {
      this.reset();
      if(data) {
        this.books = _.filter(this._books, function(book) {
            if (book.name.toLowerCase().indexOf(data.toLowerCase()) != -1) {
              return true;
            }
            if (book.author.toLowerCase().indexOf(data.toLowerCase()) != -1) {
              return true;
            }
            if (book.rating.toLowerCase().indexOf(data.toLowerCase()) != -1) {
              return true;
            }
          });
      } else {
        this.books = this._books;
      }
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.reset();
    if(changes['bookmarked'].currentValue) {
      this.books = _.filter(this._books, function(book) {
        return book.isBookmarked;
      });
    } else {
      this.books = this._books;
    }
  }
  ngOnInit() {
    this._booksService.getBooks().subscribe(books => {
      _.each(books.books,function(book,key){
        books.books[key]['isBookmarked'] = (localStorage.getItem('bookmark-'+book.id)) ? true : false;
      });
      this._books = this.books = books.books;
    });
  }
  showBook(bookId) {
    this.currentBook = bookId;
    this.bookChange.emit({bookDetails:_.findWhere(this.books, {
        id: bookId
      })});
  }
  reset(){
    this.bookChange.emit({bookDetails:false});
    this.currentBook = null;
  }
}