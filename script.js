
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

const callButtons = document.querySelectorAll(".call-btn");
for (const button of callButtons) {
  button.addEventListener("click", function () {
    const card = button.closest(".min-h-[360px]");
    if (!card) return;
    const title = card.querySelector("span.text-[16px]").innerText;
    alert("You clicked: " + );
  });
}