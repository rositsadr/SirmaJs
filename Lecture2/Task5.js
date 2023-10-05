function figureArea(figure, side1, side2){
    let area = 0;
    
    switch (figure){
        case "square":
            area = side1*side1;
            break;
        case "rectangle":
            area = side1*side2;
            break;
        case "circle":
            area = Math.PI*side1*side1;
            break;
        case "triangle":
            area = (side1*side2)/2;
            break;
        default:
            console.log("Different figure");
            return;
    }

    console.log(area.toFixed(2));
}

figureArea("square", 5);
figureArea("rectangle", 10, 3.5);
figureArea("triangle", 4.5, 20);
figureArea("circle", 10);
figureArea("trapezoid", 10,4);