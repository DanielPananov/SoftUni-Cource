//1.	Ден от седмицата
//function dayOfWeek(input){
//
//    let day = Number(input[0]);
//
//    switch (day){
//        case (1) : console.log('Monday'); break;
//        case (2) : console.log('Tuesday'); break;
//        case (3) : console.log('Wednesday'); break;
//        case (4) : console.log('Thursday'); break;
//        case (5) : console.log('Friday'); break;
//        case (6) : console.log('Saturday'); break;
//        case (7) : console.log('Sunday'); break;
//        default : console.log('Error'); break;
//    }
//
//}
//dayOfWeek(["3"])


//----------------------------------

//2.	Почивен или работен ден
//function weekendOrWork(input){
//
//    let day = input[0];
//
//    switch (day) {
//        case ("Monday") : console.log("Working day"); break;
//        case ("Tuesday") : console.log("Working day"); break;
//        case ("Wednesday") : console.log("Working day"); break;
//        case ("Thursday") : console.log("Working day"); break;
//        case ("Friday") : console.log("Working day"); break;
//        case ("Saturday") : console.log("Weekend"); break;
//        case ("Sunday") : console.log("Weekend"); break;
//        default : console.log("Error"); break;
//    }
//
//}
//weekendOrWork(["Saturday"])
//weekendOrWork(["April"])

//--------------------------------

//3.	Клас животно
//function animalType(input){
//
//    let animal = input[0];
//
//    switch (animal){
//        case ("dog") : console.log("mammal"); break;
//        case ("crocodile") : console.log("reptile"); break;
//        case ("tortoise") : console.log("reptile"); break;
//        case ("snake") : console.log("reptile"); break;
//        default : console.log("unknown"); break;
//    }
//
//}
//animalType(["dog"])
//animalType(["snake"])
//animalType(["cat"])

//------------------------------------


//4.	Обръщение според възраст и пол
//function personalTitles(input){
//
//    let age = Number(input[0]);
//    let gender = input[1];
//
//    if (gender === "f"){
//        if (age >= 16){
//            console.log("Ms.");
//        } else {
//            console.log("Miss");
//        }
//    } else if (gender === "m"){
//        if (age >= 16){
//            console.log("Mr.");
//        } else {
//            console.log("Master");
//        }
//    }
//
//
//}
//personalTitles(["12","f"])
//personalTitles(["17","m"])
//personalTitles(["25","f"])


//--------------------------------------


//function smallShop(input) {
//
//    let product = input[0];
//    let town = input[1];
//    let quantity = Number(input[2]);
//
//    if (town === "Varna") {
//        switch (product) {
//            case ("coffee"): console.log(quantity * 0.45); break;
//            case ("water"): console.log(quantity * 0.70); break;
//            case ("beer"): console.log(quantity * 1.10); break;
//            case ("sweets"): console.log(quantity * 1.35); break;
//            case ("peanuts"): console.log(quantity * 1.55); break;
//        }
//    } else if (town === "Plovdiv") {
//        switch (product) {
//            case ("coffee"): console.log(quantity * 0.40); break;
//            case ("water"): console.log(quantity * 0.70); break;
//            case ("beer"): console.log(quantity * 1.15); break;
//            case ("sweets"): console.log(quantity * 1.30); break;
//            case ("peanuts"): console.log(quantity * 1.50); break;
//        }
//    } else if (town === "Sofia") {
//        switch (product) {
//            case ("coffee"): console.log(quantity * 0.50); break;
//            case ("water"): console.log(quantity * 0.80); break;
//            case ("beer"): console.log(quantity * 1.20); break;
//            case ("sweets"): console.log(quantity * 1.45); break;
//            case ("peanuts"): console.log(quantity * 1.60); break;
//        }
//
//    }
//
//}
//smallShop(["coffee", "Varna", "2"])
//smallShop(["peanuts","Plovdiv","1"])
//smallShop(["beer","Sofia","6"])
//smallShop(["water","Plovdiv","3"])


//----------------------------

//6.	Число в интервалa
//function numberInRange(input){
//
//    let number = Number(input[0]);
//
//    if ((number >= -100) && (number <= 100) && (number !== 0)){
//        console.log("Yes");
//    } else {
//        console.log("No");
//    }
//
//}
//numberInRange(["-25"])
//numberInRange(["0"])
//numberInRange(["25"])


//--------------------------------

//7.	Работно време
//function workingHours (input){
//
//    let hours = Number(input[0]);
//    let day = input[1];
//
//    if (hours >= 10 && hours <= 18){
//        switch (day){
//            case ("Monday") : 
//            case ("Tuesday") : 
//            case ("Wednesday") : 
//            case ("Thursday") : 
//            case ("Friday") : 
//            case ("Saturday") : console.log("open"); break;
//            case ("Sunday") : console.log("closed"); break;
//        }
//    } else {
//        console.log("closed")
//    }
//
//}
//workingHours(["11","Monday"])
//workingHours(["19","Friday"])
//workingHours(["11","Sunday"])


//-------------------------

