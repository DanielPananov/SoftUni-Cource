//1.	Пирамида от числа
//function numberPyramid(input) {
//  let num = Number(input[0]);
//  let result = "";
//  let counter = 0;
//  let isBeager = false;
//
//  for (let rows = 1; rows <= num; rows++) {
//    result = "";
//    for (let cols = 1; cols <= rows; cols++) {
//      counter++;
//      if (counter > num) {
//        isBeager = true;
//        break;
//      }
//      result += counter + " ";
//    }
//    console.log(result);
//    if (isBeager) {
//      break;
//    }
//  }
//}
//numberPyramid(["7"]);


//---------------------------------------

//2.	Еднакви суми на четни и нечетни позиции
//function equalSumsEvenOddPosition (input){
//    let startNum = Number(input[0]);
//    let endNum = Number(input[1]);
//
//    let result = "";
//
//    for (let i = startNum; i <= endNum; i++){
//        let numToString = i + "";
//        let oddSum = 0; 
//        let evenSum = 0;
//        for (let index = 0; index < numToString.length; index++){
//            if (index % 2 === 0){
//                oddSum += Number(numToString[index]);
//            } else {
//                evenSum += Number(numToString[index]);
//            }
//        }
//        if (oddSum === evenSum){
//            result += numToString + " ";
//        } 
//    }console.log(result);
//
//}
//equalSumsEvenOddPosition(["100000","100050"])

//--------------------------------

//3.	Суми прости и непрости числа
//function sumPrimeNonPrime (input){
//    
//    let index = 0;
//    let command = input[index++];
//    let sumPrime = 0;
//    let sumNonPrime = 0;
//
//    while (command !== "stop"){
//        let currentNum = Number(command);
//
//        if (currentNum < 0){
//            console.log("Number is negative.");
//            command = input[index++];
//            continue;
//        }
//
//        if (currentNum === 1){
//            sumPrime += currentNum;
//            command = input[index++];
//            continue;
//        }
//
//        let = isPrime = true;
//        for (let i = 2; i < currentNum; i++){
//            if (currentNum % i === 0){
//                isPrime = false;
//                break;
//            }
//        }
//        if (isPrime){
//            sumPrime += currentNum;
//        } else {
//            sumNonPrime += currentNum;
//        }
//
//        command = input[index++];
//    }
//    console.log(`Sum of all prime numbers is: ${sumPrime}`);
//    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
//
//}
//sumPrimeNonPrime(["30",
//"83",
//"33",
//"-1",
//"20",
//"stop"])




//-----------------------------


//4.	Train the Trainers
//function trainTheTrainers (input){
//
//    let index = 0;
//    let people = Number(input[index++]);
//    let command = input[index++];
//    let sumOfGrade = 0;
//    let counter = 0;
//
//    while (command !== "Finish"){
//        let name = command;
//        let avrSumOfGrade = 0;
//        for (let i = 0; i < people; i++){
//            counter++;
//            let currentGrade = Number(input[index++]);
//            avrSumOfGrade += currentGrade;
//            sumOfGrade += currentGrade;
//        }
//        let avrCurrentGrade = avrSumOfGrade / people;
//
//        console.log(`${name} - ${avrCurrentGrade.toFixed(2)}.`);
//
//        command = input[index++];
//    }
//    let avrGrade = sumOfGrade / counter;
//    console.log(`Student's final assessment is ${avrGrade.toFixed(2)}.`);
//
//}
//trainTheTrainers(["3",
//"Arrays",
//"4.53",
//"5.23",
//"5.00",
//"Lists",
//"5.83",
//"6.00",
//"5.42",
//"Finish"])


//-----------------------------------------------


//5.	Специални числа
//function specialNumbers (input){
//
//    let num = Number(input[0]);
//    let result = "";
//
//    for (let a = 1; a < 9; a++){
//        for (let b = 1; b < 9; b++){
//            for (let c = 1; c < 9; c++){
//                for (let d = 1; d < 9; d++){
//                    if (num % a === 0 && num % b === 0 && num % c === 0 && num % d === 0){
//                        let finnal = (`${a}${b}${c}${d}`);
//                        result += finnal + " ";
//                        
//                    }
//                }
//            }
//        }
//    }
//    console.log(result);
//}
//specialNumbers(["3"])


//---------------------------

//6.	Билети за кино
//function cinemaTickets (input){
//    let index = 0;
//    let command = input[index++];
//    let sumStudentsTickets = 0;
//    let sumStandardTickets = 0;
//    let sumKidTickets = 0;
//    let totalTicketsCounter = 0;
//
//    while (command !== "Finish"){
//        let nameFilm = command;
//        let freeSpace = Number(input[index++]);
//        let ticketType = input[index++];
//        let ticketCounter = 0;
//        while (ticketType !== "End"){
//            ticketCounter++;
//            switch(ticketType){
//                case "student": sumStudentsTickets++; break;
//                case "standard": sumStandardTickets++; break;
//                case "kid": sumKidTickets++; break;
//            }
//
//            if (ticketCounter >= freeSpace){
//                break;
//            }
//            ticketType = input[index++];
//        }
//        totalTicketsCounter += ticketCounter;
//        let freeSpaceFilms = ticketCounter / freeSpace * 100;
//        console.log(`${nameFilm} - ${freeSpaceFilms.toFixed(2)}% full.`);
//
//        command = input[index++];
//    }
//    let percentStudentTickets = sumStudentsTickets / totalTicketsCounter * 100;
//    let percentStandardTickets = sumStandardTickets / totalTicketsCounter * 100;
//    let percentKidTickets = sumKidTickets / totalTicketsCounter * 100;
//    console.log(`Total tickets: ${totalTicketsCounter}`);
//    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
//    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
//    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
//
//
//}
//cinemaTickets(["Taxi",
//"10",
//"standard",
//"kid",
//"student",
//"student",
//"standard",
//"standard",
//"End",
//"Scary Movie",
//"6",
//"student",
//"student",
//"student",
//"student",
//"student",
//"student",
//"Finish"])
