let menuIcon=document.getElementById("btn-menu")
let menu=document.getElementById("menu-mobile")

menuIcon.addEventListener('click',()=>{
  menu.classList.add('open-menu')
})

menu.addEventListener('click',()=>{
  menu.classList.remove('open-menu')
})
