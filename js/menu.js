// Burger Menu

let burgerMenu = document.querySelector(".burger-menu");
let nav = document.querySelector(".container header nav");

burgerMenu.addEventListener("click",()=> {
    nav.classList.toggle("active");
})

// Copyright

let footer = document.querySelector(".footer")
let copyRcon = document.createElement("div");
copyRcon.classList.add("copyright-container");
let allRights = document.createElement("p");
let desBy = document.createElement("p");
let nowDate = new Date().getFullYear();

allRights.textContent = `Copyright © ${nowDate} Hitaka. All rights reserved.`;
desBy.textContent = "Designed By Younes El";

copyRcon.appendChild(allRights);
copyRcon.appendChild(desBy);

copyRcon.style.textAlign = "center";
copyRcon.style.paddingBottom = "50px";
copyRcon.style.lineHeight = "2";

footer.appendChild(copyRcon);



// Menu Filter

let ul = document.querySelectorAll(".container .types ul li");
let suCard = document.querySelectorAll(".shushi-card")
let all = document.getElementById("all");
let sushi = document.getElementById("sushi");
let salade = document.getElementById("salade");
let obento = document.getElementById("obento");
let plates = document.getElementById("plates");

let sushF = document.querySelectorAll(".sushi");
let saladeF = document.querySelectorAll(".salade");
let obentoF = document.querySelectorAll(".obento");
let platesF = document.querySelectorAll(".plates");

all.addEventListener("click",()=> {
    suCard.forEach((e)=>{
        e.style.cssText = "display: flex;";
    })
    ul.forEach((e)=> {
        e.classList.remove("active");
        all.classList.add("active");
    })
})

sushi.addEventListener("click",()=> {
    suCard.forEach((e)=>{
        e.style.cssText = "display: none;";
    })
    sushF.forEach((e)=>{
        e.style.cssText = "display: flex;";
    })
    ul.forEach((e)=> {
        e.classList.remove("active");
        sushi.classList.add("active");
    })
})

salade.addEventListener("click",()=> {
    suCard.forEach((e)=>{
        e.style.cssText = "display: none;";
    })
    saladeF.forEach((e)=>{
        e.style.cssText = "display: flex;";
    })
    ul.forEach((e)=> {
        e.classList.remove("active");
        salade.classList.add("active");
    })
})

obento.addEventListener("click",()=> {
    suCard.forEach((e)=>{
        e.style.cssText = "display: none;";
    })
    obentoF.forEach((e)=>{
        e.style.cssText = "display: flex;";
    })
    ul.forEach((e)=> {
        e.classList.remove("active");
        obento.classList.add("active");
    })
})

plates.addEventListener("click",()=> {
    suCard.forEach((e)=>{
        e.style.cssText = "display: none;";
    })
    platesF.forEach((e)=>{
        e.style.cssText = "display: flex;";
    })
    ul.forEach((e)=> {
        e.classList.remove("active");
        plates.classList.add("active");
    })
})

// Open Close Cart

let shopIcon = document.querySelector(".shoping-icon");
shopIcon.onclick = ()=> shopIcon.classList.toggle("active");


// Add Dishes

let dishesContainer = document.querySelector(".dishes-container");
let slBtn = document.querySelectorAll(".select");

slBtn.forEach((e)=>{
    e.addEventListener("click",()=> {
        let myImg = e.parentElement.querySelector("img");
        let smallImg = document.createElement("img");
        smallImg.src = myImg.src;
        smallImg.style.width = "50px";
        let dishParent = document.createElement("div");
        dishParent.className = "dish";
        let divInfo = document.createElement("div");
        divInfo.className = "image-info";
        let foodName = document.createElement("p");
        foodName.textContent = e.parentElement.querySelector("h3").textContent
        let price = document.createElement("p");
        price.className = "prices";
        price.textContent = e.parentElement.querySelector("h4").textContent
        price.value = parseFloat(price.textContent).toFixed(2);
        console.log(price.value);
    
        let inpuT = document.createElement("input");
        inpuT.setAttribute("value","1");
        inpuT.setAttribute("min","1");
        inpuT.setAttribute("name","")
        inpuT.setAttribute("id","");
        inpuT.setAttribute("type","number");
        inpuT.className = "count";
    
        let rmbuTton = document.createElement("button");
        rmbuTton.className = "remove";
        rmbuTton.textContent = "remove";
    
        let quantT = document.createElement("div");
        quantT.className = "quantity";
    
        quantT.appendChild(inpuT);
        quantT.appendChild(rmbuTton);
    
        divInfo.appendChild(smallImg);
        divInfo.appendChild(foodName);
        dishParent.appendChild(divInfo);
        dishParent.appendChild(price);
        dishParent.appendChild(quantT);
    
        dishesContainer.appendChild(dishParent);
    })
})


// Remove Dishes

document.addEventListener("click",(e)=> {
    if (e.target.className === "remove") {
        e.target.parentElement.parentElement.remove()
    }
})


// Update Total

let mypTotal = document.querySelector(".to-pay")

const mutationObserver = new MutationObserver(e=> {
    if (dishesContainer.innerHTML === "") {
        mypTotal.textContent = "0.00$"
    } else {
        let theInput = document.querySelectorAll(".count");
        theInput.forEach((event)=> {
            const tstNonchang = event.parentElement.parentElement.querySelector(".prices");
            document.addEventListener("input",(e)=> {
                let fVar = parseFloat(e.target.parentElement.previousSibling.textContent).toFixed(2);
                if (e.target === event) {
                    if(e.target.value !== 1) {
                        console.log(tstNonchang);
                        const notChanging = e.target.parentElement.previousSibling.value;
                        e.target.parentElement.previousSibling.textContent = `${(notChanging*e.target.value).toFixed(2)}$`;
                    }
                }
                let priceS = dishesContainer.querySelectorAll(".prices");
                let sum = [];
                priceS.forEach((e)=> {
                    sum.push(parseFloat(e.textContent))
                })
                let generalSum = sum.reduce((a,c)=> a+c);
                mypTotal.textContent = generalSum.toFixed(2);
            })
        })
        let priceS = dishesContainer.querySelectorAll(".prices");
        let sum = [];
        priceS.forEach((e)=> {
            sum.push(parseFloat(e.textContent))
        })
        let generalSum = sum.reduce((a,c)=> a+c);
        mypTotal.textContent = generalSum.toFixed(2);
        let purchase = document.querySelector(".purchase");
        purchase.onclick = ()=> alert(`Your Total Price is ${mypTotal.textContent}$`);
    }
});

mutationObserver.observe(dishesContainer,{childList: true});










