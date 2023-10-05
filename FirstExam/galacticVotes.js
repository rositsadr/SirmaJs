function galacticVotes(votes){
    let yesVoteCount=0;
    let noVoteCount=0;
    let isThereAbstain=false;

    for(let i=0; i<votes.length; i++){
        if(votes[i]==="Yes"){
            yesVoteCount++;
        }
        else if(votes[i]==="No"){
            noVoteCount++;
        }
        else if(!isThereAbstain){
            isThereAbstain=true;
        }
    }

    if(yesVoteCount===noVoteCount){
        if(yesVoteCount===0 && isThereAbstain){
            console.log("Abstain");
        }
        else{
            console.log("Tie");
        }
    }
    else if(yesVoteCount<noVoteCount){
        console.log("No");
    }
    else{
        console.log("Yes");
    }
}

galacticVotes(["Yes", "No", "Yes", "Abstain", "Yes"]);
galacticVotes(["No", "No", "Abstain", "Abstain"]);
galacticVotes(["Yes", "No"]);
galacticVotes(["Abstain"]);
galacticVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);