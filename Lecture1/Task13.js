function paint(yellow){
    let red = yellow/4;
    let white = 2*yellow;
    let total = yellow+red+white;

    console.log(" Red: "+ red, "\n","Yellow: "+ yellow, "\n", "White: "+white, "\n","Total: "+total);
}

paint(10);
paint(17);
paint(42);
