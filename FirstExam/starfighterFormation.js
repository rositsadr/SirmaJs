function starfighterFormation(ids,listOfCommands){

    for(let i=0; i<listOfCommands.length;i++) {
        let toDo=listOfCommands[i].split(" ");

        if(toDo[0]==="center"){
            let midle=Math.floor(ids.length/2);
            if(ids.length%2){
                console.log(ids[midle]);
            }
            else{
                console.log(`${ids[midle-1]} ${ids[midle]}`);
            }
        }
        else{
            if(toDo[0]==="destroy"){
                let index=toDo[1];
                if(index>=0 && index<ids.length){
                    ids.splice(index,1);
                    console.log(ids.join(" "));
                }
            }
            else if(toDo[0]==="swap"){
                let index1=toDo[1];
                let index2=toDo[2];
                if((index1>=0 && index1<ids.length) && (index2>=0 && index2<ids.length)&& (index1!=index2)){
                    let helper = ids[index1];
                    ids[index1]=ids[index2];
                    ids[index2]=helper;
                    console.log(ids.join(" "));
                }
            }
            else if(toDo[0]==="add"){
                let newId=parseInt(toDo[1]);
                ids.push(newId);     
                console.log(ids.join(" "));      
            }
            else if(toDo[0]==="insert"){
                let newId=parseInt(toDo[1]);
                let index=toDo[2];

                if(index>=0 && index<=ids.length){
                    ids.splice(index,0,newId);
                    console.log(ids.join(" "));
                }
            }
        }
    };
}

starfighterFormation([1, 2, 3, 4, 5],
    ["destroy 3",
    "swap 0 1",
    "add 6",
    "center"]);

starfighterFormation([1, 2, 3, 4, 5],
    ["add 6",
    "swap 0 5",
    "swap 1 4",
    "swap 2 3",
    "swap 2 100",
    "swap 2 2",
    "center"]);

starfighterFormation([1, 2],
    ["insert 3 2",
    "center",
    "destroy 1",
    "destroy 2",
    "center"])