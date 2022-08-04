/* eslint-disable no-alert */

/**************
 *   SLICE 1
 **************/

function updateCoffeeView(coffeeQty) {
  let coffeeCount = document.getElementById('coffee_counter');

  coffeeCount.innerText= coffeeQty;
}

function clickCoffee(data) {
  data.coffee += 1;

  updateCoffeeView(data.coffee);
}

/**************
 *   SLICE 2
 **************/

function unlockProducers(producers, coffeeCount) {
  for (let i = 0; i < producers.length; i++){
    if (coffeeCount >= producers[i].price/2){
      producers[i].unlocked = true;
    }
  }
}

function getUnlockedProducers(data) {
  let unlockedProducers = [];
  for (let i = 0; i < data.producers[i];i++){
    if (data.producers[i].unlocked == true){
      
      unlockedProducers.push(data.producers[i]);
    }
  }
  return unlockedProducers;
}

function makeDisplayNameFromId(id) {
  id = id.toLowerCase().split('_');
  for (var i = 0; i < id.length; i++) {
    if(id[i] === '_'){
      id[i] = ' ';
    }
  }
  for (var i = 0; i < id.length; i++) {
    id[i] = id[i].charAt(0).toUpperCase() + id[i].slice(1);
  }
  
  return id.join(' ');
}

// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'producer';
  const displayName = makeDisplayNameFromId(producer.id);
  const currentCost = producer.price;
  const html = `
  <div class="producer-column">
    <div class="producer-title">${displayName}</div>
    <button type="button" id="buy_${producer.id}">Buy</button>
  </div>
  <div class="producer-column">
    <div>Quantity: ${producer.qty}</div>
    <div>Coffee/second: ${producer.cps}</div>
    <div>Cost: ${currentCost} coffee</div>
  </div>
  `;
  containerDiv.innerHTML = html;
  return containerDiv;
}


// deleteAllCHildNodes needs work 

function deleteAllChildNodes(parent) {
  let child = parent.firstElementChild;
  for (let i = 0; i < parent.length;i++){
    parent.removeChild(child)
    child = parent.firstElementChild;
  }
}

function renderProducers(data) {
  // your code here
}

/**************
 *   SLICE 3
 **************/

function getProducerById(data, producerId) {
  // your code here
}

function canAffordProducer(data, producerId) {
  let value = false;

  return value;
}

function updateCPSView(cps) {
  // your code here
}

function updatePrice(oldPrice) {
  let newPrice = Math.round(oldPrice * 1.25);

  return newPrice;
}

function attemptToBuyProducer(data, producerId) {
  let value = false;

  return value;
}

function buyButtonClick(event, data) {
  // your code here
}

function tick(data) {
  // your code here
}

/*************************
 *  Start your engines!
 *************************/

// You don't need to edit any of the code below
// But it is worth reading so you know what it does!

// So far we've just defined some functions; we haven't actually
// called any of them. Now it's time to get things moving.

// We'll begin with a check to see if we're in a web browser; if we're just running this code in node for purposes of testing, we don't want to 'start the engines'.

// How does this check work? Node gives us access to a global variable /// called `process`, but this variable is undefined in the browser. So,
// we can see if we're in node by checking to see if `process` exists.
if (typeof process === 'undefined') {
  // Get starting data from the window object
  // (This comes from data.js)
  const data = window.data;

  // Add an event listener to the giant coffee emoji
  const bigCoffee = document.getElementById('big_coffee');
  bigCoffee.addEventListener('click', () => clickCoffee(data));

  // Add an event listener to the container that holds all of the producers
  // Pass in the browser event and our data object to the event listener
  const producerContainer = document.getElementById('producer_container');
  producerContainer.addEventListener('click', event => {
    buyButtonClick(event, data);
  });

  // Call the tick function passing in the data object once per second
  setInterval(() => tick(data), 1000);
}
// Meanwhile, if we aren't in a browser and are instead in node
// we'll need to exports the code written here so we can import and
// Don't worry if it's not clear exactly what's going on here;
// We just need this to run the tests in Mocha.
else if (process) {
  module.exports = {
    updateCoffeeView,
    clickCoffee,
    unlockProducers,
    getUnlockedProducers,
    makeDisplayNameFromId,
    makeProducerDiv,
    deleteAllChildNodes,
    renderProducers,
    updateCPSView,
    getProducerById,
    canAffordProducer,
    updatePrice,
    attemptToBuyProducer,
    buyButtonClick,
    tick
  };
}
