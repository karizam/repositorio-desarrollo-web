let contador = 0

const numero = document.querySelector("span")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
const increase = document.querySelector("#increase")


increase.addEventListener("click",()=>{
    contador++;
    numero.innerHTML = contador
})

decrease.addEventListener("click",()=>{
    contador--;
    numero.innerHTML = contador
})

reset.addEventListener("click",()=>{
    contador = 0
    numero.innerHTML = contador
})
