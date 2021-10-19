import {
  EventEmitter
} from "./Utils/EventEmitter.js"
import {
  isValidProp
} from "./Utils/isValidProp.js"
import {
  Snack
} from "./Models/Snacks.js"



class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = []

  /** @type {import(./Models/Snacks).snacks[]} */
  snacks = [
    /////////// name, price, quantity
    new Snack('Clif-Bar', 2, 12, 'https://cdn.shopify.com/s/files/1/0341/0637/6325/products/DTC_CLF_PBD_Web_1320x1076_7f0f1634-00b7-4b40-890a-43be5b1f3c62.png?v=1612292405'),
    new Snack('Snickers', 1, 10, 'https://i5.walmartimages.com/asr/81cecf2a-7654-4cc7-a3df-c635fddbdee4_1.8dbdf00794d0a2d20d402c437cffab69.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'),
    new Snack('Zipfizz', 0.50, 50, 'https://i5.walmartimages.com/asr/cbf2687b-a20a-416b-9626-49ef51e74636_1.43ba0299508819ac2f389c6767c81dbe.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'),
    new Snack('Fried-Chicken', 2000, 1, 'https://insanelygoodrecipes.com/wp-content/uploads/2020/04/Fried_Chicken-1024x536.webp'),
    new Snack('Gatorade', 1, 11, 'https://images.heb.com/is/image/HEBGrocery/000532225?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'),
    new Snack('Gold Bar', 99999999, 0, 'https://www.usmoneyreserve.com/wp-content/uploads/2015/07/gold-bar-1-kilo.jpg'),
    new Snack('Money', -1, 5, 'https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg'),
  ]
  money = 9
  quarter = 0.25
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})