import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { clearTimeout } from 'timers';
@Component({
    selector: 'app-you',
    templateUrl: './you.component.html',
    styleUrls: ['./you.component.scss'],
})
export class YouComponent implements OnInit, AfterViewInit {
    constructor() {}
    ngAfterViewInit(): void {
        this.gsapRoutine();
    }

    ngOnInit() {}

    gsapRoutine() {
        const line = gsap.timeline();
        const doc = document.querySelector('.chicken');
        line.set(doc, { translateY: '-1000px' });
        line.addLabel('start', 0);
        line.timeScale(0.3);
        const items = document.querySelectorAll('.you_me li');
        items.forEach((item) => {
            if (item.classList.contains('up')) {
                line.fromTo(
                    item,
                    { translateY: '-500px' },
                    { translateY: 0 },
                    'start',
                );
            }
            if (item.classList.contains('down')) {
                line.fromTo(
                    item,
                    { translateY: '500px' },
                    { translateY: 0 },
                    'start',
                );
            }
            if (item.classList.contains('left')) {
                line.fromTo(
                    item,
                    { translateX: '-500px', opacity: 0 },
                    { translateX: '0px', opacity: 1 },
                    'start',
                );
            }
            if (item.classList.contains('right')) {
                line.fromTo(
                    item,
                    { translateX: '500px', opacity: 0 },
                    { translateX: '0px', opacity: 1 },
                    'start',
                );
            }
        });
        line.eventCallback('onComplete', () => {
            const time = setTimeout(() => {
                line.reverse();
            }, 2000);
        });
    }
}
