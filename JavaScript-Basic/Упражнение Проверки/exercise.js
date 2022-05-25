//1.	Сумиране на секунди 
//function sumSeconds(input){
//
//    let timeFirst = Number(input[0]);
//    let timeSecond = Number(input[1]);
//    let timeThird = Number(input[2]);
//
//    let allSeconds = timeFirst + timeSecond + timeThird;
//    
//    let timeMinutes = Math.floor(allSeconds / 60);
//    let timeSeconds = allSeconds % 60;
//    
//    if (timeSeconds < 10){
//        console.log(`${timeMinutes}:0${timeSeconds}`);
//    } else {
//        console.log(`${timeMinutes}:${timeSeconds}`);
//    }
//    
//}
//sumSeconds(["35","45","44"])
//sumSeconds(["22", "7", "34"])
//sumSeconds(["50","50","49"])
//sumSeconds(["14", "12","10"])

//----------------------------------

//2.	Бонус точки
//function bonusScore(input) {
//
//    let score = Number(input[0]);
//    let bonus = 0;
//
//    if (score <= 100) {
//        bonus = 5;
//    } else if (score > 1000) {
//        bonus = score * 0.10;
//    } else if (score > 100) {
//        bonus = score * 0.20;
//    }
//
//    if (score % 2 === 0) {
//        bonus = bonus + 1;
//    } else if (score % 10 === 5) {
//        bonus = bonus + 2
//    }
//
//    let allScores = score + bonus;
//    console.log(bonus);
//    console.log(allScores);
//}
//bonusScore(["20"])
//bonusScore(["175"])
//bonusScore(["2703"])
//bonusScore(["15875"])


//---------------------------------

//3.	Време + 15 минути
//function timeMinutes(input) {
//
//    let hours = Number(input[0]);
//    let minutes = Number(input[1]);
//
//    let hoursToMinutes = hours * 60;
//    let allMinutes = hoursToMinutes + minutes + 15;
//
//    let minToHours = Math.floor(allMinutes / 60);
//    let minToSeconds = allMinutes % 60;
//
//    if (minToHours > 23) {
//        minToHours = 0;
//    }
//
//    if (minToSeconds < 10){
//        console.log(`${minToHours}:0${minToSeconds}`);
//    } else {
//        console.log(`${minToHours}:${minToSeconds}`);
//    }
//
//}
//timeMinutes(["1", "46"])
//timeMinutes(["0", "01"])
//timeMinutes(["23", "59"])
//timeMinutes(["11", "08"])
//timeMinutes(["12", "49"])

//----------------------------

//4.	Магазин за детски играчки
//function toyShop(input){
//
//    let priceHollyDay = Number(input[0]);
//    let puzzels = Number(input[1]);
//    let dolls = Number(input[2]);
//    let bear = Number(input[3]);
//    let minions = Number(input[4]);
//    let trucks = Number(input[5]);
//
//
//    let allSum = puzzels * 2.60 + dolls * 3 + bear * 4.10 + minions * 8.20 + trucks * 2;
//    let sumToys = puzzels + dolls + bear + minions + trucks;
//    
//    if (sumToys >= 50){
//        allSum = allSum * 0.75;
//    }
//    allSum = allSum * 0.90;
//    
//
//    let diff = Math.abs(allSum - priceHollyDay);
//    if (allSum >= priceHollyDay){
//        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
//    } else {
//        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
//    }
//
//}
//toyShop(["40.8","20","25","30","50","10"])
//toyShop(["320","8","2","5","5","1"])

//----------------------------------

//5.	Годзила срещу Конг
//function godzillaVsKong(input) {
//
//    let budgetFilm = Number(input[0]);
//    let numberStatits = Number(input[1]);
//    let cloths = Number(input[2]);
//
//    let decor = budgetFilm * 0.10;
//    let priceCloths = numberStatits * cloths;
//
//    if (numberStatits > 150){
//        priceCloths = priceCloths * 0.90;
//    }
//
//    let sum = decor + priceCloths;
//
//    let diff = Math.abs(sum - budgetFilm);
//    if (sum > budgetFilm){
//        console.log("Not enough money!");
//        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
//    } else {
//        console.log("Action!");
//        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
//    }
//
//
//}
//godzillaVsKong(["20000", "120", "55.5"])
//godzillaVsKong(["15437.62","186","57.99"])

//-------------------------------------

//6.	Световен рекорд по плуване
//function swimmingRecords(input) {
//
//    let worldRedocords = Number(input[0]);
//    let distance = Number(input[1]);
//    let timeSecunds = Number(input[2]);
//
//    let fullTime = distance * timeSecunds;
//    let delayTime = Math.floor(distance / 15) * 12.5;
//    let fullDistance = fullTime + delayTime;
//
//    let diff = Math.abs(worldRedocords - fullDistance);
//    if (fullDistance < worldRedocords) {
//        console.log(`Yes, he succeeded! The new world record is ${fullDistance.toFixed(2)} seconds.`);
//    } else {
//        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
//    }
//}
//swimmingRecords(["10464", "1500", "20"])
//swimmingRecords(["55555.67", "3017", "5.03"])

//-----------------------------------


//function shopping(input){
//
//    let budget = Number(input[0]);
//    let videoCards = Number(input[1]);
//    let cpu = Number(input[2]);
//    let ram = Number(input[3]);
//
//    let priceVideo = videoCards * 250;
//    let priceCpu = (priceVideo * 0.35) * cpu;
//    let priceRam = (priceVideo * 0.10) * ram;
//    
//    let allSum = priceVideo + priceCpu  + priceRam ;
//
//    if (videoCards > cpu){
//        allSum = allSum * 0.85;
//    }
//
//    let diff = Math.abs(allSum - budget);
//    if (budget >= allSum){
//        console.log(`You have ${diff.toFixed(2)} leva left!`);
//    } else {
//        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
//    }
//
//}
//shopping(["900","2","1","3"])
//shopping(["920.45","3","1","1"])


//---------------------------------


//8. Обедна почивка
//function lunchBreak(input){
//
//    let nameSerial = input[0];
//    let timeSerial = Number(input[1]);
//    let timeBreak = Number(input[2]);
//
//    let lunch = timeBreak / 8;
//    let rest = timeBreak / 4;
//    let freeTime = timeBreak - lunch - rest;
//
//    let diff = Math.ceil(Math.abs(freeTime - timeSerial));
//    if (freeTime <= timeSerial){
//        console.log(`You don't have enough time to watch ${nameSerial}, you need ${diff} more minutes.`);
//    } else {
//        console.log(`You have enough time to watch ${nameSerial} and left with ${diff} minutes free time.`);
//    }
//
//
//}
//lunchBreak(["Game of Thrones","60","96"])
//lunchBreak(["Teen Wolf","48","60"])






