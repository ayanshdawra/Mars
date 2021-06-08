 canvas = document.getElementById("My_canvas");
 ctx = canvas.getContext("2d");
 rover_width = 100;
 rover_height = 90;

 rover_x = 10;
 rover_y = 10;

 background_image = "mars.jpg";
rover_image = "rover.png";
nasa_image_mars_array = ["mars.jpg","nasa_img_1.jpg","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg"];
random_number = Math.floor(Math.random()*5);
console.log(random_number);
background_image = nasa_image_mars_array[random_number];
console.log("background image="+background_image);


function add() {
    background_img = new Image();
    background_img.onload = uploadbackground;
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadrover;
    rover_img.src = rover_image;
}

function uploadbackground() {
ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
    }
    window.addEventListener("keydown", my_keydown);
    function my_keydown(e)
    {
        var key_pressed = e.keyCode;
        console.log(key_pressed);
        if (key_pressed == '38')
        {
            up();
            console.log("up");
        }
        if (key_pressed == '40')
        {
            down();
            console.log("down");
        }
        if (key_pressed == '37')
        {
            left();
            console.log("left");
        }
        if (key_pressed == '39')
        {
            right();
            console.log("right");
        }
    }
function up(){
    if (rover_y >= 0){
        rover_y=rover_y-10;
        console.log("when up pressed,"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if (rover_y <= 500){
        rover_y=rover_y+10;
        console.log("when up pressed,"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if (rover_x >= 0){
        rover_x=rover_x-10;
        console.log("when up pressed,"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if (rover_x <= 700){
        rover_x=rover_x+10;
        console.log("when up pressed,"+"x="+rover_x+"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}