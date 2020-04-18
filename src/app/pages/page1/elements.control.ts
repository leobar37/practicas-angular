import { animateCSS } from 'src/app/scripts/alternos';
declare function stickyStack();  
declare var stackedCards: any;
var measure_width = 1000;
const animaciones = ()=>{
    animateCSS('.content' ,'bounceInRight')
    animateCSS('.menu' ,'bounceInLeft', null);
}
const floating_letters = ()=>{
    var stackedCard = new stackedCards({
        selector: ".stacked-cards",
        layout: "slide",
        transformOrigin: "bottom",
    });
    stackedCard.init();
    let elemento: any = $(".main-content-wrapper");
    elemento.stickyStack();
}
const ctrl_arrows = () => {
    let secciones_cards = $('.main-content-wrapper section'); 
    let $nextPage = $(".dowPage");
    let $upPage = $('.upPage')
    let cont = 0;
    let resto = 0;
 const scrollMove = ()=>{
        let $arrow_control = $('.ctr_arrows a');
        $(document).on("scroll", () => {
        let bar = $(window).scrollTop();
        resto = bar;
        let posBarra = $(window).scrollTop();
        $arrow_control.css( {
            'transform': 'translate(0,' + posBarra +'px)'
        })
        });
 }
  //cambiar icono
const arrows = ()=>{
    $nextPage.on("click", () => {
        let pal = $(window).scrollTop();
        let com1 = parseInt(String(cont / measure_width), 10);
        //modulo del scroll
        let com2 = parseInt(String(pal / measure_width), 10);
        if (com1 != com2) {
            cont = com2 * measure_width;
            cont += measure_width;
        } else {
            cont += measure_width;
        }
        if( com2 >= (secciones_cards.length - 2)){
        cont=0; 
        }
        let cantScroll = $(window).scrollTop();
        let cantSumar = cont - resto;    
        window.scroll({
            top: cantScroll + cantSumar,
            behavior: "smooth",
        });
    });
     $upPage.on('click' ,()=>{
        let pal = $(window).scrollTop();
        let com1 = parseInt(String(cont / measure_width), 10);
        let com2 = parseInt(String(pal / measure_width), 10);
         if(!Number.isInteger(pal / measure_width)){
             com2++;
         }
        if (com1 != com2) {
            cont = com2 * measure_width;
            cont  = cont - measure_width;
        } else {
            cont -= 1000;
        }
        if(cont < 0) cont = 0 ;
        let cantScroll = $(window).scrollTop();
        //medida a avanzar en el scroll
        let cantSumar = cont - resto;    
        window.scroll({
            top: cantScroll + cantSumar,
            behavior: "smooth",
        });
     }) 
}
//init
scrollMove();
arrows();
};
const menu_scroll =()=>{
    let secciones_cards = $('.main-content-wrapper section'); 
    const scrollMove = (element :HTMLElement , referencia:HTMLElement ) =>{
        const refElment =  $(referencia);
        element.addEventListener('click' , ()=>{
          window.scroll({ top:  (refElment.offset().top + refElment.height() + 100), behavior :'smooth'})
        })
      }   
      let itemsMenu =  $('.menu li');      
    for (let i = 1; i < itemsMenu.length ; i++) {
       scrollMove(itemsMenu[i] ,  secciones_cards[i]);
    }
}

 export function mainElements(){
    animaciones();
    ctrl_arrows(); 
    menu_scroll();
    floating_letters();
 }

