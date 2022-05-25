//1.	Кино
//function cinema(input) {
//
//    let type = input[0];
//    let row = Number(input[1]);
//    let colon = Number(input[2]);
//    let sum = 0;
//
//    switch (type) {
//        case "Premiere":
//            sum = row * colon * 12.00;
//            console.log(`${sum.toFixed(2)} leva`);
//            break;
//        case "Normal":
//            sum = row * colon * 7.50;
//            console.log(`${sum.toFixed(2)} leva`);
//            break;
//        case "Discount":
//            sum = row * colon * 5.00;
//            console.log(`${sum.toFixed(2)} leva`);
//            break;
//    }
//
//
//}
//cinema(["Premiere", "10", "12"])
//cinema(["Normal","21","13"])
//cinema(["Discount","12","30"])

//-------------------------------------

//2.	 Лятно облекло
//function summerOutFit(input) {
//
//    let temperature = Number(input[0]);
//    let partDay = input[1];
//    let outFit = "";
//    let shoes = "";
//
//    switch (partDay) {
//        case "Morning":
//            if (temperature <= 18) {
//                outFit = "Sweatshirt";
//                shoes = "Sneakers";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            } else if (temperature <= 24) {
//                outFit = "Shirt";
//                shoes = "Moccasins";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            } else {
//                outFit = "T-Shirt";
//                shoes = "Sandals";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            }
//            break;
//        case "Afternoon":
//            if (temperature <= 18) {
//                outFit = "Shirt";
//                shoes = "Moccasins";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            } else if (temperature <= 24) {
//                outFit = "T-Shirt";
//                shoes = "Sandals";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            } else {
//                outFit = "Swim Suit";
//                shoes = "Barefoot";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            }
//            break;
//        case "Evening":
//            if (temperature <= 18) {
//                outFit = "Shirt";
//                shoes = "Moccasins";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            } else if (temperature <= 24) {
//                outFit = "Shirt";
//                shoes = "Moccasins";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            } else {
//                outFit = "Shirt";
//                shoes = "Moccasins";
//                console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`);
//            }
//            break;
//    }
//
//}
//summerOutFit(["16", "Morning"])
//summerOutFit(["22","Afternoon"])
//summerOutFit(["28","Evening"])

//---------------------------------------

//3.	Нов дом
//function newHouse(input) {
//
//    let typeFlowers = input[0];
//    let quantity = Number(input[1]);
//    let budget = Number(input[2]);
//    let price = 0;
//
//    switch (typeFlowers) {
//        case "Roses" :
//            price = quantity * 5.00;
//            if (quantity > 80) {
//                price = price * 0.90;
//            }
//            break;
//        case "Dahlias" :
//            price = quantity * 3.80;
//            if (quantity > 90) {
//                price = price * 0.85;
//            }
//            break;
//        case "Tulips" :
//            price = quantity * 2.80;
//            if (quantity > 80) {
//                price = price * 0.85;
//            }
//            break;
//        case "Narcissus" :
//            price = quantity * 3.00;
//            if (quantity < 120) {
//                price = price * 1.15;
//            }
//            break;
//        case "Gladiolus" :
//            price = quantity * 2.50;
//            if (quantity < 80) {
//                price = price * 1.20;
//            }
//            break;
//    }
//    let diff = Math.abs(price - budget);
//    if (budget >= price){
//        console.log(`Hey, you have a great garden with ${quantity} ${typeFlowers} and ${diff.toFixed(2)} leva left.`);
//    } else {
//        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
//    }
//
//}
//newHouse(["Roses", "55", "250"])
//newHouse(["Tulips","88","260"])
//newHouse(["Narcissus","119","360"])

//-----------------------------------

//4.	Лодка за риболов
//function fishingBoat(input) {
//
//    let budget = Number(input[0]);
//    let season = input[1];
//    let fisherMan = Number(input[2]);
//    let price = 0;
//
//    switch (season) {
//        case "Spring":
//            price = 3000;
//            if (fisherMan <= 6) {
//                price = price * 0.90;
//            } else if (fisherMan <= 11) {
//                price = price * 0.85;
//            } else {
//                price = price * 0.75;
//            }
//            break;
//        case "Summer":
//        case "Autumn":
//            price = 4200;
//            if (fisherMan <= 6) {
//                price = price * 0.90;
//            } else if (fisherMan <= 11) {
//                price = price * 0.85;
//            } else {
//                price = price * 0.75;
//            }
//            break;
//        case "Winter":
//            price = 2600;
//            if (fisherMan <= 6) {
//                price = price * 0.90;
//            } else if (fisherMan <= 11) {
//                price = price * 0.85;
//            } else {
//                price = price * 0.75;
//            }
//            break;
//    }
//    if (fisherMan % 2 === 0 && season !== "Autumn"){
//        price = price * 0.95;
//    }
//
//    let diff = Math.abs(price - budget);
//
//    if (budget >= price){
//        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
//    } else {
//        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
//    }
//
//}
//fishingBoat(["3000", "Summer", "11"])
//fishingBoat(["3600","Autumn","6"])
//fishingBoat(["2000","Winter","13"])

