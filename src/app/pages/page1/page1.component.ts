import { Component, OnInit } from "@angular/core";
import { cargarEstilos, cargarScripts } from "src/scripts/dependencias";
import jump from "jump.js";
import { activar_modal, desactivar_modal, animateCSS } from '../../../scripts/alternos';

declare function stickyStack();
declare var stackedCards: any;
declare function iconate(valor1: any, valor2: any): any;
@Component({
  selector: "app-page1",
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.scss"],
})
export class Page1Component implements OnInit {
  public loading: boolean = true;
  private scripts: string[] = [
    "assets/libs/slider/stackedCards.min.js",
    "assets/libs/sticky/stycky.js",
    "assets/libs/iconate/iconate.js",
  ];
  private estilos: string[] = [
    "assets/libs/slider/stackedCards.css",
    "assets/pages/pageone.css",
    "assets/libs/iconate/iconate.min.css",
  ];
  constructor() {}
  async ngOnInit() {
    activar_modal();
    await cargarEstilos(this.estilos, "page1");
    await cargarScripts(this.scripts, "page1");
    this.animacionesScroll();
    desactivar_modal();
    this.loading = false;
  }
  animacionesScroll() {
    
    //animaciones
    //menu animacion
    animateCSS('.content' ,'bounceInRight')
    animateCSS('.menu' ,'bounceInLeft', null ,()=>{
      // animateCSS('.menu' ,'bounceInDown');
      // animateCSS('.cont_texto' ,'bounceInDown');
    });
    //desactivar el scroll
    //efcto de tarjetas
    var stackedCard = new stackedCards({
      selector: ".stacked-cards",
      layout: "slide",
      transformOrigin: "bottom",
    });
    stackedCard.init();
    let elemento: any = $(".main-content-wrapper");
    elemento.stickyStack();
    //fin
    //pagina siguiente
    let $nextPage = $(".nextaPage");
    let secciones = $('.main-content-wrapper section'); 
    let cont =  0;
    $nextPage.on("click", () => {
      //manejar el scrooll
       cont+=1000; 
       let $next = $('.nextaPage i');
        if(cont >= ((secciones.length * 1000) - 2000)){
           $next.removeClass('fa-arrow-right');
           $next.addClass('fa-angle-double-up');
          }
          if(cont >= ((secciones.length * 1000) -1000)){
            cont =0;   
            $next.removeClass('fa-angle-double-up');
             setTimeout(()=>{
              $next.addClass('fa-arrow-right');
             } , 1000)
         }
      let cantScroll = $(window).scrollTop();
       let cantSumar = cont- cantScroll;
       window.scroll({
        top: cantScroll+ cantSumar,
        behavior: "smooth",
      });
    });
    //fin
    //scrooll
    const scrollMove = (element :HTMLElement , referencia:HTMLElement ) =>{
      const refElment =  $(referencia);
      element.addEventListener('click' , ()=>{
        window.scroll({ top:  (refElment.offset().top + refElment.height() + 100), behavior :'smooth'})
      })
    }   
    let itemsMenu =  $('.menu li');
   
  for (let i = 1; i < itemsMenu.length ; i++) {
     scrollMove(itemsMenu[i] ,  secciones[i]);
  }
  //pasar pagina   boton
  let $btnSiguiente = $('.nextaPage');
 $(window).scroll(  ()=>{
      let posBarra = $(window).scrollTop();
       $btnSiguiente.css( {
          'transform': 'translate(0,' + posBarra * 1+'px)'
       })
 }) 
}
 

}
