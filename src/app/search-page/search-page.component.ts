import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../service-book/service-book.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent implements OnInit {
  query: string = '';
  results: any[] = [];

  constructor(private bookService: BookService) { }

  search(): void {
    this.bookService.getBooks().subscribe(data => {
      this.results = data.books.filter((book: { isbn: number; 
                                                title: string; 
                                                subtitle: string; 
                                                author: string; 
                                                published:number; 
                                                publisher: string; 
                                                pages: number; 
                                                description: string; 
                                                website: string}) =>
        book.isbn ||
        book.title.toLowerCase().includes(this.query.toLowerCase()) ||
        book.subtitle.toLowerCase().includes(this.query.toLowerCase()) ||
        book.author.toLowerCase().includes(this.query.toLowerCase()) ||
        book.published ||
        book.publisher.toLowerCase().includes(this.query.toLowerCase()) ||
        book.pages ||
        book.description.toLowerCase().includes(this.query.toLowerCase()) ||
        book.website.toLowerCase().includes(this.query.toLowerCase())
      );
    });
  }

  ngOnInit(): void {
    this.search();
  }

}
