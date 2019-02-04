//validate address line 1 and 2
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[lettersNumbersOnly]'
})

export class LettersNumbersOnly {
    private regex: RegExp = new RegExp(/^[a-zA-Z0-9 ]+$/g);
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
