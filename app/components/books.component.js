System.register(['angular2/core', '../services/books.service', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, books_service_1, http_1, Rx_1;
    var BooksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            BooksComponent = (function () {
                function BooksComponent(_booksService) {
                    var _this = this;
                    this._booksService = _booksService;
                    this.bookChange = new core_1.EventEmitter();
                    this.bookmarked = false;
                    this.books = [];
                    this._books = [];
                    var keyups = Rx_1.Observable.fromEvent($('#search-container'), 'keyup').map(function (e) { return e.target.value; }).distinctUntilChanged();
                    keyups.subscribe(function (data) {
                        _this.bookChange.emit({ bookDetails: false });
                        if (data) {
                            _this.books = _.filter(_this._books, function (book) {
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
                        }
                        else {
                            _this.books = _this._books;
                        }
                    });
                }
                BooksComponent.prototype.ngOnChanges = function (changes) {
                    if (changes['bookmarked'].currentValue) {
                        this.books = _.filter(this._books, function (book) {
                            return book.isBookmarked;
                        });
                    }
                    else {
                        this.books = this._books;
                    }
                };
                BooksComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._booksService.getBooks().subscribe(function (books) {
                        _this._books = _this.books = books.books;
                    });
                };
                BooksComponent.prototype.showBook = function (bookId) {
                    this.bookChange.emit({ bookDetails: _.findWhere(this.books, {
                            id: bookId
                        }) });
                };
                BooksComponent.prototype.showBookDetails = function ($event) {
                    console.log($event);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], BooksComponent.prototype, "bookChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BooksComponent.prototype, "bookmarked", void 0);
                BooksComponent = __decorate([
                    core_1.Component({
                        selector: 'bookslist',
                        templateUrl: 'app/templates/books.template.html',
                        providers: [books_service_1.BooksService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [books_service_1.BooksService])
                ], BooksComponent);
                return BooksComponent;
            }());
            exports_1("BooksComponent", BooksComponent);
        }
    }
});
//# sourceMappingURL=books.component.js.map