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
	sort_key = null;
	showBookDetails($event) {
		this.bookDetails = $event.bookDetails;
	}
	showBookmarks() {
		this.bookmarked = !this.bookmarked;
	}
	sortByKey(key) {
		this.sort_key = key;
	}
}