import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
} from '@angular/core';

@Directive({
    selector: '[appDirective]',
})
export class DirectiveDirective {
    colors = ['red', 'blue'];
    constructor(el: ElementRef) {
        // is element of the DOM
        console.log(el);
    }
    @HostBinding('style.color') color: string;

    @HostListener('keydown', ['$event.target'])
    keyPressed(e: HTMLElement) {
        const math = Math.floor(Math.random() * this.colors.length);
        this.color = this.colors[math];
    }
}
