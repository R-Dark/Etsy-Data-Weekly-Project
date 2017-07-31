// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
// function question1 () {
//     let ttl = 0;
//     let avg = "";

function question1() {
    let total = 0
    // let average = ""  average is defined below can do it in either place
    for ( let i = 0; i < data.length; i++ ){
        total = total + data[i].price
        // total =+ data[i].price (short hand version of line above)
  }
   average = (total/data.length).toFixed(2)
   //(.toFixed(2) is to shorten answer to decimal numbers)
   console.log("The average price is $" + average);
   //normally you would use return here but for this exercise use console log. good practice is to always use return before last bracket of function
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2() {
    let items = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].price >= 14.00 && data[i].price <= 18.00) {
            items.push(data[i].title)
        }
    }
    console.log(items);
}

// 3: Which item has a "GBP" currency code? Display it's name and price.

function question3() {
    let itemName = ""
    let itemPrice = ""
    for (var i = 0; i < data.length; i++) {
        if (data[i].currency_code === "GBP") {
            itemName = data[i].title + " costs " + data[i].price + " pounds."
        }
    }
    console.log(itemName);
}

// ------   ALTERNATIVE ANSWER FOR NUMBER #3   -------
// function question3() {
//     let itemName = ""
//     let itemPrice = ""
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].currency_code === "GBP") {
//             itemName = data[i].title
//             itemPrice = data[i].price
//         }
//     }
//     console.log(itemName + " costs " + itemPrice + " pounds.");
// }

// 4: Display a list of all items who are made of wood.

function question4() {
    let woodItems = []
    for (var i = 0; i < data.length; i++) {
        if (data[i].materials.includes("wood")) {
            woodItems.push(data[i].title)
        }

    }
    console.log(woodItems);

}

// ALTERNATIVE ANSWER FOR #4 -- NESTED LOOP -- LONG WAY
// function question4() {
//     let tree = [];
//     for (let i = 0; i < data.length; i++) {
//         let materials = data[i].materials
//         for (let j = 0; j < materials.length; j++) {
//             if (materials[j] === “wood”) {
//                 tree.push(data[i].title);
//             }
//         }
//     }
//     console.log(tree);
// }

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.


function question5 () {
      let items = []
      let materials = []
      for (var i = 0; i < data.length; i++) {
          if (data[i].materials.length >= 8) {
            items.push(data[i].title)
            materials.push(data[i].materials)
            console.log("materials", data[i].materials.length);
          }
      }
      console.log(items);
      console.log(materials);
}


// 6: How many items were made by their sellers?

function question6() {
    let homemade = []
    for (var i = 0; i < data.length; i++) {
        if (data[i].who_made === "i_did") {
            homemade.push(data[i].title)
        }
    }
    console.log(homemade.length + " items were made by their sellers.");
}
