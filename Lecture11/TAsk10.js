function cutAndReverse(text){
    let halfIndex=text.length/2;
    let firstHalf=text.substring(0,halfIndex);
    let secondHalf=text.substring(halfIndex);

    let firstOutput=firstHalf.split("");
    let secondOutput=secondHalf.split("");

    console.log(firstOutput.reverse().join(""));
    console.log(secondOutput.reverse().join(""));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');