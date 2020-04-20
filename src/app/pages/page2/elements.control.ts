import { activar_modal, animateCSS } from '../../scripts/alternos';
const letters_animation = (texto: string , element:string)=>{
   return  new Promise( (resolve,  reject)=>{
    let i = 0;
    const mostrarPalabra = ()=>{
        if(i <  texto.length){
         document.querySelector(element).innerHTML+=texto.charAt(i);
        setTimeout(mostrarPalabra, 150);  
        i++;  
        }else{
            resolve()

        }
   }
   mostrarPalabra();
   });
}
const  animation_letters = ()=>{ 
     $('.pastel, .img_poll').addClass('mostrar');
    animateCSS('.pastel', 'bounceInLeft');
    animateCSS('.img_poll', 'bounceInRight');
    // await animateCSS('.pollito', 'zoomOutLeft');
    setTimeout( async ()=>{   
        $('.primero').addClass('ocultar');
        $('.segundo').addClass(['mostrar']);
        $('.segundo .corazon').addClass(['heartBeat']);
     $('.corazon').css({
        'animation-duration': '3s',
        // 'animation-delay': '0',
        'animation-iteration-count': 'infinite',
     })
     await letters_animation('You are worth a lot' , '.vales');
    } ,5000)

}
export const mainPage2 = async ()=>{
    await letters_animation('Feliz cumpleaños atrasado' , '.cumple');
    await letters_animation('pollito' , '.pollito');
    animation_letters();
}
