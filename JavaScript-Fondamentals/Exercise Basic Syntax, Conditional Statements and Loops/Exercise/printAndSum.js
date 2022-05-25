function printAndSum(startNum, endNum){

    let sumNum = 0
    let line = '';

    for (let i = startNum; i <= endNum; i++){
        line += i + ' ';
        sumNum += i;
        
    }
    console.log(line);
    console.log(`Sum: ${sumNum}`)
}

printAndSum(5, 10)