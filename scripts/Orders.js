import { getOrders, getMetals, getSizes, getStyles } from "./database.js";


const metals = getMetals();
const styles = getStyles();
const sizes = getSizes();

const buildOrderListItem = (order) => {
  const foundMetal = metals.find((metal) => metal.id === order.metalId);
  const foundSize = sizes.find((size) => size.id === order.sizeId);
  const foundStyle = styles.find((style) => style.id === order.styleId);

  const totalCost = foundMetal.price + foundSize.price + foundStyle.price;

  const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return `<li>
        Order #${order.id} cost ${costString}
        </li>`;
};

export const Orders = () => {
  /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
        const orders = getOrders();
  let html = "<ul>";

  const listItems = orders.map((order) => buildOrderListItem(order));

  html += listItems.join("");
  html += "</ul>";

  return html;
};

// Remember that the function you pass to find() must return true/false
//const foundMetal = metals.find((metal) => {
//
//const totalCost = foundMetal.price

// use the order's sizeId property to get to the proper size obj, and its circumference prop
// const orderSize = sizes.find( (size) => size.id === order.sizeId )
// const orderTopping = toppings.find( (topping) => topping.id === order.toppingId )
// const orderCrust = crusts.find( (taco) => taco.id === order.crustId )

// const orderPrice = orderCrust.price + orderTopping.price + orderSize.price

// return `
//   <li order--list-item">
//     Order #${order.id} placed on ${new Date(order.timestamp).toLocaleString()},
//     is a ${orderSize.circumference}-inch ${orderCrust.type} ${orderTopping.name} pizza.
//     <p>
//     Total Price: $${orderPrice.toFixed(2)}
//     </p>
//   </li>
//   `
// })

// ordersList += ordersArray.join("")
// ordersList += `</ul>`
// }

// return ordersList
// }
