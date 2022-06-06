async function loaddata(){
    try{
        let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`

        let res=await fetch(url)

        let data=await res.json();
        adda(data[0].vouchers)
       //console.log(data[0].vouchers)
    }catch(err){
        console.log(err)
    }
}
loaddata()


function adda(data){
    var voucherslist=document.getElementById("voucher_list")
    data.map(function(el){
        var box=document.createElement('div')
        let img=document.createElement('img')
        img.src=el.image
        let title=document.createElement('h3')
        title.innerText=el.name
        let price=document.createElement('p')
        price.innerText=el.price
        let add=document.createElement('button')
        add.innerText="Add"
    box.append(img,title,price,add)
    voucherslist.append(box)

    })
}