//----------------------------------------

//5.	Пътешествие
//function journey(input) {
//
//    let budget = Number(input[0]);
//    let season = input[1];
//    let destination = "";
//    let type = "";
//
//    switch (season) {
//        case "summer":
//            if (budget <= 100) {
//                destination = "Bulgaria";
//                type = "Camp"
//                budget = budget * 0.30;
//                console.log(`Somewhere in ${destination}`);
//                console.log(`${type} - ${budget.toFixed(2)}`);
//            } else if (budget <= 1000) {
//                destination = "Balkans";
//                type = "Camp";
//                budget = budget * 0.40;
//                console.log(`Somewhere in ${destination}`);
//                console.log(`${type} - ${budget.toFixed(2)}`);
//            } else if (budget > 1000) {
//                destination = "Europe";
//                type = "Hotel";
//                budget = budget * 0.90;
//                console.log(`Somewhere in ${destination}`);
//                console.log(`${type} - ${budget.toFixed(2)}`);
//            }
//            break;
//        case "winter":
//            if (budget <= 100){
//                destination = "Bulgaria";
//                type = "Hotel";
//                budget = budget * 0.70;
//                console.log(`Somewhere in ${destination}`);
//                console.log(`${type} - ${budget.toFixed(2)}`);
//            } else if (budget <= 1000){
//                destination = "Balkans";
//                type = "Hotel";
//                budget = budget * 0.80;
//                console.log(`Somewhere in ${destination}`);
//                console.log(`${type} - ${budget.toFixed(2)}`);
//            } else if (budget > 1000){
//                destination = "Europe";
//                type = "Hotel";
//                budget = budget * 0.90;
//                console.log(`Somewhere in ${destination}`);
//                console.log(`${type} - ${budget.toFixed(2)}`);
//            }
//            break;
//    }
//
//
//
//}
//journey(["75", "winter"])
//journey(["312", "summer"])
//journey(["678.53", "winter"])
//journey(["1500", "summer"])

//------------------------------

//6.	Операции между числа
//function operationBtNumber(input){
//
//    let n1 = Number(input[0]);
//    let n2 = Number(input[1]);
//    let op = input[2];
//    let result = 0;
//
//    switch(op){
//        case "+" :
//        result = n1 + n2;
//        if (result % 2 === 0 ){
//            console.log(`${n1} ${op} ${n2} = ${result} - even`);
//        } else {
//            console.log(`${n1} ${op} ${n2} = ${result} - odd`);
//        }
//        break;
//        case "-" :
//        result = n1 - n2;
//        if (result % 2 === 0 ){
//            console.log(`${n1} ${op} ${n2} = ${result} - even`);
//        } else {
//            console.log(`${n1} ${op} ${n2} = ${result} - odd`);
//        }
//        break;
//        case "*" :
//        result = n1 * n2;
//        if (result % 2 === 0 ){
//            console.log(`${n1} ${op} ${n2} = ${result} - even`);
//        } else {
//            console.log(`${n1} ${op} ${n2} = ${result} - odd`);
//        }
//        break;
//        case "/" :
//        result = n1 / n2;
//        if (n2 === 0){
//            console.log(`Cannot divide ${n1} by zero`);
//        } else {
//            console.log(`${n1} ${op} ${n2} = ${result.toFixed(2)}`);
//        }
//        break;
//        case "%" :
//        result = n1 % n2;
//        if (n2 === 0){
//            console.log(`Cannot divide ${n1} by zero`);
//        } else {
//            console.log(`${n1} ${op} ${n2} = ${result}`);
//        }
//        break;
//    }
//
//}
//operationBtNumber(["10","12","+"])
//operationBtNumber(["10","1","-"])
//operationBtNumber(["7","3","*"])
//operationBtNumber(["123","12","/"])
//operationBtNumber(["10","3","%"])

//---------------------------------

