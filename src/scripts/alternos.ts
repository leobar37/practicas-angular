export const activar_modal = ()=>{
    let load = $('#load');
    // load.removeClass('esconderload');
     if(!load.hasClass('load')){
         load.addClass('load')
     };
    
    }
    
export const desactivar_modal = ()=>{
        let load = $('#load');
        load.removeClass('load');
        // load.fadeOut('slow');
        let body =  document.body;
        body.style.overflowY = 'visible';
        load.addClass('esconderload');
          
}