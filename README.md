# ng-input-restrictions

This code sample describes how to restrict entering a value to a text box field in Angular 6 directive, It explains five types of input restrictions applied to input fields.

The backend solution is built on Visual Studio 2017 .NET Core 2.2 and frontend is built on Angular 6 on Visual Studio Code

# How to start and debug the applications

Go inside input-restrictions-api and open input-restrictions-api.sln solution file, you can see backend project opens in Visual Studio
You can open frontend project by going inside input-restrictions folder, You have to install npm packages first before build and start the application,

``` npm i ```

``` ng build ```

```ng serve```

# Restrict to enter numbers & special characters using a Angular directive

 ```
 //validate firstname and lastname
import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[lettersOnly]'
})
export class LettersOnlyDirective{
    private regex: RegExp = new RegExp(/^[a-zA-Z]+$/g);
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];

    constructor(private el: ElementRef) {
    }
    @HostListener('paste', ['$event']) onkeydown(e: any) {
        var value = e.clipboardData.getData('Text');
        if (value && !String(value).match(this.regex)) {
            event.preventDefault();
        }
    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current: string = this.el.nativeElement.value;
        let next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}
```
```
<label class="col-form-label-sm" for="firstname">First name</label>
  <input type="text" tabindex="1" class="form-control form-control-sm" placeholder="First name" 
  name="firstName" required [(ngModel)]="member.firstName" #firstName="ngModel" lettersOnly>
```

# Some more in action

You can check how to listen to onchange event in a dropdown field and manipulate another control based on that
```
 <label class="col-form-label-sm" for="year">Postal No</label>
 <ng-select tabindex="7" name="postalNo" required class="form-control form-control-sm" 
  [items]="masterData.postalCode" bindLabel="code" bindValue="id" [(ngModel)]="member.postalNo" 
  #postalNo="ngModel" (change)="onPostalNoChange($event)">
 </ng-select>
 <br />
```

```
onPostalNoChange(event) {
  if (event == null) {
    this.member.postalPlace = '';
  }
  else {
    this.masterData.postalCode.forEach(entry => {
      if (entry.code == event.code) {
        this.member.postalPlace = entry.city;
      }
    });
  }
}
```
If you want to know more, go through this post [Angular 6 : Input restrictions in a form](https://social.technet.microsoft.com/wiki/contents/articles/52291.angular-6-input-restrictions-in-a-form.aspx) 
