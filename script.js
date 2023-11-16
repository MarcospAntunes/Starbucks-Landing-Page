const aside = document.querySelector('aside')
const coffe = document.querySelector('#coffe')
const greenCoffe = document.querySelector("#greenCoffe")
const lightPinkCoffe = document.querySelector("#lightPinkCoffe")
const pink = document.querySelector("#pinkCoffe")


function mudaCafeEBackground(e) {
    const target = e.id

    if(target === "greenCoffe") {
        coffe.src = 'assets/img1.png'
        aside.style.backgroundColor = "#057044"
        
        
    } else if (target === "lightPinkCoffe") {
        coffe.src = 'assets/img2.png'
        aside.style.backgroundColor = "#D46788"
        
        
    } else if (target === "pinkCoffe") {
        coffe.src = 'assets/img3.png'
        aside.style.backgroundColor = "#D851B1"
        
    }

    

}