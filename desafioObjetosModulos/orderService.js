import order from "./order.js";
import Order from "./order.js";
import {shipment} from "./shippingService.js";
 
export function total(order)
{
    return order.basic - (order.basic * order.discount / 100) + shipment(order);
}
