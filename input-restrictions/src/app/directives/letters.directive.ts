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