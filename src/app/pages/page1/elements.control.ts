import { animateCSS } from 'src/app/scripts/alternos';
declare function stickyStack();
declare var stackedCards: any;
declare var VanillaTilt:any;
var measure_width = 800;
const animations = ()=>{
    animateCSS('.content' ,'bounceInRight')
    animateCSS('.menu' ,'bounceInLeft', null);
    socialAnimate();
    VanillaTilt.init(document.querySelector(".box"), {
		max: 25,
		speed: 400
	});
}
const socialAnimate = ()=>{
    let elements =  $('.pageone .social .icons a i');
    for(let i = 0 ; i < elements.length; i++){
        $(elements[i]).hover(()=>{
            animateCSS('' , 'pulse' , elements[i])
        });
    }
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
        moveforNumber(com2);
        console.log(com2);
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
const moveforNumber = (pos: number)=>{
    pos = pos-1;
    let secciones_cards = $('.main-content-wrapper section');
    let refElment : any =  secciones_cards[pos];
     refElment =  $(refElment);
    window.scroll({ top:  (refElment.offset().top - refElment.height() ), behavior :'smooth'})

}
const menu_scroll =()=>{
    let secciones_cards = $('.main-content-wrapper section');
    const scrollMove = (element :HTMLElement , referencia:HTMLElement ) =>{
        const refElment =  $(referencia);
        element.addEventListener('click' , ()=>{
          window.scroll({ top:  (refElment.offset().top + refElment.height()  ), behavior :'smooth'})
        })
      }
      let itemsMenu =  $('.menu li');
    for (let i = 1; i < itemsMenu.length ; i++) {
       scrollMove(itemsMenu[i] ,  secciones_cards[i]);
    }
}

 export function mainElements(){
    animations();
    ctrl_arrows();
    menu_scroll();
    floating_letters();  
 }

 
