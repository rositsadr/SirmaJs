function findComandStartingIndex(comand, actionWord){
    return comand.search(actionWord);
}

function toDo(text){
    if(text.includes("directedBy")){
        return "directedBy";
    }
    else{
        return "onDate";
    }
}

function moviesStore(infoArr){
    let moviesInArr=[];
    // let b = infoArr[0].split("addMovie");
    // let a = b.filter((e)=>e.length).map((s)=>s.trim());
    
    infoArr.forEach(comand => {      
        if(comand.includes("addMovie")){
            let name = comand.substring(comand.indexOf(" ")+1);
            moviesInArr.push({movieName:name});
        }
        else{
            let action = toDo(comand);
            let actionIndex= findComandStartingIndex(comand,action);
            let name = comand.substring(0,actionIndex-1);
            moviesInArr.forEach(movie =>{
                if(movie.movieName === name){
                    let dataIndex = actionIndex + action.length;
                    let data=comand.substring(dataIndex+1);                   
                    if(action.length === 10){
                        movie.movieDirector = data;
                    }
                    else{
                        movie.movieDate = data;
                    }
                }               
            });
        }
    });

    moviesInArr.forEach(movie => {
        if(Object.keys(movie).length === 3){
            console.log(JSON.stringify(movie));
        }
    })
}

moviesStore([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    ' Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);
moviesStore([
    'addMovie The Avengers',
    'addMovie Spiderman',
    'The Avengers directedBy Pesho Peshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
    ])