import p5 from "../public/p5.js";


const s = ( p ) => {

  var i = 1;
 
 

  var amount_iterations = 5;

  var addict = 0.01;
  var size = 220;

  var mod_of_size = true;

  let stop_point = 300;

  
  

  p.setup = function() {
    
    p.createCanvas(700, 700);
    

    p.background(50);

   // p.img=p.loadImage('red_eye.png');
 p.img=p.loadImage('red_eye.png');
 p.img2=p.loadImage('eye_cool.png');
  };



//////////////////////////////////////////




p.draw = function() {
    
  let eyesArray = [];
 // let eyesArray2 = [];


    for (let j =0; j<=amount_iterations; j++){
      eyesArray.push(new Eye( i, j, addict, 300, 300, ((j+(1+j/2))*20), p.millis() / 1000+i*j, 10, p.img));
    };

 
   p.background(50);

  for (let j =amount_iterations; j>0; j--){
      
      eyesArray[j].display();
  
  };



    if (mod_of_size){ 
      if (i<(10)){
       i=i+addict;
      } else{
       mod_of_size = false;
      }    
     } 
     
     if(!mod_of_size)
     {
       if(i>(0)){
       i=i-addict;
       
       } else{
         mod_of_size=true;
         
       } 

       


   
   }

};

  class Eye {
    constructor (iterator,arr_j,addictor, x_p, y_p, size_param, angle1_p, angle2_p, image_param){
     this.i = iterator;
     this.j = arr_j;
     this.addict = addictor;
     this.x = x_p;
     this.y = y_p;
     this.angle1= angle1_p;
     this.angle2= angle2_p;
     this.size = size_param;
    // var p.img_t=p.loadImage(image_param);
     this.image = image_param ; 
   }
     
     display(){
       
     //   p.rotate(p.PI/this.i);
     
       p.imageMode(p.CENTER);
       
       p.translate(p5.Vector.fromAngle(this.angle1,this.angle2 ));
       
       p.image(this.image,  this.x,  this.y, this.size, this.size );
       //p.pop();
       //p.translate.pop();
       
       
     };
   };


};

let myp5 = new p5(s);