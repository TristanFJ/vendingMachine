import {
  ProxyState
} from "../AppState.js";
import {
  vendingService
} from "../Services/VendingService.js"

function _draw() {
  let snacks = ProxyState.snacks;
  let cardsTemplate = ''
  snacks.forEach(snack => cardsTemplate += snack.CardTemplate)
  document.getElementById("app").innerHTML =
    `
  <div class="my-3">
    <div class="values d-flex flex-wrap my-3">
      ${cardsTemplate}
    </div>
  </div>
  `
}


function _drawMoney() {
  document.getElementById("money").innerText = ProxyState.money.toFixed(2)
}

// REVIEW "default class"
export default class VendingController {
  constructor() {
    console.log("VendingController");
    _drawMoney()
    _draw()
  }


  addQuarter() {
    vendingService.addQuarter()
    console.log(ProxyState.money);
    _drawMoney()
    _draw()

  }

  buySnack(snackName) {
    vendingService.buySnack(snackName)
    _drawMoney()
    _draw()


  }
}