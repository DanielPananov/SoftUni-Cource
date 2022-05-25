//1.	Числа до 1000, завършващи на 7
//function endingIn7(input){
//
//    let numbers = Number(input[0]);
//
//    for (let i = 0; i <= numbers; i++){
//        if (i % 10 === 7){
//            console.log(i);
//        }
//    }
//
//}
//endingIn7(["997"])

//-------------------------------------

//2.	Таблицата за умножение
//function multiplicationTable(input){
//
//    let numbers = Number(input[0]);
//
//        for (let i = 1; i <= 10; i++){
//            console.log(`${i} * ${numbers} = ${i * numbers}`);
//
//        }
//}
//multiplicationTable(["5"])

//-------------------------------------

//3.	Хистограма
//function histogram(input) {
//
//    index = 0;
//    let n = Number(input[index]);
//    index++;
//
//    p1 = 0;
//    p2 = 0;
//    p3 = 0;
//    p4 = 0;
//    p5 = 0;
//
//    for (let i = 0; i < n; i++) {
//        let currentNumber = Number(input[index]);
//        index++;
//        if (currentNumber < 200) {
//            p1++;
//        } else if (currentNumber >= 200 && currentNumber < 400) {
//            p2++;
//        } else if (currentNumber >= 400 && currentNumber < 600) {
//            p3++;
//        } else if (currentNumber >= 600 && currentNumber < 800) {
//            p4++;
//        } else {
//            p5++;
//        }
//    }
//    let sump1 = p1 / n * 100;
//    let sump2 = p2 / n * 100;
//    let sump3 = p3 / n * 100;
//    let sump4 = p4 / n * 100;
//    let sump5 = p5 / n * 100;
//
//    console.log(`${sump1.toFixed(2)}%`);
//    console.log(`${sump2.toFixed(2)}%`);
//    console.log(`${sump3.toFixed(2)}%`);
//    console.log(`${sump4.toFixed(2)}%`);
//    console.log(`${sump5.toFixed(2)}%`);
//
//
//
//}
//histogram(["3", "1", "2", "999"])

//---------------------------------

//4.	Умната Лили
//function cleverLily(input) {
//
//    let age = Number(input[0]);
//    let priceWashingMachine = Number(input[1]);
//    let priceToys = Number(input[2]);
//
//    let toys = 0;
//    let sumToys = 0;
//    let money = 10;
//    let sumMoney = 0;
//    for (let i = 1; i <= age; i++) {
//        if (i % 2 !== 0) {
//            toys++;
//            sumToys = toys * priceToys;
//        } else if (i % 2 === 0) {
//            sumMoney += money;
//            money += 10;
//            sumMoney -= 1;
//        }
//    }
//    let budget = sumToys + sumMoney;
//    let diff = Math.abs(budget - priceWashingMachine);
//
//    if (budget >= priceWashingMachine){
//        console.log(`Yes! ${diff.toFixed(2)}`);
//    } else {
//        console.log(`No! ${diff.toFixed(2)}`);
//    }
//
//
//
//}
//cleverLily(["10", "170.00", "6"])

//----------------------------
//5.	Заплата
//function salary(input) {
//  index = 0;
//  let openTabs = Number(input[index]);
//  index++;
//  let salary = Number(input[index]);
//  index++;
//  let haveNoMoney = true;
//
//  for (let i = 0; i < openTabs; i++) {
//    let currentOpenTabs = input[index];
//    index++;
//    if (currentOpenTabs === "Facebook") {
//      salary -= 150;
//    } else if (currentOpenTabs === "Instagram") {
//      salary -= 100;
//    } else if (currentOpenTabs === "Reddit") {
//      salary -= 50;
//    }
//    if (salary <= 0) {
//      haveNoMoney = false;
//      console.log("You have lost your salary.");
//      break;
//    }
//  }
//  if (haveNoMoney) {
//    console.log(`${salary}`);
//  }
//}
//salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook",]);
//salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
//salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);

//------------------------------


function oscars(input){
    index = 0;
    let nameActior = input[index];
    index++;
    let pointsAcademy = Number(input[index]);
    index++;
    let numberJuri = Number(input[index]);
    index++;

    let pointsOfJuri = 0;
    let maxPoints = true;

    for (let i = 0; i < numberJuri; i++){
        let currentJuri = input[index];
        index++;

        if (currentJuri === "Johnny Depp"){
            pointsOfJuri += (11 * 45) / 2;
            pointsAcademy += pointsOfJuri;
            console.log(pointsAcademy);
        } else if (currentJuri === "Will Smith"){
            pointsOfJuri += (10 * 29) / 2;
            console.log(pointsOfJuri);
            pointsAcademy += pointsOfJuri;
            console.log(pointsAcademy);
        } else if (currentJuri === "Jet Lee"){
            pointsOfJuri += (7 * 10) / 2;
            pointsAcademy += pointsOfJuri;
        } else if (currentJuri === "Matthew Mcconaughey"){
            pointsOfJuri += (19 * 39) / 2;
            pointsAcademy += pointsOfJuri;
        } if (pointsAcademy > 1250.5){
            maxPoints = false;
            console.log(`Congratulations, ${nameActior} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`);
            break;
        } 
    } 
    let diff = Math.abs(pointsOfJuri - pointsAcademy);
    if (maxPoints){
        console.log(`Sorry, ${nameActior} you need ${diff.toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"])
