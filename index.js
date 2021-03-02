//Change the placement of my event.preventDefault 

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#rollthedice");
  let historyRoll;

  let numClicks = 0;

  button.addEventListener("click", (event) => {
    event.preventDefault();
    numClicks++;
    const diceList = [
      { dice: "&#9856", value: 1 },
      { dice: "&#9857", value: 2 },
      { dice: "&#9858", value: 3 },
      { dice: "&#9859", value: 4 },
      { dice: "&#9860", value: 5 },
      { dice: "&#9861", value: 6 },
    ];

    const numOfDice = Number(document.querySelector("#num-of-dice").value);
    const result = document.querySelector("#dice-para");
    const sumOfDice = document.querySelector("#sum-para");
    const history = document.querySelector("div > ul");

    
    let currentRoll = [];
    let currentSum = 0;

    for (let i = 0; i < numOfDice; i++) {
      let randomNum = Math.floor(Math.random() * Math.floor(diceList.length - 1));
      let dice = diceList[randomNum]["dice"];
      currentRoll.push(dice);
      currentSum += diceList[randomNum]["value"];
    }

    result.innerHTML = currentRoll.join("");
    sumOfDice.textContent = "Sum = " + currentSum;

    if (numClicks === 0) {
      newList = document.createElement("li").style.visibility = "hidden";
      newList.innerHTML = `${historyRoll} = ${historySum}`;
      history.appendChild(newList);
    } else if (numClicks > 1) {
      newList = document.createElement("li");
      newList.innerHTML = `${historyRoll} = ${historySum}`;
      history.appendChild(newList);
    }

    historyRoll = currentRoll.join("");
    historySum = currentSum;
  });
});
