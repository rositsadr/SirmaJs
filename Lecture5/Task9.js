function progresBar(num){
    let progress=[];
    for(let i=10;i<=100;i+=10){
       i<=num?progress.push("%"):progress.push(".");
    }
    let process = `[${progress.join("")}]`;

    console.log(process);

    process.includes(".")?console.log("Loading..."):console.log("Complete!");
}

progresBar(30);
progresBar(50);
progresBar(100);