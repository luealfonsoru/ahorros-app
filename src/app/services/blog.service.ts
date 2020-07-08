import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  videoPostsMockup = {
    totalVideos: 3,
    posts: [
      {
        page: 0,
        title: "Esto es AHORRO",
        subtitle: "Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.",
        thumbnail: "../../assets/images/thumb1.svg",
        src: "https://www.youtube.com/watch?v=wh8k2W49Eyo"
      },
      {
        page: 1,
        title: "Evita gastos",
        subtitle: "¡Tus finanzas importan! recomendaciones de expertos para evitar gastar de más.",
        thumbnail: "../../assets/images/thumb1.svg",
        src: "https://www.youtube.com/watch?v=VhTZ-1OS8Rw"
      },
      {
        page: 2,
        title: "¡Nuevo!",
        subtitle: "Descubre la importancia de la economía colaborativa en 2020.",
        thumbnail: "../../assets/images/thumb1.svg",
        src: "https://www.youtube.com/watch?v=MakR-qeKObI"
      }
    ]
  }
  textPostsMock = {
    totalPosts: 3,
    posts: [
      {
        page: 0,
        title: "10 gastos que debes evitar",
        subtitle: "Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
        thumbnail: "../../assets/images/thumb2.svg",
      },
      {
        page: 1,
        title: "10 gastos que debes evitar",
        subtitle: "Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
        thumbnail: "../../assets/images/thumb3.svg",
      },
      {
        page: 2,
        title: "10 gastos que debes evitar",
        subtitle: "Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.",
        thumbnail: "../../assets/images/thumb4.svg",
      }
    ]
  }
  constructor() { }

  getVideoPosts() {
    return this.videoPostsMockup
  }

  getBlogPosts() {
    return this.textPostsMock
  }
}
