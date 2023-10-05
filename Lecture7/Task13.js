class Register{
    listOfBrands;

    constructor(){
        this.listOfBrands=[];
    }

    addNewBrands(brName,model,cars){
        this.listOfBrands.push(new CarBrand(brName,model,cars));
    }

    toString(){
        this.listOfBrands.forEach(brand=>{
            console.log(`${brand.name}`);
            brand.listOfCarModels.forEach(model=>{
                console.log(`###${model.model} -> ${model.carsCount()}`)
            })
        });
    }
}

class CarModel{
    model;
    #numberOfCars;
    constructor(model,numberoOfProducedCars){
        this.model=model;
        this.#numberOfCars = numberoOfProducedCars;
    }

    addNewCars(carsCount){
        this.#numberOfCars+=carsCount;
    }

    carsCount(){
        return this.#numberOfCars;
    }
}

class CarBrand{
    name;
    listOfCarModels;

     constructor(name,carModel,producedCars){
        this.name=name;
        this.listOfCarModels=[new CarModel(carModel,producedCars)];
     }
}

function f(inputData){
    let brandRegister = new Register();
    inputData.forEach(input => {
        let brandInfo=input.split("|");
        let carBrand=brandInfo[0];
        let carModel=brandInfo[1];
        let carCount=brandInfo[2]

        if(brandRegister.listOfBrands.find(br=>br.name === carBrand)){
            if(brandRegister.listOfBrands.find(br=>br.name === carBrand).listOfCarModels.find(m=>m.name=== carModel)){
                brandRegister.listOfBrands.find(br=>br.name === carBrand).listOfCarModels.find(m=>m.name=== carModel).addNewCars(carCount);
            }

            brandRegister.listOfBrands.find(br=>br.name === carBrand).listOfCarModels.push(new CarModel(carModel,carCount))
        }
        else{
            brandRegister.addNewBrands(carBrand,carModel,carCount);
        }
    });

    brandRegister.toString();
}

const data=['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'];

f(data);