//1. Change бюро
//function changeBureau (input){
//
//    let numberButcoin = Number(input[0]);
//    let numberUna = Number(input[1]);
//    let percent = Number(input[2]);
//    let numberDollar = 0;
//
//    numberButcoin *= 1168;
//    numberUna *= 0.15;
//    numberDollar = numberUna * 1.76;
//    
//    let sumEuro = numberButcoin + numberDollar;
//    sumEuro /= 1.95;
//    let commision = sumEuro * percent / 100;
//    let result = sumEuro - commision;
//    console.log(result.toFixed(2));
//    
//
//}
//changeBureau(["1","5","5"])


//--------------------------


//2. Сафари
//function safari (input){
//
//    let budget = Number(input[0])
//    let litterGas = Number(input[1]);
//    let day = input[2];
//    
//    let priceGas = litterGas * 2.10;
//    let priceAll = priceGas + 100;
//    
//    if (day === "Saturday"){
//        priceAll = priceAll - priceAll * 10 / 100;
//    }
//    if (day === "Sunday"){
//        priceAll = priceAll - priceAll * 20 / 100;
//    }
//    if (budget > priceAll){
//        console.log(`Safari time! Money left: ${(budget - priceAll).toFixed(2)} lv. `);
//    } else {
//        console.log(`Not enough money! Money needed: ${(priceAll - budget).toFixed(2)} lv.`);
//    }
//
//}
//safari(["1000","10","Sunday"])

//-----------------------

//3. Филмова премиера
//function filmPremiere (input){
//
//    let filmName = input[0];
//    let packet = input[1];
//    let nmberTickets = Number(input[2]);
//    let price = 0;
//
//    switch (filmName){
//        case "John Wick": 
//        if (packet === "Drink"){
//            price = nmberTickets * 12;
//        } else if (packet === "Popcorn"){
//            price = nmberTickets * 15;
//        } else if (packet === "Menu"){
//            price = nmberTickets * 19;
//        }
//        break;
//        case "Star Wars": 
//        if (packet === "Drink" && nmberTickets >= 4){
//            price = nmberTickets * 18;
//            price = price - price * 30 / 100;
//        } else if (packet === "Drink") {
//            price = nmberTickets * 18;
//        } else if (packet === "Popcorn" && nmberTickets >= 4){
//            price = nmberTickets * 25;
//            price = price - price * 30 / 100;
//        } else if (packet === "Popcorn"){
//            price = nmberTickets * 25;
//        } else if (packet === "Menu" && nmberTickets >= 4){
//            price = nmberTickets * 30;
//            price = price - price * 30 / 100;
//        } else if (packet === "Menu"){
//            price = nmberTickets * 30;
//        }
//        break;
//        case "Jumanji": 
//        if (packet === "Drink" && nmberTickets === 2){
//            price = nmberTickets * 9;
//            price = price - price * 15 / 100;
//        } else if (packet === "Drink"){
//            price = nmberTickets * 9;
//        } else if (packet === "Popcorn" && nmberTickets === 2){
//            price = nmberTickets * 11;
//            price = price - price * 15 / 100;
//        } else if (packet === "Popcorn"){
//            price = nmberTickets * 11;
//        } else if (packet === "Menu" && nmberTickets === 2){
//            price = nmberTickets * 14;
//            price = price - price * 15 / 100;
//        }else if (packet === "Menu"){
//            price = nmberTickets * 14;
//        }
//        break;
//    }
//    console.log(`Your bill is ${price.toFixed(2)} leva.`);
//
//}
//filmPremiere (['Star Wars','Drink','10'])
//filmPremiere (["Jumanji","Drink","2"])
//filmPremiere (["John Wick","Drink","6"])



//--------------------------------

