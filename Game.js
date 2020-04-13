class Game
{
    constructor()
{
    
}

updateState(state){
        gs=state;
}

createGameButton()
{
    this.Trexbutton=createButton('Play The Trex Running Game');
    this.PPbutton=createButton('Play The Ping Pong Game');
    this.Lucidiumbutton=createButton('Play The Lucidium Game');
    form.title.hide();
    this.greeting1=createElement('h2');
    this.greeting2=createElement('h3');
    this.displayGames();
}
displayGames()
{
    background(bg2);
    this.greeting1.html("Hi "+geekName);
    this.greeting1.position(330,50);

    this.greeting2.html("Which game would you like to play before starting your Javatastic journey?")
    this.greeting2.position(100,100);
    this.Trexbutton.position(150,235);

    this.PPbutton.position(350,235);

    this.Lucidiumbutton.position(525,235);


    this.Lucidiumbutton.mousePressed(()=>{
            
            
        this.greeting1.hide();
        this.greeting2.hide();
        
        gs=2;
        game.updateState(gs);

      });


      this.Trexbutton.mousePressed(()=>{
            
            
        this.greeting1.hide();
        this.greeting2.hide();
        
        
        
        gs=3;
        game.updateState(gs);

      });

      this.PPbutton.mousePressed(()=>{
            
            
        this.greeting1.hide();
        this.greeting2.hide();
        
       
        
        gs=4;
        game.updateState(gs);

      });



}



}
