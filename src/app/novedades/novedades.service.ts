import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {

  obtenerNovedades(): any[] {
    return [
      {
        titulo: 'McDonald\'s + Friends',
        descripcion: 'Nueva colaboración de McDonald\'s con Friends! Llévate una de sus tazas con tu McMenú favorito. No te lo puedes perder!',
        imagen: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/Zyuc_K8jQArT0VqG_900x600px_NdPTazasMcD.jpg?auto=format,compress'
      },
      {
        titulo: 'Llega la Navidad!',
        descripcion: 'Prepárate para las nuevas recetas navideñas. Sorprenderás a todos tus seres queridos!',
        imagen: 'https://i.imgur.com/p50NL2l.jpeg'
      },
      {
        titulo: 'Friends the reunion',
        descripcion: 'Para todos vosotros y con mucho amor, muy pronto en HBO',
        imagen: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/0bf18e6a-41b2-48ae-a7ad-12c647df826c/f5940f36-d1de-11ee-bca3-12c84011b169?host=wbd-images.prod-vod.h264.io&partner=beamcom'
      }
    ];
  }
}