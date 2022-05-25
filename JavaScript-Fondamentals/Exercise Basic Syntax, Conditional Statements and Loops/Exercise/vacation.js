function vacation(num, type, day) {

    let price = 0;

    switch (type) {
        case "Students":
            if (day === "Friday") {
                price = 8.45 * num;
                if (num >= 30) {
                    price *= 0.85;
                }
            } else if (day === "Saturday") {
                price = 9.80 * num;
                if (num >= 30) {
                    price *= 0.85;
                }
            } else if (day === "Sunday") {
                price = 10.46 * num;
                if (num >= 30) {
                    price *= 0.85;
                }
            }
            ; break
        case "Business":
            if (num >= 100) {
                if (day === "Friday") {
                    price = 10.90 * (num - 10);
                } else if (day === "Saturday") {
                    price = 15.60 * (num - 10);  
                } else if (day === "Sunday") {
                    price = 16 * (num - 10);
                }
            } else {
                if (day === "Friday") {
                    price = 10.90 * num;
                } else if (day === "Saturday") {
                    price = 15.60 * num;
                } else if (day === "Sunday") {
                    price = 16 * num;
                }
            }
            ; break
        case "Regular":
            if (day === "Friday") {
                price = 15 * num;
                if (num >= 10 && num <= 20) {
                    price *= 0.95;
                }
            } else if (day === "Saturday") {
                price = 20 * num;
                if (num >= 10 && num <= 20) {
                    price *= 0.95;
                }
            } else if (day === "Sunday") {
                price = 22.50 * num;
                if (num >= 10 && num <= 20) {
                    price *= 0.95;
                }
            }
            ; break
    }
    console.log(`Total price: ${price.toFixed(2)}`)

}

vacation(100, "Business", "Saturday")