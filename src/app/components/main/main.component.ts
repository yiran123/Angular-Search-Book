import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { BookService } from '../../core/book.service';
import { Book } from '../../book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  inputval = '';
  booklist: Book[] = [];
  constructor(private bs: BookService) {}

  @ViewChild('input', { static: false })
  input!: ElementRef;

  ngOnInit(): void {}

  search() {
    this.bs.search(this.inputval).subscribe((books: Book[]) => {
      this.booklist = books;
    });
    console.log(this.booklist[0].volumeInfo.imageLinks.thumbnail);
  }
}
