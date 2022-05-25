//1.	Конвертор: USD към BGN
//function convertorToBGN(input){
//
//    let usdToBGN = Number(input[0]);
//    let sum = usdToBGN * 1.79549;
//
//    console.log(sum);
//}
//convertorToBGN(["22"])
//convertorToBGN(["100"])


//---------------------------

//2.	Конвертор: от радиани в градуси
//function convertGradus(input){
//
//    let radian = Number(input[0]);
//    let gradus = radian * 180 / Math.PI;
//
//    console.log(gradus);
//
//}
//convertGradus(["3.1416"])
//convertGradus(["6.2832"])


//-----------------------------------

//3.	Калкулатор депозити
//function deposit(input){
//
//    let depositSum = Number(input[0]);
//    let deadLine = Number(input[1]);
//    let percent = Number(input[2]);
//
//    let lihvaYear = depositSum * (percent / 100);
//    let lihvaMesec = lihvaYear / 12;
//
//    let sum = depositSum + deadLine * lihvaMesec;
//    console.log(sum);
//
//}
//deposit(["200 ","3","5.7"])
//deposit(["2350","6 ","7 "])

//---------------------------------

//4.	Задължителна литература
//function book(input){
//
//    let numPage = Number(input[0]);
//    let pageForHour = Number(input[1]);
//    let days = Number(input[2]);
//
//    let allTimeBook = numPage / pageForHour;
//    let timeForDay = allTimeBook / days;
//
//    console.log(timeForDay);
//
//}
//book(["212 ","20 ","2 "])
//book(["432 ","15 ","4 "])


//----------------------------------

//5.	Учебни материали
//function school(input){
//
//    let pens = Number(input[0]);
//    let markers = Number(input[1]);
//    let literClean = Number(input[2]);
//    let discount = Number(input[3]);
//
//    let sumPens = pens * 5.80;
//    let sumMarkers = markers * 7.20;
//    let sumClean = literClean * 1.20;
//    let allSum = sumPens + sumMarkers + sumClean;
//    let budget = allSum - (allSum * (discount / 100));
//
//    console.log(budget);
//
//}
//school(["2 ","3 ","4 ","25 "])
//school(["4 ","2 ","5 ","13 "])


//----------------------------------------

//6.	Пребоядисване
//function painting(input){
//
//    let nylon = Number(input[0]);
//    let paint = Number(input[1]);
//    let thinner = Number(input[2]);
//    let hours = Number(input[3]);
//
//    let sumNylon = (nylon + 2) * 1.50;
//    let sumPaint = (paint + (paint *0.10)) * 14.50 ;
//    let sumThinner = thinner * 5.00; 
//    let packet = 0.40;
//    let sumMaterials = sumNylon + sumPaint + sumThinner + packet;
//    let sumMaistor = (sumMaterials * 0.30) * hours;
//    let budget = sumMaterials + sumMaistor;
//
//    console.log(budget);
//
//   
//}
//painting(["10 ","11 ","4 ","8 "])
//painting(["5 ","10 ","10 ","1 "])


//---------------------------

//7.	Доставка на храна
//function delivery(input){
//
//    let chickenMenu = Number(input[0]);
//    let fishMenu = Number(input[1]);
//    let veganMenu = Number(input[2]);
//    let delivery = 2.50;
//
//    let sumMenu = (chickenMenu * 10.35) + (fishMenu * 12.40) + (veganMenu * 8.15);
//    let budget = (sumMenu + (sumMenu * 0.20)) + delivery;
//
//    console.log(budget);
//   
//
//}
//delivery(["2 ","4 ","3 "])
//delivery(["9 ","2 ","6 "])


//-------------------------------

//8.	Баскетболно оборудване
//function basketball(input){
//
//    let sumOfYears = Number(input[0]);
//    let sneakers = sumOfYears - (sumOfYears * 0.40);
//    let equip = sneakers - (sneakers * 0.20);
//    let ball = equip / 4;
//    let accsesori = ball / 5;
//
//    let sum = sumOfYears + sneakers + equip + ball + accsesori;
//
//    console.log(sum);
//
//}
//basketball(["365"])
//basketball(["550"])


//--------------------------

//9.	Аквариум
//function aqarium(input){
//
//    let lenght = Number(input[0]);
//    let width = Number(input[1]);
//    let height = Number(input[2]);
//    let percent = Number(input[3]);
//
//    let volume = (lenght * width * height) * 0.001;
//    let litters = volume - (volume * (percent / 100));
//
//    console.log(litters);
//
//}
//aqarium(["85 ","75 ","47 ","17 "])
//aqarium(["105 ","77 ","89 ","18.5 "])