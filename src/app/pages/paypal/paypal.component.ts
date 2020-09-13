import { Component, OnInit } from '@angular/core';
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.scss'],
})
export class PaypalComponent implements OnInit {
    // payPalConfig?: IPayPalConfig;
    showSuccess = false;
    constructor() {}

    ngOnInit() {
        // this.initConfig();
    }

    // private initConfig(): void {
    //     this.payPalConfig = {
    //         currency: 'USD',
    //         clientId: 'sb',
    //         advanced: {
    //             commit: 'true',
    //         },
    //         style: {
    //             label: 'paypal',
    //             layout: 'vertical',
    //         },
    //         onApprove: (data, actions) => {
    //             console.log(
    //                 'onApprove - transaction was approved, but not authorized',
    //                 data,
    //                 actions,
    //             );
    //             actions.order.get().then((details) => {
    //                 console.log(
    //                     'onApprove - you can get full order details inside onApprove: ',
    //                     details,
    //                 );
    //             });
    //         },
    //         onClientAuthorization: (data) => {
    //             console.log(
    //                 'onClientAuthorization - you should probably inform your server about completed transaction at this point',
    //                 data,
    //             );
    //             this.showSuccess = true;
    //         },
    //         onCancel: (data, actions) => {
    //             console.log('OnCancel', data, actions);
    //         },
    //         onError: (err) => {
    //             console.log('OnError', err);
    //         },
    //         onClick: (data, actions) => {
    //             console.log('onClick', data, actions);
    //         },
    //     };

    //     this.payPalConfig.createOrderOnServer = (): Promise<string> => {
    //         return fetch('http://localhost:1337/checkorder/')
    //             .then((data) => data.json())
    //             .then((data) => data.orderID);
    //     };
    //     // this.payPalConfig.createOrderOnClient({
    //     //
    //     // });
    // }
}
