// Defining our enemy, position and 
//it's functions to be used in the game
//namely updating and redering functions.


var Enemy = function(x,y,speed) {
      this.sprite = 'images/enemy-bug.png';
      this.pos=[x,y];
      this.hitbox=[50,77];
      this.speed=speed;
};

//Updating the enemy position after each steps.
Enemy.prototype.update = function(dt) {
    this.pos[0]=this.pos[0]+this.speed * dt;
    if(this .pos[0] > ctx.canvas.width){
        this.pos[0]= -100;
    }
   
};

// Enabling the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.pos[0], this.pos[1]);
};

//Defining the hero's position, image and its's function 
//namely, render and updating
var Player = function(x,y){
    this.sprite ='images/char-pink-girl.png';
    this.pos =[x,y];
    this.size =[171,101];
    this.hitbox=[50,60];
};
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.pos[0], this.pos[1]);
    ctx.font = "400 30px calibre";
    ctx.fillText("Score: " + score, 0, 50);
};
Player.prototype.update = function(dt){
   if (this.pos[1] <= 40) {
        this.pos = [200, 430];
        score+=10;
        ctx.canvas.width = ctx.canvas.width;
    }

    if (this.pos[0] < 0) {
        this.pos[0] = 0;
    }   
    
    else if (this.pos[0] > ctx.canvas.width -  this.size[1]) {
        this.pos[0] = ctx.canvas.width - this.size[1];
    }

    if (this.pos[1] < 0) {
        this.pos[1] = 0; 
    }

    else if (this.pos[1] > ctx.canvas.height - this.size[0]) {
        this.pos[1] = ctx.canvas.height - this.size[0];
    }
};

Player.prototype.handleInput = function(keys) {
    switch(keys) {
        case 'left' :
            this.pos[0] = this.pos[0] - 40;
            break;
            
        case 'right' :
            this.pos[0] = this.pos[0] + 40;
            break;
            
        case 'down' :
            this.pos[1] = this.pos[1] + 40;
            break;
            
        case 'up' :
            this.pos[1] = this.pos[1] - 40;
            break;
    }
};
var Reward = function(x,y) {
    this.sprite = 'images/Gem Blue.png';
    this.pos = [x,y];
    this.hitbox = [30,70];
};

Reward.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.pos[0], this.pos[1]);
};




var allRewards =[new Reward(80,240), new Reward(280, 350), new Reward (380, 270)];
var allEnemies= [new Enemy(-100, 300,250), new Enemy(-300, 380, 150), new Enemy(-500, 220,350), new Enemy (-700,130,420) ];
var player = new Player(215, 460);
var score =0;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
