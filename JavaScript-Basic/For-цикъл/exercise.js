//1.	Числа от 1 до 100
//function number1To100() {
//
//    for (let a = 1; a <= 100; a++){
//        console.log(a);
//    }
//}


//--------------------------

//2.	Числата от N до 1 в обратен ред
//function number1ToN(input){
//
//    let n = Number(input[0]);
//
//    for (let num = n; num >= 1; num--){
//        console.log(num);
//    }
//
//}
//number1ToN(["5"])


//--------------------

//3.	Числата от 1 до N през 3
//function numberNStep3(input){
//
//    let n = Number(input[0]);
//
//    for (let num = 1;num <=n; num+=3){
//        console.log(num);
//    }
//
//}
//numberNStep3(["10"])


//-----------------------------------

//4.	Четни степени на 2
//function evenOf2(input){
//
//    let n = Number(input[0]);
//
//    for (let a = 0; a<=n; a+=2){
//       console.log(Math.pow(2,a));
//    }
//
//}
//evenOf2(["5"])


//-----------------------------

//5.	Поток от символи
//function characterSequence(input){
//
//    let text = input[0];
//   
//
//    for (let i = 0; i < text.length; i++){
//        console.log(text[i]);
//    }
//    
//}
//characterSequence(["softuni"])
//characterSequence(["ice cream"])


//-----------------------------

//6.	Сумиране на гласните букви
//function vowelsSum(input) {
//
//    let text = input[0];
//    let sum = 0;
//
//    for (let i = 0; i < text.length; i++) {
//        if (text[i] === "a") {
//            sum += 1;
//        } else if (text[i] === "e") {
//            sum += 2;
//        } else if (text[i] === "i") {
//            sum += 3;
//        } else if (text[i] === "o") {
//            sum += 4;
//        } else if (text[i] === "u") {
//            sum += 5
//        }
//    } console.log(sum);
//
//}
//vowelsSum(["bamboo"])
//vowelsSum(["bamboo"])

//-----------------------------------

//7.	Сумиране на числа
//function sumOfNumbers(input) {
//
//    let n = input[0];
//    let sum = 0
//
//    for (let i = 0; i < n.length; i++) {
//        let sumNumber = Number(n[i]);
//        sum += sumNumber;
//    } 
//   
//        console.log(`The sum of the digits is:${sum} `);
//    
//}
//sumOfNumbers(["1234"])


//--------------------------------

//8.	Числа, които се делят на 9
//function divisibleBy9(input){
//
//    let startNumber = Number(input[0]);
//    let endNumber = Number(input[1]);
//    let sum = 0;
//
//    for (let i = startNumber; i <= endNumber; i++){
//        if (i % 9 === 0){
//            sum+=i;
//        }
//    }console.log(`The sum: ${sum}`);
//
//    for (let i = startNumber; i <= endNumber; i++){
//        if (i % 9 === 0){
//            console.log(i);
//        }
//    }
//}
//divisibleBy9(["100","200"])