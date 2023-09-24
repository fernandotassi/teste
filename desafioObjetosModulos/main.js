import Order from "./order.js";
import order from "./order.js";
import * as frete from "./orderService.js";

const data = document.getElementById("data").innerHTML.split("\n");
const x = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

console.log(`pedido: ${x.code}`);
console.log(`total: ${frete.total(x).toFixed("2")}`)