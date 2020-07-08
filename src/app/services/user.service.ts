import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userDataMockup = {
    name: "Camila",
    money: "1570000",
    type: "Estratega",
    investments: "1600000",
    incomes: "-30000",
    goals: [
      {
        id: 1,
        title: "Viaje a Islas Canarias",
        icon: "../../assets/icon/island.svg",
        current: 1630000,
        goal: 8000000,
        percentage: 20
      },
      {
        id: 2,
        title: "Macbook Pro",
        icon: "../../assets/icon/computer.svg",
        current: 0,
        goal: 7000000,
        percentage: 0
      }
    ],
    portfolio: {
      servicesCount: 10,
      services: [
        {
          id: 1,
          title: "FIC Old Mutual Efectivo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 15,
          assets: [
            "Renta Fija",
            "Depósito a la Fija"
          ]
        },
        {
          id: 2,
          title: "FIC Old Mutual Riesgo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 12,
          assets: [
            "Renta Variable",
            "Depósito a la Fija"
          ]
        },
        {
          id: 3,
          title: "FIC Old Mutual Efectivo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 15,
          assets: [
            "Renta Fija",
            "Depósito a la Fija"
          ]
        },
        {
          id: 4,
          title: "FIC Old Mutual Riesgo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 12,
          assets: [
            "Renta Variable",
            "Depósito a la Fija"
          ]
        },
        {
          id: 5,
          title: "FIC Old Mutual Efectivo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 15,
          assets: [
            "Renta Fija",
            "Depósito a la Fija"
          ]
        },
        {
          id: 6,
          title: "FIC Old Mutual Riesgo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 12,
          assets: [
            "Renta Variable",
            "Depósito a la Fija"
          ]
        },
        {
          id: 7,
          title: "FIC Old Mutual Efectivo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 15,
          assets: [
            "Renta Fija",
            "Depósito a la Fija"
          ]
        },
        {
          id: 8,
          title: "FIC Old Mutual Riesgo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 340000,
          percentage: 14,
          assets: [
            "Renta Variable",
            "Depósito a la Fija",
          ]
        },
        {
          id: 9,
          title: "FIC Old Mutual Efectivo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 5,
          assets: [
            "Depósito a la Fija"
          ]
        },
        {
          id: 10,
          title: "FIC Old Mutual Riesgo",
          logo: "../../assets/icon/scandia-logo.svg",
          amount: 240000,
          percentage: 20,
          assets: [
            "Renta Variable",
          ]
        }
      ]
    }
  }

  constructor() { }

  getUserData() {
    return this.userDataMockup;
  }
}
