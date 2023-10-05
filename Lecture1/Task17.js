function distance(firstCarSpeed, secondCarSpeed){
    const firstCarAheadTime = 2;
    const timeDriven = 3;

    let firstCarTime = firstCarAheadTime+timeDriven;
    let firstCarDistance = firstCarSpeed*firstCarTime;
    let secondCarDistance = secondCarSpeed*timeDriven;
    let distanceBetweenCars =Math.abs(firstCarDistance - secondCarDistance);

    console.log(distanceBetweenCars);
}

distance(81,120);
distance(100,90);
distance(75,90);