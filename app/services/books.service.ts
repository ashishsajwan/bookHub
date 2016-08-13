import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class BooksService {
	constructor (private _http:Http) {

	}
	getBooks() {
		return this._http.get('https://capillary.0x10.info/api/books?type=json&query=list_books')
		.map(res => res.json());
	}
}