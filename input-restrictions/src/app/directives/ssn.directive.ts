//validate ssn
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[ssnNumber]'
})
export class SSNDirective {
    private regex: RegExp = new RegExp(/^[0-9]{1,6}( ){0,1}([0-9]){0,5}$/g);
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];

    constructor(private el: ElementRef) {
    }

    @HostListener('paste', ['$event']) onkeydown(e: any) {
        var pastedvalue = e.clipboardData.getData('Text');
        var value = this.el.nativeElement.value + pastedvalue;
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
