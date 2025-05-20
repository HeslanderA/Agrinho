let sementes = [];
let tempoCrescimento = 0;
let plantando = false;

function setup() {
  createCanvas(600, 400);
  background(150, 200, 255);
  textSize(16);
}

function draw() {
  // Desenhando o "campo"
  fill(34, 139, 34);
  rect(0, 300, width, height - 300);
  
  // Desenhando as sementes
  for (let i = 0; i < sementes.length; i++) {
    sementes[i].mostrar();
    sementes[i].crescer();
  }
  
  // Instrução para o usuário
  fill(0);
  text("Clique para plantar uma semente", 20, 30);
  
  // Contando o tempo para o crescimento das sementes
  if (plantando) {
    tempoCrescimento++;
    if (tempoCrescimento > 100) {
      plantando = false;
      tempoCrescimento = 0;
    }
  }
}

function mousePressed() {
  if (mouseY > 300) {
    // Plantando uma nova semente onde o clique ocorre
    let novaSemente = new Semente(mouseX, mouseY);
    sementes.push(novaSemente);
    plantando = true;
  }
}

class Semente {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamanho = 10;  // Tamanho inicial da semente
  }
  
  mostrar() {
    fill(139, 69, 19); // Cor de semente
    noStroke();
    ellipse(this.x, this.y, this.tamanho, this.tamanho);
  }

  crescer() {
    if (this.tamanho < 30) {
      this.tamanho += 0.1;
    }
  }
}