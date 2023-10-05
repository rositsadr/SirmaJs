function luggageCharges(weight, dimentions){
    let message;
    let total =0;
    const min = 158;
    let chargesCount=0;

    if (weight>50){
        total +=100;
        message="Overweight";
        chargesCount++;
    }

    chargesCount++;

    if (dimentions>min && dimentions<(min+21)){
        total+=50;
        if (message!= null){
            message +=" + Slightly oversize";
        }
        else{
            message = "Slightly oversize";
        }
    }
    if (dimentions>(min+20) && dimentions<(min+51)){
        total+=100;
        if (message!= null){
            message +=" + Oversize";
        }
        else{
            message = "Oversize";
        }
    }
    else if (dimentions > (min +50)){
        total+=200;
        if (message!= null){
            message +=" + Very oversize";
        }
        else{
            message = "Very oversize";
        }
    }
    else{
        chargesCount--;
    }

    if (chargesCount==2)
    {
        total+=50;
        message+=" + Handling";
    }

    if (message!= null){
        console.log(`$${total} (${message})`);
    }
    else{
        console.log(`${total}`);
    }
}

luggageCharges(52,160);
luggageCharges(48,180);
luggageCharges(55,190);
luggageCharges(49,157);