//7.	Хотелска стая
//function hotelRoom(input) {
//
//    let month = input[0];
//    let nights = Number(input[1]);
//    let Studio = 0;
//    let Apartment = 0;
//
//    switch (month) {
//        case "May":
//        case "October":
//            Studio = 50 * nights;
//            Apartment = 65 * nights;
//            if (nights > 14) {
//                Studio = Studio * 0.70;
//                Apartment = Apartment * 0.90;
//                console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
//                console.log(`Studio: ${Studio.toFixed(2)} lv.`);
//            } else if (nights > 7) {
//                Studio = Studio * 0.95;
//                console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
//                console.log(`Studio: ${Studio.toFixed(2)} lv.`);
//            } else {
//                console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
//                console.log(`Studio: ${Studio.toFixed(2)} lv.`);
//            }
//            break;
//        case "June":
//        case "September":
//            Studio = 75.20 * nights;
//            Apartment = 68.70 * nights;
//            if (nights > 14) {
//                Studio = Studio * 0.80;
//                Apartment = Apartment * 0.90;
//                console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
//                console.log(`Studio: ${Studio.toFixed(2)} lv.`);
//            } else {
//                console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
//                console.log(`Studio: ${Studio.toFixed(2)} lv.`);
//            }
//            break;
//        case "July":
//        case "August":
//            Studio = 76 * nights;
//            Apartment = 77 * nights;
//            if (nights > 14) {
//                Apartment = Apartment * 0.90;
//                console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
//                console.log(`Studio: ${Studio.toFixed(2)} lv.`);
//            } else {
//                console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
//                console.log(`Studio: ${Studio.toFixed(2)} lv.`);
//            }
//            break;
//    }
//
//}
//hotelRoom(["May", "15"])
//hotelRoom(["June", "14"])
//hotelRoom(["August", "20"])

//-------------------------------

//8.	Навреме за изпит
//function timeForExam(input) {
//  let hoursExam = Number(input[0]);
//  let minExam = Number(input[1]);
//  let hoursArrive = Number(input[2]);
//  let minArrive = Number(input[3]);
//
//  let hoursToMinExam = hoursExam * 60;
//  let hoursToMinArrive = hoursArrive * 60;
//
//  let allMinExam = hoursToMinExam + minExam;
//  let allMinArrive = hoursToMinArrive + minArrive;
//
//  if (allMinArrive > allMinExam) {
//    console.log("Late");
//    let diff = allMinArrive - allMinExam;
//    if (diff >= 60) {
//      let h = Math.floor(diff / 60);
//      let m = diff % 60;
//
//      if (m < 10){
//          console.log(`${h}:0${m} hours after the start`);
//      } else {
//          console.log(`${h}:${m} hours after the start`);
//      }
//    } else {
//        let m = diff % 60;
//        console.log(`${m} minutes after the start`);
//    }
//  } else if (allMinExam - allMinArrive <= 30){
//      console.log("On time");
//      let diff = allMinExam - allMinArrive;
//      if (diff !== 0){
//          let m = diff % 60;
//          console.log(`${m} minutes before the start`);
//      }
//  } else {
//      console.log("Early");
//      let diff = allMinExam - allMinArrive;
//      if (diff >= 60){
//          let h = Math.floor(diff / 60);
//          let m = diff % 60;
//
//          if (m < 10){
//              console.log(`${h}:0${m} hours before the start`);
//          } else {
//              console.log(`${h}:${m} hours before the start`);
//          }
//      } else {
//          let m = diff % 60;
//          console.log(`${m} minutes before the start`);
//      }
//  }
//}
//timeForExam(["9", "30", "9", "50"]);
//timeForExam(["9","00","8","30"])
//timeForExam(["16","00","15","00"])
//timeForExam(["9","00","10","30"])
//timeForExam(["14","00","13","55"])

//-----------------------------

//9.	Ски почивка
//function skiTrip(input) {
//  let day = Number(input[0]);
//  let room = input[1];
//  let mean = input[2];
//  let price = 0;
//
//  switch (room) {
//    case "room for one person":
//      roomForOne = 18.0;
//      price = roomForOne * (day - 1);
//      if (mean === "positive") {
//        price = price * 1.25;
//        console.log(price.toFixed(2));
//      } else {
//        price = price * 0.90;
//        console.log(price.toFixed(2));
//      }
//      break;
//    case "apartment":
//        apartment = 25.00;
//        price = apartment * (day - 1);
//        if (day <= 10){
//            price = price * 0.70;
//        } else if (day <= 15){
//            price = price * 0.65;
//        } else {
//            price = price * 0.50;
//        }
//        if (mean === "positive"){
//            price = price * 1.25;
//            console.log(price.toFixed(2));
//        } else {
//            price = price * 0.90;
//            console.log(price.toFixed(2));
//        }
//      break;
//    case "president apartment":
//        presidentApartment = 35.00;
//        price = presidentApartment * (day - 1);
//        if (day <= 10){
//            price = price * 0.90;
//        } else if (day <= 15){
//            price = price * 0.85;
//        } else {
//            price = price * 0.80;
//        }
//        if (mean === "positive"){
//            price = price * 1.25;
//            console.log(price.toFixed(2));
//        } else {
//            price = price * 0.90;
//            console.log(price.toFixed(2));
//        }
//      break;
//  }
//}
//skiTrip(["14","apartment","positive"])
//skiTrip(["30","president apartment","negative"])
//skiTrip(["12","room for one person","positive"])
