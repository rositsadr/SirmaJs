function extractFile(text){
    let filePath=text.split("\\");
    let file=filePath[filePath.length-1];
    let lastDotIndex=file.lastIndexOf(".");
    let fileName=file.slice(0,lastDotIndex);
    let fileExtention=file.slice(lastDotIndex+1,file.length);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);  
}

extractFile('C:\\desktop\\academy\\template.pptx');
extractFile('C:\\Projects\\website.folder\\file.name.js');