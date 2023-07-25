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

