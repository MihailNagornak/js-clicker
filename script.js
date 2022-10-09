let clickCounter = document.getElementById("ckick");
let clickBtn = document.getElementById("click_btn");
let score = document.getElementById("score");
let restartBtn = document.getElementById("restart");

let upgradeBtn1 = document.getElementById("upgrade1");
let upgradeBtn2 = document.getElementById("upgrade2");
let upgradeBtn3 = document.getElementById("upgrade3");
let upgradeBtn4 = document.getElementById("upgrade4");
let upgradeBtn5 = document.getElementById("upgrade5");

if (localStorage.getItem("count")) {
  counter = parseInt(localStorage.getItem("count"));
  clickCounter.textContent = "Балов: " + counter;
} else {
  counter = 0;
}

if (localStorage.getItem("upgrade")) {
  upgrader = parseInt(localStorage.getItem("upgrade"));
  clickCounter.textContent = "Балов: " + counter;
} else {
  upgrader = 1;
}

if (localStorage.getItem("buyUpgrade1")) {
  buyUp1 = parseInt(localStorage.getItem("buyUpgrade1"));
  score.textContent = "балов за клик " + upgrader;
  upgradeBtn1.textContent = "buy upgrade: (+1) цена: " + buyUp1;
} else {
  buyUp1 = 100;
}

if (localStorage.getItem("buyUpgrade2")) {
  buyUp2 = parseInt(localStorage.getItem("buyUpgrade2"));
  score.textContent = "балов за клик " + upgrader;
  upgradeBtn2.textContent = "buy upgrade: (+2) цена: " + buyUp2;
} else {
  buyUp2 = 150;
}

if (localStorage.getItem("buyUpgrade3")) {
  buyUp3 = parseInt(localStorage.getItem("buyUpgrade3"));
  score.textContent = "балов за клик " + upgrader;
  upgradeBtn3.textContent = "buy upgrade: (+5) цена: " + buyUp3;
} else {
  buyUp3 = 300;
}

if (localStorage.getItem("buyUpgrade4")) {
  buyUp4 = parseInt(localStorage.getItem("buyUpgrade4"));
  score.textContent = "балов за клик " + upgrader;
  upgradeBtn4.textContent = "buy upgrade: (+10) цена: " + buyUp4;
} else {
  buyUp4 = 500;
}

if (localStorage.getItem("buyUpgrade5")) {
  buyUp5 = parseInt(localStorage.getItem("buyUpgrade5"));
  score.textContent = "балов за клик " + upgrader;
  upgradeBtn5.textContent = "buy upgrade: (+25) цена: " + buyUp5;
} else {
  buyUp5 = 1300;
}
restartBtn.addEventListener("click", restartGame);

clickBtn.addEventListener("click", counterWrapper);

upgradeBtn1.addEventListener("mouseup", up1);
upgradeBtn2.addEventListener("mouseup", up2);
upgradeBtn3.addEventListener("mouseup", up3);
upgradeBtn4.addEventListener("mouseup", up4);
upgradeBtn5.addEventListener("mouseup", up5);

function restartGame() {
  localStorage.clear();
  location.reload();
}

function storageWrapper() {
  localStorage.setItem("count", counter);
  localStorage.setItem("upgrade", upgrader);
  localStorage.setItem("buyUpgrade1", buyUp1);
  localStorage.setItem("buyUpgrade2", buyUp2);
  localStorage.setItem("buyUpgrade3", buyUp3);
  localStorage.setItem("buyUpgrade4", buyUp4);
  localStorage.setItem("buyUpgrade5", buyUp5);
}

function counterWrapper() {
  counter = counter + upgrader;
  clickCounter.textContent = "Балов: " + counter;
  storageWrapper();
}

function up1() {
  if (counter >= buyUp1) {
    counter = counter - buyUp1;
    upgrader++;
    buyUp1 = Math.floor(buyUp1 * 1.2);
    score.textContent = "балов за клик " + upgrader;
    clickCounter.textContent = "Балов: " + counter;
    upgradeBtn1.textContent = "buy upgrade: (+1) цена: " + buyUp1;
    storageWrapper();
  }
}

function up2() {
  if (counter >= buyUp2) {
    counter = counter - buyUp2;
    upgrader = upgrader + 2;
    buyUp2 = Math.floor(buyUp2 * 1.3);
    score.textContent = "балов за клик " + upgrader;
    clickCounter.textContent = "Балов: " + counter;
    upgradeBtn2.textContent = "buy upgrade: (+2) цена: " + buyUp2;
    storageWrapper();
  }
}

function up3() {
  if (counter >= buyUp3) {
    counter = counter - buyUp3;
    upgrader = upgrader + 5;
    buyUp3 = Math.floor(buyUp3 * 1.4);
    score.textContent = "балов за клик " + upgrader;
    clickCounter.textContent = "Балов: " + counter;
    upgradeBtn3.textContent = "buy upgrade: (+5) цена: " + buyUp3;
    storageWrapper();
  }
}

function up4() {
  if (counter >= buyUp4) {
    counter = counter - buyUp4;
    upgrader = upgrader + 10;
    buyUp4 = Math.floor(buyUp4 * 1.5);
    score.textContent = "балов за клик " + upgrader;
    clickCounter.textContent = "Балов: " + counter;
    upgradeBtn4.textContent = "buy upgrade: (+10) цена: " + buyUp4;
    storageWrapper();
  }
}

function up5() {
  if (counter >= buyUp5) {
    counter = counter - buyUp5;
    upgrader = upgrader + 25;
    buyUp5 = Math.floor(buyUp5 * 1.6);
    score.textContent = "балов за клик " + upgrader;
    clickCounter.textContent = "Балов: " + counter;
    upgradeBtn5.textContent = "buy upgrade: (+25) цена: " + buyUp5;
    storageWrapper();
  }
}
