import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class BooksService {
	constructor (private _http:Http) {

	}
	getBooks() {
		return this._http.get('https://rawgit.com/ashishsajwan/bookHub/master/books.json')
		.map(res => res.json());
	}
}