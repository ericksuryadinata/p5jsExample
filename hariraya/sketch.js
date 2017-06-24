var fireworks = [];
var gravity, raya, launch, channel, img1, img2, destroy;

function preload() {
	channel = loadFont("fonts/channel/Channel_Slanted2.ttf");
	img1 = loadImage("images/ketupat-lebaran.png");
	img2 = loadImage("images/ketupat1.png");
	raya = loadSound("sounds/all.mp3");
	launch = loadSound("sounds/launch.mp3");
	destroy = loadSound("sounds/fusi.mp3");
	destroy1 = loadSound("sounds/loud.mp3");
}

function setup () {
	createCanvas(1360,760);
	gravity = createVector(0,0.1);
	stroke(255);
	strokeWeight(4);
	t = new tulisan();
	raya.loop();
	raya.setVolume(0.4);
	launch.loop();
	launch.setVolume(0.01);
	destroy.loop();
	destroy.setVolume(1.0);
	destroy1.loop();
	destroy1.setVolume(1.0);
}

function draw(){
	noStroke();
	fill(255);
	t.show();
	image(img1, 5, -60,img1.width/4,img1.height/4);
	image(img2,1100,450);
	playFire();
	
}

function playFire() {
	colorMode(RGB);
	background(0,0,0,50);
	if(random(1) < 0.02){
		fireworks.push(new Firework());
	}
	
	for(var i=fireworks.length-1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();
		if(fireworks[i].done()){
			fireworks.splice(i,1);
		}
	}
}

function tulisan() {
	this.ucapan = "S E L A M A T    H A R I    R A Y A    I D U L    F I T R I   1 4 3 8 H";
	this.maaf = "M O H O N    M A A F    L A H I R    D A N    B A T I N ";
	//var ucapan = "H A P P Y   E I D   M U B A R A K   
	//var maaf = "T O   A L L   M U S L I M S   A R O U N D   T H E   W O R L D .";
	//var englishQuotes = "M A Y   A L L A H   B L E S S I N G S   B E   W I T H   Y O U   T O D A Y ,   T O M O R R O W   A N D   A L W A Y S .   E N J O Y   T H E S E   A M A Z I N G   D A Y S   A N D   R E M E M B E R   T H O S E   W H O   N E E D   O U R   H E L P ";
	this.quoteIndonesia = '" S E M O G A   S P I R I T   R A M A D A N';
	this.quoteIndonesia1 = 'T E R U S   B E R S A M A   K I T A  ';
	this.quoteIndonesia2 = 'D I  S E B E L A S   B U L A N   Y A N G   A K A N   D A T A N G';
	this.quoteIndonesia3 = 'D A N   D I P E R T E M U K A N   L A G I ';
	this.quoteIndonesia4 = 'D E N G A N   R A M A D A N   B E R I K U T N Y A "';
	this.specialThanks = "special thanks to:";
	this.specialThanks1 = '" p5.js and daniel shiffman"';
	this.posU = 0, this.posM = 0, this.posQ1 = 0, this.posQ2 = 0, this.posQ3 = 0,this.posQ4 = 0,this.posQ5 = 0, this.posQ6=0,this.posQ7=0;
	this.timer = 0;
	this.posY=350;
	this.control = false;
	this.fr=3;
	this.play = function() {
		if(frameCount % this.fr ==0){
			this.timer+=0.1;
			//console.log(timer);
			if(this.timer>=50){
				textSize(20);
				textAlign(LEFT);
				textFont(channel);
				//fill(255);
				text(this.ucapan.substring(0, this.posU+1),170,100);
				this.posU+=2;
				if(this.posU >= this.ucapan.length){
					text(this.maaf.substring(0, this.posM+1),180,170);
					this.posM+=2;
				}
				if(this.posM >= this.maaf.length){
					textSize(12);
					textAlign(CENTER);
					text(this.quoteIndonesia.substring(0, this.posQ1+1),width/2,this.posY);
					this.posQ1+=2;
				}
				if(this.posQ1 >= this.quoteIndonesia.length){
					text(this.quoteIndonesia1.substring(0, this.posQ2+1),width/2,this.posY+50);
					this.posQ2+=2;
				}
				if(this.posQ2 >= this.quoteIndonesia1.length){
					text(this.quoteIndonesia2.substring(0, this.posQ3+1),width/2,this.posY+100);
					this.posQ3+=2;
				}
				if(this.posQ3 >= this.quoteIndonesia2.length){
					text(this.quoteIndonesia3.substring(0, this.posQ4+1),width/2,this.posY+150);
					this.posQ4+=2;
				}
				if(this.posQ4 >= this.quoteIndonesia3.length){
					text(this.quoteIndonesia4.substring(0, this.posQ5+1),width/2,this.posY+200);
					this.posQ5+=2;
				}
				if(this.posQ5 >= this.quoteIndonesia4.length){
					textAlign(LEFT);
					textSize(8);
					textFont("times new romans");
					text(this.specialThanks.substring(0, this.posQ6+1),10,this.posY+350);
					this.posQ6+=1;
				}
				if(this.posQ6 >= this.specialThanks.length){
					text(this.specialThanks1.substring(0, this.posQ7+1),10,this.posY+370);
					this.posQ7+=1;
				}
				if(this.posQ7 >= this.specialThanks1.length){
					this.control = true;
					this.fr=1;
				}
			}
		}
		
	}

	this.show = function() {
		if(this.control == true){
			setTimeout(this.play(),100);
		}else{
			this.play();
		}
	}
}