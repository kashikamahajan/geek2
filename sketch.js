var database;
var form
var geek;
var allGeeks;
var geekName="";
var bg,bg2;
var playerCount;
var gs=0;;
var game;


function preload()
{
bg=loadImage("bg.jpg");
bg2=loadImage("bg2.jpg");
}
function setup() {
  createCanvas(800,400);
  database=firebase.database();
  game=new Game();
  
  start();
  
}
async function start()
{
  geek = new Geek();
  var playerCountRef = await database.ref('PlayerCount').once('value');
  if(playerCountRef.exists()){
    playerCount = playerCountRef.val();
    geek.getCount();
  }
  form = new Form()
  form.display();
}
function draw() {
  background(bg);
  if(gs===1)
  {
game.createGameButton();
  }

  if(gs===2)
  {
    window.open("https://kashikamahajan.github.io/Lucidium/");
  }

  if(gs===3)
  {
    window.open("https://studio.code.org/projects/gamelab/onIIKvJVMx8Oxkdnjlh1x6R7ZBREtM5PMPCpo0UNhOo");
  }
 if(gs===4)
 {
  window.open("https://studio.code.org/projects/gamelab/i4LynOObV7UqmwJ89VpD_Mr0IjzpU3gyoNnauTV3_I0");
 }
  
}