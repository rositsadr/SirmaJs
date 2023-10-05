function game(tool1, tool2){
    let message;

    if (tool1 == "sword"){
        if(tool2 == "shield"){
            message = "Take the path to the castle.";
        }
        else{
            message = "Take the path to the forest.";
        }
    }
    else if (tool1 == "map"){
        if (tool2 == "coins"){
            message = "Go to the town.";
        }
        else{
            message = "Camp at the current spot and prepare for the next day.";
        }
    }
    else{
        message = "Wander aimlessly.";
    }

    console.log(message);
}

game("sword", "shield");
game("map","coins");
game("torch", "flower");