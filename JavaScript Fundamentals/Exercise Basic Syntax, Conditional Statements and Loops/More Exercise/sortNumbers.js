function sortNumbers(i, j, k){

    let numbers = [i,j,k];
    
    let highestToLowest = numbers.sort((a, b) => b-a);

    console.log(highestToLowest);
}

sortNumbers(2,1,3)