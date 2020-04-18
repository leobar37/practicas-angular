export const cargarEstilo = (styleUrl : string ,atr :string)=>{
    return new Promise( async(resolve, reject) => {
           let bool=await existeEstilo(styleUrl);          
           if(bool) return resolve('existe');
      const styleElement = document.createElement('link');
        styleElement.href = styleUrl;
        styleElement.rel = "stylesheet";
        styleElement.onload = resolve;
        document.head.appendChild(styleElement);
      });   
 }
export let cargarScript = (scriptUrl : string , atr :string)=>{
    return  new Promise( async (resolve , reject)=>{
       let bool =  await existeEscript(scriptUrl);
       if(bool) return resolve('ya existe el script')
       const scriptElment = document.createElement('script');
      scriptElment.src = scriptUrl;       
      document.body.appendChild(scriptElment);
      scriptElment.onload  =  resolve
    }); 
}

export let cargarScripts = (scripts : string[] , atr: string) =>{
     return new Promise(async (resolve , reject)=>{
         for (const script  of scripts){
               await cargarScript(script , atr);
         }
        resolve(scripts);
     });
} 
export let cargarEstilos = (estilos: string[] , atr: string) =>{
     return new Promise(async (resolve , reject)=>{
          for (const estilo  of estilos){
               await cargarEstilo(estilo , atr);
        }
        resolve(estilos);
     });
} 
export const existeEscript =  (text : string)=>{
  return new Promise((resolve , reject)=>{
    let scripts :any  =  document.getElementsByTagName('script');
      for (const script of scripts) {
         let src :HTMLScriptElement= script;    
        if(src.src.indexOf(text) > 0){            
            return resolve(true);
             // console.log('removio el elemnto ' , src);
        }
     }
     resolve(false);
 });
}
export const existeEstilo =  (text : string)=>{
  return new Promise((resolve , reject)=>{
    let estilos :any =  document.getElementsByTagName('link');
      for (const estilo of estilos) {
         let  link  :HTMLLinkElement= estilo;
        if( link.href.indexOf(text) >  0){
          return resolve(true);
        }
     }
     resolve(false);
 });
}
export const eliminarScript =  (texto: string)=> {
  return new Promise((resolve , reject)=>{
      let scripts :any =  document.getElementsByTagName('script');
      let body = document.body;
        for (const script of scripts) {
           let src : HTMLScriptElement = script;
          if(src.src.indexOf(texto) > 0){
              body.removeChild(src).onload = resolve  ;
               // console.log('removio el elemnto ' , src);
          }
       }
   });
}
 
export const eliminarEstilo =  (atr: string)=> {
  return new Promise((resolve , reject)=>{
    let estilos :any =  document.getElementsByTagName('link');
    let header = document.head;
      for (const estilo of estilos) {
         let  link  :HTMLLinkElement= estilo;
        if( link.href.indexOf(atr) > 0){
           header.removeChild(link).onload  = resolve;
             // console.log('removio el elemnto ' , src);
        }
     }
     resolve(false);
 });
}