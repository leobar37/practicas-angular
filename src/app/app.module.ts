import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { LandingExampleComponent } from './pages/landing-example/landing-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsComponent } from './pages/forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaypalComponent } from './pages/paypal/paypal.component';
// import { NgxPayPalModule } from 'ngx-paypal';
import { HttpClientModule } from '@angular/common/http';
import { SlideFrameworComponent } from './pages/slide-framewor/slide-framewor.component';
@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        Page1Component,
        Page2Component,
        LandingExampleComponent,
        FormsComponent,
        PaypalComponent,
        SlideFrameworComponent,
    ],
    imports: [
        HttpClientModule,
        // NgxPayPalModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
