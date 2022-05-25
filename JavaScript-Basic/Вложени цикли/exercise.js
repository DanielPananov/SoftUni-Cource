//1.	Часовник 
//function clock(){
//    
//    for (let i = 0; i <= 23; i++){
//        for (let b = 0; b <= 59; b++){
//            console.log(`${i}:${b}`);
//        }
//    }
//
//}
//clock()
//-----------------------------------

//2.	Таблица за умножение
//function multiplicationTable () {
//
//    for (let a = 1; a <= 10; a++){
//        for (let b = 1; b <= 10; b++){
//            let res = a * b;
//            console.log(`${a} * ${b} = ${res}`);
//        }
//    }
//    
//}
//multiplicationTable()

//---------------------------------

//3.	Комбинации
//function combinations (input){
//
//    let num = Number(input[0]);
//    let counter = 0;
//
//    for (let a = 0; a <= num; a++){
//        for (let b = 0; b <= num; b++){
//            for (let c = 0; c <= num; c++){
//                if (a + b + c === num){
//                    counter++;
//                }
//            }
//        }
//    }
//    console.log(counter);
//
//}
//combinations(["25"])


//----------------------------


//4.	Сума от две числа
//function sumOfTwoNumbers (input){
//
//    let startNumber = Number(input[0]);
//    let endNumber = Number(input[1]);
//    let magicNumber = Number(input[2]);
//    let counter = 0;
//    let combinations = true;
//
//    for (let a = startNumber; a <= endNumber; a++){
//        for (let b = startNumber; b <= endNumber; b++){
//            counter++;
//            if (a + b === magicNumber){
//                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
//                return;
//            } 
//        }
//    }
//    console.log(`${counter} combinations - neither equals ${magicNumber}`);
//}
//sumOfTwoNumbers(["23",
//"24",
//"20"])


//---------------------------------------

//5.	Пътуване
//function traveling (input){
//    let index = 0;
//    let command = input[index++];
//
//    while (command !== "End"){
//        let destination = command;
//        let budget = Number(input[index++]);
//        let sum = 0;
//        while (budget > sum){
//            let money = Number(input[index++]);
//            sum += money;
//            if (sum >= budget){
//                console.log(`Going to ${destination}!`);
//            }
//        }
//        command = input[index++];
//    }
//}
//traveling(["France",
//"2000",
//"300",
//"300",
//"200",
//"400",
//"190",
//"258",
//"360",
//"Portugal",
//"1450",
//"400",
//"400",
//"200",
//"300",
//"300",
//"Egypt",
//"1900",
//"1000",
//"280",
//"300",
//"500",
//"End"])

//------------------------------

//6.	Сграда
//function building (input){
//
//    let floor = Number(input[0]);
//    let room = Number(input[1]);
//    let result = "";
//
//    for (let a = floor; a > 0; a--){
//        result = '';
//        for (let b = 0; b < room; b++){
//            if (a === floor){
//                result += ("L" + a + b + " ");
//            } else if (a % 2 === 0){
//                result += ("O" + a + b + " "); 
//            } else {
//                result += ("A" + a + b + " "); 
//            }
//        }console.log(result);
//        
//    }
//}
//building(["6", "4"])