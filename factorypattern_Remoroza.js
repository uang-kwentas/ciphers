function VehicleFactory() {
    this.createVehicle = function(type, name) {
        switch (type) {
            case "Car":
                return new Car(name);
            case "Truck":
                return new Truck(name);
            default:
                return null;
        }
    };
}

function Car(name) {
    this.name = name;
    this.type = "Car";
}

function Truck(name) {
    this.name = name;
    this.type = "Truck";
}

const factory = new VehicleFactory(); 