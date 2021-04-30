import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { from, fromEvent, Observable, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  toArray
} from "rxjs/operators";
import { Person } from "../people.model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input() searchData: Person[];
  @Output() goToPage = new EventEmitter<Person>();
  result: Person[];
  searchForm: FormControl;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      searchInput: new FormControl()
    });
  }

  ngOnInit() {
    console.log(this.searchForm);
    //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
    const source = from([
      { name: "Joe 31", age: 31 },
      { name: "Joe 35", age: 35 },
      { name: "Bob", age: 25 }
    ]);
    //filter out people with age under 30
    const example = source.pipe(filter(person => person.age >= 30));

    //output: "Over 30: Joe"
    const subscribe = example.subscribe(val =>
      console.log(`Over 30: ${val.name}`)
    );

    of(1, 2, 3)
      .pipe(map(x => x * x))
      .subscribe(v => console.log(`value: ${v}`));
    this.searchFormInit();
  }
  searchFormInit() {
    this.searchForm = new FormControl();
    this.searchForm.valueChanges
      .pipe(
        filter(text => text.length >= 3),
        debounceTime(10),
        distinctUntilChanged(), // ignore if next search query is same as previous
        switchMap(searchTerm => this.search(searchTerm))
      )
      .subscribe(data => {
        this.result = data;
      });
  }
  public setPage(person: Person) {
    if (this.goToPage.observers.length === 0) {
      alert(person.firstname);
    }
    this.goToPage.emit(person);
  }
  search(searchkey) {
    return from(this.searchData).pipe(
      filter(person => person.firstname.indexOf(searchkey) > -1),
      map(item => item as Person),
      toArray()
    );
  }
}

//https://www.tektutorialshub.com/angular/rxjs-observable-using-create-of-from-in-angular/
