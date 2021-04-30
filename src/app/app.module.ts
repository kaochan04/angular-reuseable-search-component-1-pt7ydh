import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SearchComponent } from "./search/search.component";
import { PersonComponent } from "./person/person.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SearchComponent,
    PersonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
