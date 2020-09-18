import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
} from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective {
    constructor(private el: ElementRef) {}
    @HostBinding('class.toggleColor')
    private classApend = false;
    @HostListener('mouseenter')
    mouseMove() {
        (this.el.nativeElement as HTMLElement).style.cursor = 'pointer';
    }
    @HostListener('click')
    eventClick() {
        this.classApend = !this.classApend;
    }
}
