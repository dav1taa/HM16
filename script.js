

function car (mark, model, year){
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.getCarInfo = function() {
        document.write("მარკა" + this.mark +  "მოდელი" + this.model + "released in" + this.year )

    }
}


function person (name,age,cars) {
    this.name = name;
    this.age = age;
    this.cars = car;
    this.getPersonCar = function 

}


var tom = new person ("tom",26,)