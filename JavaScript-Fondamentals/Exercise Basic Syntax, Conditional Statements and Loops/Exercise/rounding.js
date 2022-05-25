function rounding(num, precision){

    if (precision > 15){
        precision = 15;
    }

    let decimalNum = num.toFixed(precision);
    console.log(parseFloat(decimalNum));
}

rounding(10.5,3)