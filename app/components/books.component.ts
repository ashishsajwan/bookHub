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
  constructor(private _booksService: BooksService) {
    var keyups = Observable.fromEvent($('#search-container'),'keyup').map(e => e.target.value).distinctUntilChanged();
    keyups.subscribe(data => {
      this.bookChange.emit({bookDetails:false});
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
      this._books = this.books = books.books;
    });
  }
  showBook(bookId) {
    this.bookChange.emit({bookDetails:_.findWhere(this.books, {
        id: bookId
      })});
  }
  showBookDetails($event){
    console.log($event);
  }
}