//8.	Билет за кино
//function cinemaTicket(input){
//
//    let day = input[0];
//    let price = 0;
//
//    switch(day){
//        case ("Monday") : console.log(price = 12); break;
//        case ("Tuesday") : console.log(price = 12); break;
//        case ("Wednesday") : console.log(price = 14); break;
//        case ("Thursday") : console.log(price = 14); break;
//        case ("Friday") : console.log(price = 12); break;
//        case ("Saturday") : console.log(price = 16); break;
//        case ("Sunday") : console.log(price = 16); break;
//
//    }
//
//}
//cinemaTicket(["Monday"])
//cinemaTicket(["Friday"])
//cinemaTicket(["Sunday"])


//--------------------------------


//9.	Плод или зеленчук
//function fruitOrVegetable(input) {
//
//    let product = input[0];
//
//    switch (product) {
//        case ("banana"):
//        case ("apple"):
//        case ("kiwi"):
//        case ("cherry"):
//        case ("lemon"):
//        case ("grapes"): console.log("fruit"); break;
//        case ("tomato"):
//        case ("cucumber"):
//        case ("pepper"):
//        case ("carrot"): console.log("vegetable"); break;
//        default : console.log("unknown"); break;
//    }
//
//}
//fruitOrVegetable(["banana"])
//fruitOrVegetable(["apple"])
//fruitOrVegetable(["tomato"])
//fruitOrVegetable(["water"])

//----------------------------

//10.	Невалидно число
//function invalidNumber(input){
//
//    let number = Number(input[0]);
//
//    if ((number >= 100 && number <= 200) || number === 0){
//        console.log("");
//    } else {
//        console.log("invalid");
//    }
//
//
//}
//invalidNumber(["-1"])


//-----------------------

//11.	Магазин за плодове
//function fruitShop(input) {
//
//    let product = input[0];
//    let day = input[1];
//    let quantity = Number(input[2]);
//    let price = 0;
//
//    switch (day) {
//        case ("Monday"):
//        case ("Tuesday"):
//        case ("Wednesday"):
//        case ("Thursday"):
//        case ("Friday"):
//            if (product === "banana") {
//                price = quantity * 2.50;                
//            } else if (product === "apple") {
//                price = quantity * 1.20;               
//            } else if (product === "orange") {
//                price = quantity * 0.85;                
//            } else if (product === "grapefruit") {
//                price = quantity * 1.45;              
//            } else if (product === "kiwi") {
//                price = quantity * 2.70;  
//            } else if (product === "pineapple") {
//                price = quantity * 5.50; 
//            } else if (product === "grapes") {
//                price = quantity * 3.85;
//            }
//            break;
//        case ("Saturday"):
//        case ("Sunday"):
//            if (product === "banana") {
//                price = quantity * 2.70; 
//            } else if (product === "apple") {
//                price = quantity * 1.25;
//            } else if (product === "orange") {
//                price = quantity * 0.90;
//            } else if (product === "grapefruit") {
//                price = quantity * 1.60;
//            } else if (product === "kiwi") {
//                price = quantity * 3.00;
//            } else if (product === "pineapple") {
//                price = quantity * 5.60;
//            } else if (product === "grapes") {
//                price = quantity * 4.20;
//            } 
//            break;
//    }
//    if (price > 0){
//        console.log(price.toFixed(2));
//    } else {
//        console.log("error");
//    }
//
//}
//fruitShop(["apple", "Tuesday", "2"])
//fruitShop(["orange", "Sunday", "3"])
//fruitShop(["kiwi", "Monday", "2.5"])
//fruitShop(["grapes", "Saturday", "0.5"])
//fruitShop(["tomato", "Monday", "0.5"])

//--------------------------------------

//12.	Търговски комисионни
//function tradeCommision(input){
//
//    let town = input[0];
//    let trade = Number(input[1]);
//    let commision = 0;
//
//    if (town === "Sofia"){
//        if (trade <= 500){
//            commision = trade * 0.05;
//        } else if (trade <= 1000){
//            commision = trade * 0.07;
//        } else if (trade <= 10000){
//            commision = trade * 0.08;
//        } else if (trade > 10000){
//            commision = trade * 0.12;
//        } 
//    } else if (town === "Varna"){
//        if (trade <= 500){
//            commision = trade * 0.045;
//        } else if (trade <= 1000){
//            commision = trade * 0.075;
//        } else if (trade <= 10000){
//            commision = trade * 0.10;
//        } else if (trade > 10000){
//            commision = trade * 0.13;
//        } 
//    } else if (town === "Plovdiv"){
//        if (trade <= 500){
//            commision = trade * 0.055;
//        } else if (trade <= 1000){
//            commision = trade * 0.08;
//        } else if (trade <= 10000){
//            commision = trade * 0.12;
//        } else if (trade > 10000){
//            commision = trade * 0.1450;
//        } 
//    }
//    if (commision > 0){
//        console.log(commision.toFixed(2));
//    } else {
//        console.log("error");
//    }
//}
//tradeCommision(["Sofia","1500"])
//tradeCommision(["Plovdiv","499.99"])
//tradeCommision(["Varna","3874.50"])
//tradeCommision(["Kaspichan","-50"])






