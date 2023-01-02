window.onload = function() {
  let card = document.querySelector('.card');
  document.querySelector('#width').addEventListener("keypress", function (e) {  // Changing width of the card
    if (e.key === 'Enter') {
      var inputWidth = document.querySelector('#width').value;
      card.style.width = inputWidth + "px";
      console.log(inputWidth);
    }
  });
  document.querySelector('#height').addEventListener("keypress", function (e) {  // Changing height of the card
    if (e.key === 'Enter') {
      var inputHeight = document.querySelector('#height').value;
      card.style.height = inputHeight + "px";
    }
  });
  document.querySelector('.top-suit').innerHTML = generateRandomSuit(); // We are changing the top suit
  document.querySelector('.bottom-suit').innerHTML = document.querySelector('.top-suit').innerHTML; // The bottom suit should be the same
  document.querySelector('.number').innerHTML = generateRandomNumber(); // Changing the number
  let counter = 10;
  setInterval(function(){
    document.querySelector('#timer').innerHTML = counter;
    counter--;
    if (counter === 0) {
      window.location.reload();
    }
  }, 1000);
  // document.querySelector('#timer').innerHTML = countDown();
};

let generateRandomNumber = () => {                                  // This function generates a random number.
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let indexNum = Math.floor(Math.random()*numbers.length);
  return numbers[indexNum];
}

let generateRandomSuit = () => {                                    // This function generates a random suit and then picks the color of it in certain instances.
  let suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let indexSuit = Math.floor(Math.random()*suit.length);
  if (indexSuit === 2 || indexSuit === 3) {
    document.querySelector('.top-suit').style.color = "red";
    document.querySelector('.bottom-suit').style.color = "red";
  }
  return suit[indexSuit];
}