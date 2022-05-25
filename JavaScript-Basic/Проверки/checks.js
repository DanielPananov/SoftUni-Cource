//1.	Отлична оценка
//function excellent(input){
//
//    let grade = Number(input[0]);
//
//    if (grade >= 5.50){
//        console.log("Excellent!");
//    }
//
//}
//excellent(["6"])
//excellent(["5"])
//excellent(["5.50"])
//excellent(["5.49"])

//----------------------------

//2.	По-голямото число
//function greaterNumber(input) {
//
//    let a = Number(input[0]);
//    let b = Number(input[1]);
//
//    if (a > b) {
//        console.log(a);
//    } else {
//        console.log(b);
//    }
//
//}
//greaterNumber(["5", "3"])
//greaterNumber(["3", "5"])
//greaterNumber(["10", "10"])
//greaterNumber(["-5", "5"])


//----------------------------------

//3.	Четно или нечетно
//function oddOrEven(input){
//
//    let a = Number(input[0]);
//
//    if ((a % 2) === 0) {
//        console.log("even");
//    } else {
//        console.log("odd");
//    }
//}
//oddOrEven(["2"])
//oddOrEven(["3"])
//oddOrEven(["25"])
//oddOrEven(["1024"])


//------------------------------

//4.	Познай паролата
//function password(input){
//
//    let pass = input[0];
//
//    if (pass !== "s3cr3t!P@ssw0rd"){
//        console.log("Wrong password!")
//    } else {
//        console.log("Welcome")
//    }
//
//}
//password(["qwerty"])
//password(["s3cr3t!P@ssw0rd"])
//password(["s3cr3t!p@ss"])

//---------------------------

//5.	Число от 100 до 200
//function checkNumber(input) {
//
//    let getNumber = Number(input[0]);
//
//    if (getNumber < 100) {
//        console.log("Less than 100");
//    } else if (getNumber >= 100 && getNumber <= 200) {
//        console.log("Between 100 and 200");
//    } else if (getNumber > 200) {
//        console.log("Greater than 200");
//    }
//}
//checkNumber(["95"])
//checkNumber(["120"])
//checkNumber(["210"])


//---------------------------------

//6.	Информация за скоростта
//function speedMeter(input){
//
//    let speed = Number(input[0]);
//
//    if (speed <= 10){
//        console.log("slow");
//    } else if (speed <= 50){
//        console.log("average");
//    } else if (speed <= 150){
//        console.log("fast");
//    } else if (speed <= 1000){
//        console.log("ultra fast");
//    } else {
//        console.log("extremely fast");
//    }
//
//}
//speedMeter(["8"])
//speedMeter(["49.5"])
//speedMeter(["126"])
//speedMeter(["160"])
//speedMeter(["3500"])


//--------------------------------

//7.	Лица на фигури
//function figures(input){
//
//    let figure = input[0];
//
//    if (figure === "square"){
//        let a = Number(input[1]);
//        let area = a * a;
//        console.log(area.toFixed(3));
//    } else if (figure === "rectangle"){
//        let a = Number(input[1]);
//        let b = Number(input[2]);
//        let area = a * b;
//        console.log(area.toFixed(3));
//    } else if (figure === "circle"){
//        let radius = Number(input[1]);
//        let area = Math.PI * Math.pow(radius,2);
//        console.log(area.toFixed(3));
//    } else if (figure === "triangle"){
//        let a = Number(input[1]);
//        let ha = Number(input[2]);
//        let area = (a * ha) / 2;
//        console.log(area.toFixed(3));
//    }
//
//}
//figures(["square", "5"])
//figures(["rectangle","7","2.5"])
//figures(["circle","6"])
//figures(["triangle","4.5","20"])
