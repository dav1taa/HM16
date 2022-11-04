

function car (mark, model, year){
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        document.write("მარკა" + this.mark +  "მოდელი" + this.model + "released in" + this.year );

    }
}


function person (name,age) {
    this.name = name;
    this.age = age;
    this.driveCar = function (car) {
        document.write (" dadis am manqanit"+ this.cars)
    }
    this.displayInfo = function (){
        document.write ("saxeli" + this.name + "asaki" + this.age)
    }


}


var tom = new person ("tom",26,"tesla");
tom.displayInfo()

var tesla = new car ("tesla", "model s", 2008);
tom.driveCar(tesla);