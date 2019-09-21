var Car = function(predk, driver){

    this.maxSpeed = predk * 2;
    this.driver = driver;
    this.kolor = "czarny";

    this.jakiJestKolorAuta = function() {
        console.log("kolor auta " + this.driver + " to: " + this.kolor);
    };

    this.przemalujAuto = function(nakolor) {
        this.kolor = nakolor;
    };

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

myCar.drive(30,5);
myCar3.logDriver();
myCar3.jakiJestKolorAuta();
myCar3.przemalujAuto("bialy");