var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Marta";

myCar.drive = function(){ console.log("now driving");};

myCar.drive(); //We call the method here by using ();

// Na skroty jak ponizej

var myCar2 = {
    
    maxSpeed: 70, 
    driver: "Marta", 
    drive: function(){ console.log("now driving");
} 

};