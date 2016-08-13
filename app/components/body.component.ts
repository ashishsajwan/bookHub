import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {BooksComponent} from './books.component'
import {BookDetailsComponent} from './bookDetails.component'

@Component({
    selector: 'content',
    templateUrl: 'app/templates/body.template.html',
    directives : [BooksComponent, BookDetailsComponent]
})
export class BodyComponent {
	bookDetails;
	bookmarked = false;
	showBookDetails($event) {
		this.bookDetails = $event.bookDetails;
	}
	showBookmarks($event) {
		this.bookmarked = !this.bookmarked;
	}
}