import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LettersOnlyDirective} from './directives/letters.directive';
import {PhoneNoDirective} from './directives/phoneno.directive';
import {SSNDirective} from './directives/ssn.directive';
import {LettersNumbersOnly} from './directives/letters-numbers.directive';
import {DecimalNumberOnlyDirective} from './directives/decimal-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    LettersOnlyDirective,
    PhoneNoDirective,
    SSNDirective,
    LettersNumbersOnly,
    DecimalNumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
}
