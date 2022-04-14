
class Ui {
    constructor(){
        this.navBtn = document.querySelector('.bars')
        this.navContainer = document.querySelector('nav ul')
 }
showNav(){
 this.navBtn.addEventListener('click', () =>{
     console.log(this.navContainer)
     this.navContainer.classList.toggle('displayNav')
 })
}

}

//  run code

function init(){
    const ui = new Ui()
ui.showNav()

}


init()