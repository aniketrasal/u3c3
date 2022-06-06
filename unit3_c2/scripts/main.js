
function user(na,em,ad,am){
    this.name = na;
    this.email =em;
    this.address = ad;
    this.amount = am;
}

function  userdata(e){
    event.preventDefault();
    // console.log("aniket")

    let form = document.getElementById("form")
    let name = form.name.value
    let email = form.email.value
    let address = form.address.value
    let amount = form.amount.value

    let a = new user(name,email,address,amount)
    console.log(a);

    let adata = JSON.parse(localStorage.getItem("user"));

    adata.push(a);

    localStorage.setItem("user",JSON.stringify(adata));
}