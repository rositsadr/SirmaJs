function jediArchivesSearch(recordData, teamName){
    let firstDataIndex= recordData.indexOf(teamName);
    let lastDataIndex= recordData.lastIndexOf(teamName);

    if(firstDataIndex===-1 && lastDataIndex===-1){
        console.log("Record not found");
    }
    else{
        console.log(`First Occurrence: ${firstDataIndex}`);
        console.log(`Last Occurrence: ${lastDataIndex}`);
    }
}

jediArchivesSearch(["Yoda", "Obi-Wan", "Yoda", "Luke"], "Yoda");
jediArchivesSearch(["Han", "Leia", "Chewbacca", "Han"], "Han");
jediArchivesSearch(["Lando", "Vader", "Palpatine"], "Maul");
jediArchivesSearch(["Yoda", "Obi-Wan", "Anakin", "Luke"], "Luke");