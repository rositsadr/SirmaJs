function game2(timeOfDay,environment,items){
    let message;

    if (timeOfDay ==="day"){
        if (environment === "forest"){
            if (items === "knife"){
                message = "Hunt for food.";
            }
            else if (items === "container"){
                message = "Collect berries.";
            }
            else{
                message = "Explore";
            }
        }
        else {
            if (items === "hat"){
                message = "Search for water.";
            }
            else{
                message = "Find shade.";
            }
        }
    }
    else{
        if (environment === "forest"){
            if (items === "firestarter"){
                message = "Make a campfire.";
            }
            else{
                message = "Climb a tree for safety.";
            }
        }
        else {
            if (items === "blanket"){
                message = "Sleep.";
            }
            else{
                message = "Keep moving to stay warm.";
            }
        }
    }

    console.log(message);
}

game2("day","forest","knife");
game2("day", "forest", "container");
game2("night", "forest", "firestarter");
game2("night","desert","blanket");
game2("day", "desert", "hat");
game2("night", "desert", "sword");