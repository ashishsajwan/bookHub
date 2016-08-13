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
	showBookDetails($events) {
		this.bookDetails = $events.bookDetails;
	}
}