function login(input) {

    let userName = input[0];
    let index = 1;
    let password = input[index];
    index++;
    let print = '';
    let counter = 0;

    for (let i = userName.length - 1; i >= 0; i--) {
        print += userName[i] + '';

    }

    while (password !== print) {
        counter++;
        if (counter >= 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.")
        password = input[index];
        index++
    }
    
    if (password === print) {
        console.log(`User ${userName} logged in.`)
    }

}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])