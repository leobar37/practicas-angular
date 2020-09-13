import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingExampleComponent } from './pages/landing-example/landing-example.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PaypalComponent } from './pages/paypal/paypal.component';
import { SlideFrameworComponent } from './pages/slide-framewor/slide-framewor.component';

const routes: Routes = [
    { path: 'booststrap', component: DashboardComponent },
    { path: 'landing', component: LandingExampleComponent },
    { path: 'portafolio', component: Page1Component },
    { path: 'ramdom', component: Page2Component },
    { path: 'guards', component: SlideFrameworComponent },
    // { path: '', pathMatch: 'full', redirectTo: '/landing' },
    {
        path: 'forms',
        component: FormsComponent,
    },
    {
        path: 'exercices',
        loadChildren: () =>
            import('./pages/exercices/exercices.module').then(
                (m) => m.ExercicesModule,
            ),
    },
    {
        path: 'pagos',
        component: PaypalComponent,
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
