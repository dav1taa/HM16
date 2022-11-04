

function Car (Mark, Model, Year){
    this.mark = Mark;
    this.model = Model;
    this.year = Year;
    this.getCarInfo = function() {
        document.write("მარკა" + this.Mark +  "მოდელი" + this.Model + "released in" + this.year );

    }
}


function Person (Name,Age) {
    this.name = Name;
    this.age = Age;
    this.driveCar = function (Car) {
        document.write ("მას ყავს" + " " + Car.mark + " " + Car.model + ", " + "რომელიც გამოშვებულია" + " " + Car.year + " წელს.")
    }
    this.displayInfo = function (){
        document.write (this.name +  " " + this.age + " წლის," )
    }


}


var tom = new Person ("ტომს ყავს მანქანა და არის ",24);
tom.displayInfo()

var tesla = new Car ("Tesla", "Model S", 2015);
tom.driveCar(tesla);
