canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_array = ["rover_1 mass img .jpeg", "rover_2 mass img .jpeg", "mars_3 img .jpeg", "mars_4 img .jpeg"];
random_number = Math.floor(Math.random() * 4);

rover_width = 75;
rover_height = 81;

rover_x = 10;
rover_y = 14;

background_image = nasa_array[random_number];
console.log(background_image);
rover_image = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;   

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }

    if(keyPressed=='40'){
        down();
        console.log("down");
    }

    if(keyPressed=='37'){
        left();
        console.log("left");
    }

    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}

function up(){
    if (rover_y >=0) {
      rover_y = rover_y - 10;
      console.log("when up arrow key is pressed,X = "+rover_x + "and Y = " + rover_y);
      uploadBackground(); 
      uploadRover();
    }
}

function down(){
    if (rover_y <=400) {
      rover_y = rover_y + 10;
      console.log("when down arrow key is pressed,X = "+rover_x + "and Y = " + rover_y);
      uploadBackground(); 
      uploadRover();   
    }
}

function left(){
    if (rover_x >=0) {
      rover_x = rover_x - 10;
      console.log("when left arrow key is pressed,X = "+rover_x + "and Y = " + rover_y);
      uploadBackground(); 
      uploadRover();   
    }
}

function right(){
    if (rover_x <=799) {
      rover_x = rover_x + 10;
      console.log("when right arrow key is pressed,X = "+rover_x + "and Y = " + rover_x);
      uploadBackground(); 
      uploadRover();   
    }
}