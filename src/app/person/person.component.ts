import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Person } from "../people.model";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"]
})
export class PersonComponent implements OnInit {
  form: FormGroup;

  person: Person[] = [
    {
      firstname: "John Paul",
      lastname: "Reynaldo",
      gender: "Male",
      birthday: new Date("August 02, 1998")
    } as Person,
    {
      firstname: "John Carlo",
      lastname: "Reynaldo",
      gender: "Male",
      birthday: new Date("August 02, 1998")
    } as Person,
    {
      firstname: "Glaiza",
      lastname: "Mores",
      gender: "Female",
      birthday: new Date("January 02, 2001")
    } as Person,
    {
      firstname: "Reianne",
      lastname: "Raynera",
      gender: "Female",
      birthday: new Date("July 02, 2001")
    } as Person
  ];
  constructor() {}
  public goto(person: Person) {
    console.log(person);
  }
  ngOnInit() {}
}