//4. Футболно състезание
//function footballTournament (input){
//
//    let nameTeam = input[0];
//    let allGame = Number(input[1]);
//    let index = 2;
//    let W = 3;
//    let D = 1;
//    let L = 0;
//    let win = 0;
//    let dull = 0;
//    let lose = 0;
//    let allSumPoints = 0;
//    let percentWin = 0;
//    let counterWin = 0;
//    let counterDull = 0;
//    let counterLose = 0;
//
//    for (let i = 0; i < allGame; i++){
//        let result = input[index++];
//        if (result === "W"){
//            
//            counterWin++;
//            win = counterWin * W;
//        }
//        if (result === "D"){
//            
//            counterDull++;
//            dull = counterDull * D;
//        }
//        if (result === "L"){
//            
//            counterLose++;
//            lose = counterLose;
//        }
//    }
//    allSumPoints = win + dull;
//    percentWin = counterWin / allGame * 100;
//    
//    if (allGame > 0){
//        console.log(`${nameTeam} has won ${allSumPoints} points during this season.`);
//        console.log("Total stats:");
//        console.log(`## W: ${counterWin}`);
//        console.log(`## D: ${counterDull}`);
//        console.log(`## L: ${counterLose}`);
//        console.log(`Win rate: ${percentWin.toFixed(2)}%`);
//    } else {
//        console.log(`${nameTeam} hasn't played any games during this season.`);
//    }
//
//}
//footballTournament(["Liverpool","10","W","D","D","W","L","W","D","D","W","W"])
//footballTournament(["Barcelona","7","W","D","L","L","W","W","D"])


//-----------------

//5. Най-добър играч
//function bestPlayer (input){
//
//    let index = 0;
//    let command = input[index++];
//    let maxGoals = Number.MIN_SAFE_INTEGER;
//    let theBestPlayer = "";
//    let isManyGoals = false;
//
//    while (command !== "END"){
//        let namePlayer = command;
//        let numberGoals = Number(input[index++]);
//        
//        if (maxGoals < numberGoals){
//            maxGoals = numberGoals;
//            theBestPlayer = namePlayer;
//        }
//        
//        if (maxGoals >= 10){
//            isManyGoals = true;
//            break;
//        }
//        
//
//        command = input[index++];
//    }
//    console.log(`${theBestPlayer} is the best player!`);
//    if (maxGoals >= 3){
//        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
//    } 
//    if (maxGoals < 3){
//        console.log(`He has scored ${maxGoals} goals.`);
//    }
//}
//bestPlayer(["Neymar", "2","Ronaldo","1","Messi","3","END"])
//bestPlayer(["Silva","5","Harry Kane","10"])


//---------------------



function tournamentOfChristmas(input) {

    let day = Number(input[0]);
    let index = 1;
    let command = input[index++];
    let winPrice = 20;
    let allSum = 0;
    let finalSum = 0;
    let sumOfWin = 0;
    let sumOfLose = 0;
    let sumOfDayWin = 0;
    let sumOfDayLose = 0;
    
    for (let i = 1; i <= day; i++) {
        let sumOnDay = 0;
        let winOnDay = 0;
        let loseOnDay = 0;
        let sumPercent = 0;
        while (command !== "Finish") {
            let gameType = command;
            let winOrLose = input[index++];

            if (winOrLose === "win") {
                sumOnDay += winPrice;
                winOnDay++;
            }
            if (winOrLose === "lose") {
                loseOnDay++;
            }

            command = input[index++];
        }
        
        if (winOnDay > loseOnDay){
            sumPercent = sumOnDay + sumOnDay * 10 / 100;
            sumOfDayWin += sumPercent;
        }
        if (winOnDay < loseOnDay){
            sumOfDayLose += sumOnDay;
        }
        allSum = sumOfDayWin + sumOfDayLose;
        
        if (command === "Finish"){
            command = input[index++];
        }
        sumOfWin += winOnDay;
        sumOfLose += loseOnDay;
        
        
        
    } 
    if (sumOfWin > sumOfLose){
        finalSum = allSum + allSum * 20 / 100;
        console.log(`You won the tournament! Total raised money: ${finalSum.toFixed(2)}`);
    } 

    if (sumOfLose > sumOfWin) {
        console.log(`You lost the tournament! Total raised money: ${allSum.toFixed(2)}`);
    }

}
tournamentOfChristmas(["2", "volleyball", "win", "football", "lose", "basketball", "win", "Finish", "golf", "win", "tennis", "win", "badminton", "win", "Finish"])
tournamentOfChristmas(["3","darts","lose","handball","lose","judo","win","Finish","snooker","lose","swimming","lose","squash","lose","table tennis","win","Finish","volleybal","win","basketball","win","Finish"])


