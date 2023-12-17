const displayStart = () => {
  const root = document.querySelector("#root");

  const name = document.createElement("h1");
  name.id = "name";
  name.textContent = "Coin Burst";

  const score = document.createElement("h3");
  score.id = "score";
  score.textContent = "Score : 0";

  const playButton = document.createElement("button");
  playButton.className = "start-button";
  playButton.textContent = "Start Game";
  root.append(name, score, playButton);

  playButton.addEventListener("click", () => {
    root.removeChild(playButton);
    play();
  });
};

function play() {
  const root = document.getElementById("root");
  let score = 0;

  function addCoin() {
    const coin = document.createElement("img");
    coin.src = "./Images/coin.gif";

    const width = window.innerWidth;
    const height = window.innerHeight;

    let top = Math.random() * height;
    let left = Math.random() * width;

    top = top > height - 105 ? height - 105 : top;
    left = left > width - 105 ? width - 105 : left;

    coin.style.width = "100px";
    coin.style.height = "100px";
    coin.style.position = "absolute";
    coin.style.top = top + "px";
    coin.style.left = left + "px";

    root.appendChild(coin);

    const timeout = setTimeout(() => {
      root.removeChild(coin);
    }, 5000);

    coin.addEventListener("mouseover", () => {
      score++;
      document.querySelector("#score").textContent = `Score: ${score}`;
      root.removeChild(coin);
      clearTimeout(timeout);
    });
  }

  function addBomb() {
    const bomb = document.createElement("img");
    bomb.src = "./Images/bomb.gif";

    const width = window.innerWidth;
    const height = window.innerHeight;

    let top = Math.random() * height;
    let left = Math.random() * width;

    top = top > height - 105 ? height - 105 : top;
    left = left > width - 105 ? width - 105 : left;

    bomb.style.width = "100px";
    bomb.style.height = "100px";
    bomb.style.position = "absolute";
    bomb.style.top = top + "px";
    bomb.style.left = left + "px";

    root.appendChild(bomb);

    const timeout = setTimeout(() => {
      root.removeChild(bomb);
    }, 2000);

    bomb.addEventListener("mouseover", () => {
      score++;
      document.querySelector("#score").textContent = `Final Score: ${score}`;

      root.removeChild(bomb);
      clearTimeout(timeout);

      clearInterval(insertCoin);
      clearInterval(insertBomb);

      root.replaceChildren();
      displayStart();
    });
  }

  const insertCoin = setInterval(addCoin, 1000);
  const insertBomb = setInterval(addBomb, 1000);
}

displayStart();
