class CalculationStraegy{
    calculate( a,b){
        throw "should be overridden";

    }
}

class AdditionStrategy extends CalculationStraegy{
    calculate( a,b){
        return a + b;

    }
}

class SubtractStrategy extends CalculationStraegy{
    calculate( a,b){
        return a - b;

    }
}

class MultiplicationStrategy extends CalculationStraegy{
    calculate( a,b){
        return a * b;

    }
}

class DivisionStrategy extends CalculationStraegy{
    calculate( a,b){
      
        if ( b === 0){
            return "Error: Division by Zero";
        }
        return a / b;

    }
}

class Calculator{
    constructor(strategy){
        this.strategy = strategy;
    }



    setStrategy(strategy){
        this.strategy = strategy;
    }

    executeCalculation (a,b){
        return this.strategy.calculate(a,b);
    }
}


const addition = new AdditionStrategy();
const subtraction = new SubtractStrategy();
const multiplication = new MultiplicationStrategy();
const division = new DivisionStrategy();

const calculator = new Calculator();
