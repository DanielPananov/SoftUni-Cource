//1.	Старата Библиотека
//function oldBooks(input){
//    
//    let favoriteBook = input[0];
//    index = 0;
//    let moreBooks = input[index];
//    index++;
//
//    counter = 0;
//    let isBookFound = false;
//
//    while (moreBooks !== "No More Books"){
//        let currentBook = input[index];
//        index++;
//        
//        if (currentBook === favoriteBook){
//            isBookFound = true;
//            break;
//        } 
//        counter++;
//        moreBooks = input[index];
//        
//
//    }
//    if (isBookFound){
//        console.log(`You checked ${counter} books and found it.`);
//    } else {
//        console.log("The book you search is not here!");
//        console.log(`You checked ${counter} books.`);
//    }
//}
//oldBooks(["Troy","Stronger","Life Style","Troy"])
//oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"])


//---------------------------------

//2.	Подготовка за изпит
//function examPreparation(input) {
// 
//    let index = 0;
//    let unsucessfull = Number(input[index++]);
//    let command = input[index++];
//    let sumOfRatings = 0;
//    let numberEx = 0;
//    let lastProblem = '';
//    let fail = 0;
//
//    let isSuccess = true;
// 
//    while(command !== 'Enough'){
//        let exName = command;
//        let rating = Number(input[index++]);
//        sumOfRatings+=rating;
//        numberEx++;
//        lastProblem = exName;
// 
//        if(rating <= 4){
//            fail++;
//        }
//        if(fail === unsucessfull){
//            console.log(`You need a break, ${fail} poor grades.`);
//            isSuccess = false;
//            break;
//        }
// 
//        command = input[index++];
//    }
//   if(isSuccess){
//       console.log(`Average score: ${(sumOfRatings/numberEx).toFixed(2)}`);
//       console.log(`Number of problems: ${numberEx}`);
//       console.log(`Last problem: ${lastProblem}`);
//   }
//}
//examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])


//---------------------------------------------

//3.	Почивка
//function vacation(input){
//
//    let index = 0;
//    let sumVacation = input[index++];
//    let budget = Number(input[index++]);
//    let spendDay = 0;
//    let allDay = 0;
//
//    let isHasMoney = true;
//
//    while (budget < sumVacation){
//        let currentAction = input[index++];
//        let currentSum = Number(input[index++]); 
//        allDay++;
//
//        if (currentAction === "save") {
//            spendDay = 0;
//            budget += currentSum;
//        } else {
//            spendDay++;
//            budget -= currentSum;
//            if (budget < 0){
//                budget = 0;
//            }
//        } 
//        if (spendDay === 5){
//            console.log("You can't save the money.");
//            console.log(allDay);
//            isHasMoney = false;
//            break;
//        } 
//
//    }
//    if (isHasMoney){
//        console.log(`You saved the money for ${allDay} days.`);
//    }
//
//}
//vacation(["2000","1000","spend","1200","save","2000"])
//vacation(["110","60","spend","10","spend","10","spend","10","spend","10","spend","10"])
//vacation(["250","150","spend","50","spend","50","save","100","save","100"])



//--------------------------------------

//4. Стъпки
//function walking(input) {
//
//    let targetSteps = 10000;
//
//    let index = 0;
//    let command = input[index++];
//
//    let currentSteps = 0;
//
//    while (command !== "Going home") {
//        let steps = Number(command);
//        currentSteps += steps;
//
//        if (currentSteps >= targetSteps) {
//
//            break;
//        }
//
//        command = input[index++];
//    }
//    if (command === "Going home") {
//        let steps = Number(input[index++]);
//        currentSteps += steps;
//    }
//
//    let diff = Math.abs(currentSteps - targetSteps);
//
//    if (currentSteps >= targetSteps) {
//        console.log("Goal reached! Good job!");
//        console.log(`${diff} steps over the goal!`);
//    } else {
//        console.log(`${diff} more steps to reach goal.`);
//    }
//
//}
//walking(["Going home", "10002"])
//walking(["1000","1500","2000","6500"])
//walking(["1500","300","2500","3000","Going home","200"])
//walking(["1500","3000","250","1548","2000","Going home","2000"])


//--------------------------

//5.  Монети
//function coins(input){
//
//    let donate = Number(input[0]);
//    donate = Math.floor(donate * 100);
//    let counter = 0;
//
//    while (donate > 0){
//        
//        if (donate >= 200){
//            donate -= 200;
//            counter++;
//        } else if (donate >= 100){
//            donate -= 100;
//            counter++;
//        } else if (donate >= 50){
//            donate -= 50;
//            counter++;
//        } else if (donate >= 20){
//            donate -= 20;
//            counter++;
//        } else if (donate >= 10){
//            donate -= 10;
//            counter++;
//        } else if (donate >= 5){
//            donate -= 5;
//            counter++;
//        } else if (donate >= 2){
//            donate -= 2;
//            counter++;
//        } else {
//            donate -= 1;
//            counter++;
//        }                      
//
//    } console.log(counter);
//    
//} 
//coins(["1.23"])
//coins(["2"])
//coins(["0.56"])
//coins(["2.73"])



//------------------------------

//6.  Торта
//function cake(input){
//
//    let index = 0;
//    let width = Number(input[index++]);
//    let lendth = Number(input[index++]);
//    let command = input[index++];
//    let allPiece = 0;
//
//    let allCake = width * lendth;
//
//    while (command !== "STOP"){
//        let sizePiece = Number(command);
//        allPiece += sizePiece;
//
//        if (allCake < allPiece){
//
//            break;
//        }
//        
//        command = input[index++];
//    
//    }
//    if (allCake < allPiece ){
//        let diff = Math.abs(allCake - allPiece);
//        console.log(`No more cake left! You need ${diff} pieces more.`);
//    }
//
//    if (command === "STOP") {
//        let diff = (allCake - allPiece);
//        console.log(`${diff} pieces are left.`);
//    }
//
//
//}
//cake(["10","10","20","20","20","20","21"])
//cake(["10","2","2","4","6","STOP"])


//---------------------------------

//7.	Преместване
//function moving(input){
//
//    let index = 0;
//    let widthHouse = Number(input[index++]);
//    let lengthHouse = Number(input[index++]);
//    let heightHouse = Number(input[index++]);
//    let command = input[index++];
//    let allBox = 0;
//    let sizeHouse = widthHouse * lengthHouse * heightHouse;
//
//    while (command !== "Done"){
//        let currentBox = Number(command);
//        allBox += currentBox;
//
//        if (sizeHouse < allBox){
//            break;
//        }
//
//        command = input[index++]
//    }
//    if (sizeHouse < allBox){
//        let diff = Math.abs(sizeHouse - allBox);
//        console.log(`No more free space! You need ${diff} Cubic meters more.`);
//    }
//
//    if (command === "Done"){
//        let diff = Math.abs(sizeHouse - allBox);
//        console.log(`${diff} Cubic meters left.`);
//    }
//
//}
//moving(["10","10","2","20","20","20","20","122"])
//moving(["10","1","2","4", "6","Done"])

