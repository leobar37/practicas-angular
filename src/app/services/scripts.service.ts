import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  constructor() {}

  public laodStyles(estilos: string[]): Promise<String[]> {
    const existeEstilo = (text: string) => {
      return new Promise((resolve, reject) => {
        let estilos: any = document.getElementsByTagName('link');
        for (const estilo of estilos) {
          let link: HTMLLinkElement = estilo;
          if (link.href.indexOf(text) > 0) {
            return resolve(true);
          }
        }
        resolve(false);
      });
    };

    const cargarEstilo = (styleUrl: string) => {
      return new Promise(async (resolve, reject) => {
        let bool = await existeEstilo(styleUrl);
        if (bool) return resolve('existe');
        const styleElement = document.createElement('link');
        styleElement.href = styleUrl;
        styleElement.rel = 'stylesheet';
        styleElement.onload = resolve;
        document.head.appendChild(styleElement);
      });
    };

    return new Promise(async (resolve, reject) => {
      for (const estilo of estilos) {
        await cargarEstilo(estilo);
      }
      resolve(estilos);
    });
  }

  public loadEscripts(scripts: string[]): Promise<string[]> {
    const existeEscript = (text: string) => {
      return new Promise((resolve, reject) => {
        let scripts: any = document.getElementsByTagName('script');
        for (const script of scripts) {
          let src: HTMLScriptElement = script;
          //juego de cadenas
          if (src.src.indexOf(text) > 0) {
            return resolve(true);
          }
        }
        resolve(false);
      });
    };
    let cargarScript = (scriptUrl: string) => {
      return new Promise(async (resolve, reject) => {
        let bool = await existeEscript(scriptUrl);
        if (bool) return resolve('ya existe el script');
        const scriptElment = document.createElement('script');
        scriptElment.src = scriptUrl;
        document.body.appendChild(scriptElment);
        scriptElment.onload = resolve;
      });
    };

    return new Promise(async (resolve, reject) => {
      for (const script of scripts) {
        await cargarScript(script);
      }
      resolve(scripts);
    });
  }
}