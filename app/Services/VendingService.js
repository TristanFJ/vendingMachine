import {
  ProxyState
} from "../AppState.js";
import {
  Snack
} from "../Models/Snacks.js";


class VendingService {

  constructor() {
    console.log('vendingService working');

  }


  addQuarter() {
    ProxyState.money += ProxyState.quarter
  }

  buySnack(snackName) {
    const snacks = ProxyState.snacks


    const boughtSnack = snacks.find(snack => snack.name === snackName)
    console.log(boughtSnack.price);
    if ((boughtSnack.price <= ProxyState.money) && boughtSnack.quantity > 0) {
      ProxyState.money -= boughtSnack.price;
      boughtSnack.quantity--
    } else {
      alert("no snack for you")
    }


  }
}



export const vendingService = new VendingService();