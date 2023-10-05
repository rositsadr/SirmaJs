function potion(ing1, ing2){
    let typeOfPotion;

    if (ing1 ==="herbs"){
        if(ing2 === "water"){
            typeOfPotion = "Health potion";
        }
        else if (ing2 === "oil"){
            typeOfPotion = "Stealth potion";
        }
        else{
            typeOfPotion = "Minor stamina potion";
        }
    }
    else if (ing1 === "berries"){
        if(ing2 === "suger"){
            typeOfPotion = "Speed potion";
        }
        else{
            typeOfPotion = "Minor energy potion";
        }
    }
    else{
        typeOfPotion = "Can't brew any potion.";
    }

    console.log(typeOfPotion);
}

potion("herbs", "water");
potion("herbs", "oil");
potion("herbs", "banana");
potion("berries", "suger");
potion("berries", "banana");
potion("herbs", "suger");