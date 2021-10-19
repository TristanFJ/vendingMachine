export class Snack {
  constructor(name, price, quantity, img) {
    this.name = name
    this.price = price
    this.quantity = quantity
    this.img = img
  }

  get CardTemplate() {
    return /*html*/ `
    <div class="card m-2 shadow">
    <div class="card-body">
    <img src="${this.img}" alt=""></img>
    <h4 class="no-select">$${this.price}</h4>
    <h4 class="text-uppercase no-select">${this.name}</h4>
    <h5 class="py-3 no-select">${this.quantity} remaining</h5>
    </div>
    <button class="btn btn-success square-top" onclick="app.vendingController.buySnack('${this.name}')">Purchase</button>
    </div>
    `
  }
}