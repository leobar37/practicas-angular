import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { desactivar_modal } from '../../../scripts/alternos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contadores: number[]=[];
  constructor( 
    private router:Router
  ) {

    // desactivar_modal();
  }
  
  ngOnInit(){
    // this.eventos();
    //       const $increment = document.querySelector('#increment');

  }
  navegar(){
    console.log('click');
    this.router.navigate(['/portafolio']);
  }

  // eventos(){
 
  //       // const fromEvent = new FromEvent($increment, "click");
  //       //este es una funcion de orden mayor
  //       /*
  //       * cualquier funcion que reciba 
  //        como parametro otra funcion
  //        *cual funcion que retorne otra funcion
  //       */
  //      const updateCounter = ( n :number ,callback)=>(event) => { 
  //       this.contadores[n] = 0 ;
  //       callback()
  //     };
      
  //       this.contadores[0] = 0 ;
  //       const observerA = {
  //         next: updateCounter(   0 , value =>  {
  //             // this.contadores[n] =
  //         })
  //       };
  //       // this.contadores[1] = 0;
  //        const observerB = {
  //         next: updateCounter( this.contadores[1] =0, value => this.contadores[1] = value + 1)
  //       };
  //       // fromEvent.observe(observerB);
  //       // this.contadores[2] =0;
  //       fromEvent.observe( {
  //         next: updateCounter( this.contadores[2] = 0, value => this.contadores[2] = value + 2)
  //       })
  //       fromEvent.observe(observerB);
  //       // Después de 3 segundos solo counterA se actualizará
  //       // setTimeout(() => {
  //       //   fromEvent.remove(observerB);
  //       // }, 3000);
  // }

}

