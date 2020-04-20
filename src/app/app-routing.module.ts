import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';


const routes: Routes = [
   {path : 'dashboard' ,  component: DashboardComponent },
   {path : 'portafolio' , component: Page1Component},
   {path : 'ramdom' , component: Page2Component},
   {path: '' ,pathMatch:'full' ,redirectTo : 'portafolio'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash :true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
