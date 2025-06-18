let milhos = [];
let score = 0;
let gameDuration = 30; // tempo aumentado para 30 segundos
let startTime;
let gameOver = false;

function setup() {
  createCanvas(800, 400);
  textSize(20);
  textAlign(LEFT, TOP);
  startTime = millis();
}

function draw() {
  background(135, 206, 235); // céu azul

  drawGround();
  drawMilhos();
  drawScore();
  drawTimer();

  if (gameOver) {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("⏰ Tempo esgotado!\nMilhos plantados: " + score, width / 2, height / 2 - 100);
    noLoop(); // para o jogo
  }
}

function drawGround() {
  fill(60, 179, 113); // chão verde
  rect(0, height / 2, width, height / 2);
}

function drawMilhos() {
  for (let milho of milhos) {
    drawMilhoBonito(milho.x, milho.y);
  }
}

function drawMilhoBonito(x, y) {
  push();
  translate(x, y);
  
  // Talo
  stroke(34, 139, 34);
  strokeWeight(4);
  line(0, 0, 0, -40);

  // Folhas laterais menores
  noStroke();
  fill(34, 139, 34);
  ellipse(-5, -25, 12, 25);
  ellipse(5, -25, 12, 25);

  // Espiga
  fill(255, 223, 0); // amarelo milho
  ellipse(0, -50, 20, 35);
  
  // Grãos do milho
  fill(255, 204, 0);
  ellipse(-5, -55, 4, 4);
  ellipse(0, -55, 4, 4);
  ellipse(5, -55, 4, 4);
  ellipse(-5, -48, 4, 4);
  ellipse(0, -48, 4, 4);
  ellipse(5, -48, 4, 4);

  pop();
}

function drawScore() {
  fill(0);
  text("🌽 Milhos plantados: " + score, 10, 10);
}

function drawTimer() {
  let elapsed = (millis() - startTime) / 1000;
  let timeLeft = max(0, gameDuration - floor(elapsed));

  fill(0);
  text("⏳ Tempo restante: " + timeLeft + "s", 10, 40);

  if (timeLeft <= 0 && !gameOver) {
    gameOver = true;
  }
}

function mousePressed() {
  if (!gameOver && mouseY > height / 2) {
    milhos.push({ x: mouseX, y: mouseY });
    score++;
  }
}
