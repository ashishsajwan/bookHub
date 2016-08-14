import {Component, Input} from 'angular2/core';

@Component({
    selector: 'header',
    templateUrl: 'app/templates/header.template.html'
})
export class HeaderComponent {
	@Input() data = {};
}