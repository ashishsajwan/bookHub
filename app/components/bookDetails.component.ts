import {Component, Input} from 'angular2/core';

@Component({
    selector: 'bookdetails',
    templateUrl: 'app/templates/bookDetails.template.html',
})
export class BookDetailsComponent {
	@Input() bookDetails = false;
	bookmarkIt(){
		this.bookDetails.isBookmarked = !this.bookDetails.isBookmarked;
		if(this.bookDetails.isBookmarked) {
			localStorage.setItem('bookmark-'+this.bookDetails.id, 'bookmarked');
		} else {
			localStorage.removeItem('bookmark-'+this.bookDetails.id);
		}
	}
}