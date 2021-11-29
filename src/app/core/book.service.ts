import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from '../book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseurl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  getBooks(query: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseurl}?q=${query}`);
  }

  search(query: string): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.baseurl}?q=${query}`)
      .pipe(map((books) => books.items || []));
  }
  getById(volumeId: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseurl}/${volumeId}`);
  }
}
