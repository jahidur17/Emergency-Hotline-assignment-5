
function incrementLoveCount() {
  const loveCount = document.querySelector(".love-count");
  let count = parseInt(loveCount.textContent);
  count++;
  loveCount.textContent = count;
}
const hearts = document.querySelectorAll(".card-heart");
for (const heart of hearts) {
  heart.addEventListener("click", incrementLoveCount);
}

let coins = 100;
const coinContainer = document.getElementById("coin-box");
const historyBox = document.getElementById("history");
const callButtons = document.querySelectorAll(".callBtn");
for (const callBtn of callButtons) {
  callBtn.addEventListener("click", () => {
    if (coins >= 20) {
      coins = coins - 20;
      coinContainer.textContent = `Coins: ${coins}`;
      alert(`Calling ${callBtn.textContent}...20 coins deducted!`);
      if (historyBox.textContent === "No calls yet") {
        historyBox.textContent = "";
      }
      historyBox.innerHTML += `<p>Called: ${callBtn.textContent}</p>`;
    } else {
      alert("Not enough coins to make a call!");
    }
  });
}
