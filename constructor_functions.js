var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function (){
        console.log("driver name is" + this.driver);
    };

    }

var myCar = new Car(70, "Marta");
var myCar2 = new Car(40, "New Boris");
var myCar3 = new Car(50, "James Dean");
var myCar4 = new Car(95, "Tilda");

myCar.driver(30,5);
myCar3.dlogDriver();