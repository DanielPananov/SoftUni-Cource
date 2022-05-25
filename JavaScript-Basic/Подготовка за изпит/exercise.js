//1. Приход от филм
//function movieProfit (input){
//
//    let nameFilm = input[0];
//    let days = Number(input[1]);
//    let tikcets = Number(input[2]);
//    let ticketsPrice = Number(input[3]);
//    let percent = Number(input[4]);
//
//    let priceFromTickets = tikcets * ticketsPrice;
//    let allSum = days * priceFromTickets;
//    let percentForCinema = allSum * percent / 100;
//    let finalSum = allSum - percentForCinema;
//    console.log(`The profit from the movie ${nameFilm} is ${finalSum.toFixed(2)} lv.`);
//
//
//}
//movieProfit(['The Programmer','20','500','7.50','7'])

//----------------------

//2. Семейна почивка
//function familyTrip (input){
//
//    let budget = Number(input[0]);
//    let nights = Number(input[1]);
//    let price = Number(input[2]);
//    let percent = Number(input[3]);
//
//    if (nights > 7){
//        price = price * 0.95;
//    }
//
//    let priceNights = nights * price;
//    let sumOfBudget = budget * percent / 100;
//
//    let allPrice = sumOfBudget + priceNights;
//
//    if (allPrice <= budget){
//        console.log(`Ivanovi will be left with ${(budget - allPrice).toFixed(2)} leva after vacation.`);
//    } else {
//        console.log(`${(allPrice - budget).toFixed(2)} leva needed.`);
//    }
//
//
//}
//familyTrip(['800.50','8','100','2'])
//familyTrip(['500','7','66','15'])


//----------------------------

//3. Художествена гимнастика
//function gymnastics (input){
//
//    let contry = input[0];
//    let descipline = input[1];
//    let level = 0;
//    let play = 0;
//
//    switch (contry){
//        case "Russia": 
//        if (descipline === "ribbon"){
//            level = 9.100;
//            play = 9.400;
//        } else if (descipline === "hoop"){
//            level = 9.300;
//            play = 9.800;
//        } else if (descipline === "rope"){
//            level = 9.600;
//            play = 9.000;
//        }    
//        break;
//        case "Bulgaria": 
//        if (descipline === "ribbon"){
//            level = 9.600;
//            play = 9.400;
//        } else if (descipline === "hoop"){
//            level = 9.550;
//            play = 9.750;
//        } else if (descipline === "rope"){
//            level = 9.500;
//            play = 9.400;
//        } 
//        break;
//        case "Italy": 
//        if (descipline === "ribbon"){
//            level = 9.200;
//            play = 9.500;
//        } else if (descipline === "hoop"){
//            level = 9.450;
//            play = 9.350;
//        } else if (descipline === "rope"){
//            level = 9.700;
//            play = 9.150;
//        } 
//        break;    
//    }
//    let grade = level + play;
//    let diffGrade = 20 - grade;
//    let notEnough = (diffGrade / 20) * 100;
//    console.log(`The team of ${contry} get ${grade.toFixed(3)} on ${descipline}.`);
//    console.log(`${notEnough.toFixed(2)}%`);
//}
//gymnastics(['Bulgaria','ribbon'])



//--------------------------


//4. Филмов рейтинг
//function movieRatings (input){
//
//    let filmNumber = Number(input[0]);
//    let index = 1;
//    let highestRatingFilm = "";
//    let lowestRatingFilm = "";
//    let minRating = Number.MAX_SAFE_INTEGER;
//    let maxRating = Number.MIN_SAFE_INTEGER;
//    let counter = 0;
//    let avarageRating = 0;
//    let sumRating = 0;
//
//    for (let i = 0; i < filmNumber; i++){
//        let filmName = input[index++];
//        let ratingFilm = Number(input[index++]);
//        counter++;
//
//        if (maxRating < ratingFilm){
//            maxRating = ratingFilm;
//            highestRatingFilm = filmName;
//        }
//        
//        if (minRating > ratingFilm){
//            minRating = ratingFilm;
//            lowestRatingFilm = filmName;
//        }
//        sumRating += ratingFilm;
//        avarageRating = sumRating / counter; 
//    }
//    console.log(`${highestRatingFilm} is with highest rating: ${maxRating.toFixed(1)}`);
//    console.log(`${lowestRatingFilm} is with lowest rating: ${minRating.toFixed(1)}`);
//    console.log(`Average rating: ${avarageRating.toFixed(1)}`);
//    
//    
//}
//movieRatings(['5','A Star is Born','7.8','Creed 2','7.3','Mary Poppins','7.2','Vice','7.2','Captain Marvel','7.1'])


//--------------------------------

//5. Туристически магазин
//function touristShop (input){
//
//    let budget = Number(input[0]);
//    let index = 1;
//    let command = input[index++];
//    let sum = 0;
//    let counter = 0;
//
//    while (command !== "Stop"){
//        let product = command;
//        let price = Number(input[index++]);
//        counter++;
//
//        if (counter % 3 === 0){
//            price = price / 2;
//        }
//        sum += price;
//
//        if (sum > budget){
//            break;
//        }
//
//        command = input[index++];
//    }
//    if (sum < budget){
//        console.log(`You bought ${counter} products for ${sum.toFixed(2)} leva.`);
//    } else {
//        console.log("You don't have enough money!");
//        console.log(`You need ${(sum - budget).toFixed(2)} leva!`);
//    }
//
//}
//touristShop(['153.20','Backpack','25.20','Shoes','54','Sunglasses','30','Stop'])
//touristShop(['54','Thermal underwear','24','Sunscreen','45'])

//-----------------------

//6. Ветеринарен Паркинг
//function vetParking (input){
//
//    let day = Number(input[0]);
//    let hours = Number(input[1]);
//    let price = 0;
//    let allSum = 0;
//
//    for (let a = 1; a <= day; a++){
//        let sumPerDay = 0;
//        for (let b = 1; b <= hours; b++){
//            if (a % 2 === 0 && b % 2 !== 0){
//                price = 2.50;
//                sumPerDay += price;
//            } else if (a % 2 !== 0 && b % 2 === 0){
//                price = 1.25;
//                sumPerDay += price;
//            } else {
//                price = 1.00;
//                sumPerDay += price;
//            }
//
//        }
//        let perDay = sumPerDay;
//        allSum += sumPerDay;
//        console.log(`Day: ${a} - ${perDay.toFixed(2)} leva`);
//        
//    }
//    console.log(`Total: ${allSum.toFixed(2)} leva`);
//}
//vetParking(['2','5'])