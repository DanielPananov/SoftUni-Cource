//1. Церемония за Оскарите
//function oscarsCeremony (input){
//
//    let budget = Number(input[0]);
//    let figurine = 0;
//    let ketaring = 0;
//    let sound = 0;
//
//    figurine = budget - budget * 30 / 100;
//    ketaring = figurine - figurine * 15 / 100;
//    sound = ketaring / 2;
//    let allSum = budget + figurine + ketaring + sound
//    console.log(allSum.toFixed(2));
//    
//   
//
//}
//oscarsCeremony(['3500'])

//----------------

//2.  Скоростно изкачване
//function mountainRun (input){
//
//    let record = Number(input[0]);
//    let distance = Number(input[1]);
//    let secForMeter = Number(input[2]);
//
//    let allTime = distance * secForMeter;
//    let slowly = Math.floor(distance / 50) * 30;
//    let fullTime = allTime + slowly;
//    
//    if (record > fullTime){
//        console.log(`Yes! The new record is ${fullTime.toFixed(2)} seconds.`);
//    } else {
//        console.log(`No! He was ${(fullTime - record).toFixed(2)} seconds slower.`);
//    }
//
//
//}
//mountainRun(['10164','1400','25'])

//------------------

//3. Билети за снукър
//function worldSnookerChampionship (input){
//
//    let stage = input[0];
//    let typeTicket = input[1];
//    let countTicket = Number(input[2]);
//    let picture = input[3];
//    let price = 0;
//
//    switch (typeTicket){
//        case "Standard": 
//        if (stage === "Quarter final"){
//            price = 55.50;
//        } else if (stage === "Semi final"){
//            price = 75.88;
//        } else if (stage === "Final"){
//            price = 110.10;
//        }
//        break;
//        case "Premium": 
//        if (stage === "Quarter final"){
//            price = 105.20;
//        } else if (stage === "Semi final"){
//            price = 125.22;
//        } else if (stage === "Final"){
//            price = 160.66;
//        }
//        break;
//        case "VIP":
//            if (stage === "Quarter final"){
//                price = 118.90;
//            } else if (stage === "Semi final"){
//                price = 300.40;
//            } else if (stage === "Final"){
//                price = 400;
//            } 
//        break;
//    }
//    
//    let allSum = countTicket * price;
//
//    if (allSum <= 4000 && allSum > 2500 && picture === "Y"){
//        allSum = allSum - allSum * 10 / 100;
//        allSum += countTicket * 40;
//    }
//
//    if (allSum <= 4000 && allSum > 2500 && picture === "N"){
//        allSum = allSum - allSum * 10 / 100;
//    }
//
//    if (allSum <= 2500 && picture === "Y"){
//        allSum += countTicket * 40;
//    } else {
//        allSum;
//    }
//    
//    if (allSum > 4000){
//        allSum = allSum - allSum * 25 / 100;
//    }
//    
//    console.log(allSum.toFixed(2));
//}
////worldSnookerChampionship(['Final','Premium','25','Y'])
////worldSnookerChampionship(['Quarter final','Standard','11','N'])
//worldSnookerChampionship(['Semi final','VIP','9','Y'])

//---------------------

//4. Оскари
//function oscars (input){
//
//    let nameActior = input[0];
//    let pointsAcademy = Number(input[1]);
//    let numberJuri = Number(input[2]);
//    let index = 3;
//    let allPoints = 0;
//    let isEnoghPoints = false;
//
//    for (let i = 0; i < numberJuri; i++){
//        let nameJuri = input[index++];
//        let pointsJuri = Number(input[index++]);
//        let longName = (nameJuri.length * pointsJuri) / 2;
//        allPoints = longName + pointsAcademy;
//        pointsAcademy = allPoints;
//
//        if (pointsAcademy > 1250.5){
//            isEnoghPoints = true;
//            break;
//        }
//
//    }
//    if (isEnoghPoints){
//       console.log(`Congratulations, ${nameActior} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`); 
//    } else {
//        console.log(`Sorry, ${nameActior} you need ${(1250.5 - pointsAcademy).toFixed(1)} more!`);
//    }
//    
//    
//}
//oscars(['Zahari Baharov','205','4','Johnny Depp','45','Will Smith','29','Jet Lee','10','Matthew Mcconaughey','39'])
//oscars(['Sandra Bullock','340','5','Robert De Niro','50','Julia Roberts','40.5','Daniel Day-Lewis','39.4','Nicolas Cage','29.9','Stoyanka Mutafova','33'])

//---------------------

//5. Ремонт
//function renovation (input){
//
//    let width = Number(input[0]);
//    let height = Number(input[1]);
//    let percent = Number(input[2]);
//    let index = 3
//    let command = input[index++];
//    let isPainted = false;
//
//    let metersRoom = (width * height * 4);
//    let wallToPain = Math.ceil(metersRoom - metersRoom * percent / 100);
//
//    while (command !== "Tired!"){
//        let littersPain = Number(command);
//        wallToPain = wallToPain - littersPain; 
//
//        
//        if (wallToPain <= 0){
//            isPainted = true;
//            break;
//        }
//        
//        command = input[index++];
//    } 
//    if (wallToPain < 0){
//        console.log(`All walls are painted and you have ${Math.abs(wallToPain)} l paint left!`);
//    } else if (wallToPain === 0) {
//        console.log("All walls are painted! Great job, Pesho!");
//    }
//
//    if (command === "Tired!"){
//        console.log(`${wallToPain} quadratic m left.`);
//    }
// 
//}
//renovation(['3','5','10','2','3','4','Tired!'])
//renovation(['2','3','25','6','7','8'])

6. Баркод Генератор
function barcodeGenerator (input){

    let index = 0;
    let startNumber = Number(input[index++]);
    let endNumber = Number(input[index]);
    let buffer = '';
    let strStartNumber = '' + startNumber;
    let strEndNumber = '' + endNumber;

    for (let a = strStartNumber[0]; a <= strEndNumber[0]; a++) {
        for (let b = strStartNumber[1]; b <= strEndNumber[1]; b++) {
            for (let c = strStartNumber[2]; c <= strEndNumber[2]; c++) {
                for (let d = strStartNumber[3]; d <= strEndNumber[3]; d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                       buffer += '' + a + b + c + d + " "

                    }
                }
            }
        }
    }
    console.log(buffer);
}
barcodeGenerator(["2345","6789"])
