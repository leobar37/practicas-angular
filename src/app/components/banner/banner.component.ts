import {
    Component,
    ComponentFactoryResolver,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { Adcomponent } from 'src/app/models/Ad-component';
import { AddItem } from 'src/app/models/ad-item';
import { AdDirective } from '../../directives/ad.directive';
@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
    @Input() ads: AddItem[];
    currentAdIndex = -1;
    @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
    constructor(private componentFactory: ComponentFactoryResolver) {}

    ngOnInit() {
        this.loadComponent();
        this.alternateAds();
    }
    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        const addItem = this.ads[this.currentAdIndex];
        // resultver desde un Type que es una clase generica , un componente
        const componenentFactory = this.componentFactory.resolveComponentFactory(
            addItem.component,
        );
        // obtener el la vista del contenedor actual y limipiarla
        const viewContainerRef = this.adHost.viewContainer;
        // si no limpiamos el view container ref este se agregar
        // viewContainerRef.clear();
        // crear un componente a partir del componentFactory
        const componentElement = viewContainerRef.createComponent<Adcomponent>(
            componenentFactory,
        );

        // agregar la data al componente
        componentElement.instance.data = addItem.data;

        // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        // const addItem = this.ads[this.currentAdIndex];
        // const componentFactoriy = this.componentFactory.resolveComponentFactory(
        //     addItem.component,
        // );

        // const viewContainerRef = this.adHost.viewContainer;
        // viewContainerRef.clear();
        // const componentRef = viewContainerRef.createComponent<Adcomponent>(
        //     componentFactoriy,
        // );
        // componentRef.instance.data = addItem.data;
    }

    alternateAds() {
        setInterval(() => {
            this.loadComponent();
        }, 3000);
    }
}
