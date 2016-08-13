import {Component, Input} from 'angular2/core';

@Component({
    selector: 'bookdetails',
    templateUrl: 'app/templates/bookDetails.template.html',
})
export class BookDetailsComponent {
	@Input() bookDetails = false;

}