//1.	Четене на думи
//function readText(input){
//
//    index = 0;
//    let text = input[index];
//    
//
//    while (text !== "Stop"){
//        let currentText = input[index];
//        if (currentText === "Stop"){
//            break;
//        }
//        console.log(currentText);
//        
//        text = input[index];
//        index++;
//    }
//
//}
//readText(["Nakov",
//"SoftUni",
//"Sofia",
//"Bulgaria",
//"SomeText",
//"Stop",
//"AfterStop",
//"Europe",
//"HelloWorld"])

//-----------------------

//2.	Парола
//function password(input){
//
//    index = 0;
//    let userName = input[0];
//    let passWord = input[1];
//    
//    let current = input[index];
//    index++;
//    while (current !== passWord){
//        let currentPass = input[index];
//        if (currentPass === passWord){
//            console.log(`Welcome ${userName}!`);
//            break;
//        } else {
//            console.log("Wrong Password");
//        }
//
//
//        current = input[index];
//        index++;
//    }
//
//}
//password(["Gosho",
//"secret",
//"secret"])

//-----------------------------------

//3.	Сума от числа
//function sumNumbers(input){
//
//    let number = Number(input[0]);
//    
//    let index = 1;
//
//    let sumNumbers = 0;
//    while (sumNumbers < number){
//        let numbers = Number(input[index]);
//        
//        sumNumbers += numbers;
//        index++;
//        
//    }
//    console.log(sumNumbers);
//}
//sumNumbers(["100","10","20","30","40"])
//sumNumbers(["20","1","2","3","4","5","6"])


//---------------------------------

//4.	Редица числа 2k + 1
//function sequence(input){
//
//    let n = Number(input[0]);
//    let number = 1;
//    
//    while (number <= n){
//        console.log(number);
//        number = (number * 2) + 1;
//        
//    }
//
//}
//sequence(["8"])
//
//
//---------------------------


//5.	Баланс по сметка
//function accountBalance(input){
//
//    index = 0;
//    let command = input[index];
//    index++;
//
//    let balanc = 0;
//    while (command !== "NoMoreMoney"){
//        let sum = Number(command);
//        
//        
//        if (sum > 0){
//            console.log(`Increase: ${sum.toFixed(2)}`);
//            balanc += sum;
//        } else {
//            console.log("Invalid operation!");
//            break;
//        }
//
//        command = input[index];
//        index++;
//    }
//    console.log(`Total: ${balanc.toFixed(2)}`);
//}
//accountBalance(["5.51", "69.42","100","NoMoreMoney"])
//accountBalance(["120","45.55","-150"])


//-------------------------

//6.	Най-голямо число
//function maxNumber(input){
//
//    index = 0;
//    let num = input[index];
//    index++;
//
//    let maxNum = Number.MIN_SAFE_INTEGER;
//    while (num !== "Stop") {
//        let current = Number(num);
//        
//        if (current > maxNum){
//            maxNum = current;
//        }
//        
//        num = input[index];
//        index++;
//    }
//    console.log(maxNum);
//}
//maxNumber(["100","99","80","70","Stop"])
//maxNumber(["45","-20","7","99","Stop"])

//----------------------

//7.	Най-малко число
//function minNumber(input){
//
//    index = 0;
//    let num = input[index];
//    index++;
//
//    let minNum = Number.MAX_SAFE_INTEGER;
//    while (num !== "Stop"){
//        let current = Number(num);
//
//        if (current < minNum){
//            minNum = current;
//        }
//
//        num = input[index];
//        index++;
//    }
//    console.log(minNum);
//}
//minNumber(["100","99","80","70","Stop"])
//minNumber(["45","-20","7","99","Stop"])


//-------------------------


//function graduation(input){
//
//    let name = input[0];
//    index = 0;
//    let grade = Number(input[index]);
//    index++;
//    let classWork = 1;
//    let isGrade = true;
//    
//    let yearGrade = 0;
//    while (classWork <= 12){
//        let currentGrade = Number(input[index]);
//        index++;
//        
//        if (currentGrade < 4){
//            console.log(`${name} has been excluded at ${classWork} grade`);
//            isGrade = false;
//            break;
//        } 
//            
//        yearGrade += currentGrade / 12;
//        classWork++;
//    }
//    if (isGrade){
//        console.log(`${name} graduated. Average grade: ${yearGrade.toFixed(2)}`);
//    }    
//
//}
//graduation(["Gosho", "5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])
//graduation(["Mimi", "5","6","5","6","5","6","6","2","3"])


