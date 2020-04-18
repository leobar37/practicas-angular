export const activar_modal = ()=>{
    let load = $('#load');
     if(!load.hasClass('load')){
         load.addClass('load')
     };
    }
    
export const desactivar_modal = ()=>{
        let load = $('#load');
        load.removeClass('load');
        let body =  document.body;
        body.style.overflowY = 'visible';
     
        load.addClass('esconderload');
}

export function animateCSS(element:string, animationName:string, elhtml?:HTMLElement, callback?:Function ) {
  let node;
    if(elhtml){
      node =  elhtml;   
    }else{
     node  = document.querySelector(element);
    }
    node.classList.add('animated', animationName)
    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)
        if (typeof callback === 'function') callback()
    }
    node.addEventListener('animationend', handleAnimationEnd)
}
