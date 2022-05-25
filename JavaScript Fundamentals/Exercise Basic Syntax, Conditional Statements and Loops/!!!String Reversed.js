function solve(){

    let name = "Daniel";
    let print = '';

    for(let i = name.length - 1; i >= 0; i--){
        print += name[i];
    }
    console.log(print);
}
solve()