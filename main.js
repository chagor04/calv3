const display=document.getElementById('pantalla')
const botones=document.querySelector('.inferior')

let numeroa=""
const array_pro=[]
let x=[]

botones.addEventListener('click',(e)=>{
    if(e.target.id=='suma'){
        pantalla.textContent +="+"
    }if(e.target.id=='rest'){
        pantalla.textContent +="-"
    }if(e.target.id=='mult'){
        pantalla.textContent +="*"
    }if(e.target.id=='divi'){
        pantalla.textContent +="/"
    }if(e.target.id=='btn_1'){
        pantalla.textContent +="1"
    }if(e.target.id=='btn_2'){
        pantalla.textContent +="2"
    }if(e.target.id=='btn_3'){
        pantalla.textContent +="2"
    }if(e.target.id=='btn_4'){
        pantalla.textContent +="4"
    }if(e.target.id=='btn_5'){
        pantalla.textContent +="5"
    }if(e.target.id=='btn_6'){
        pantalla.textContent +="6"
    }if(e.target.id=='btn_7'){
        pantalla.textContent +="7"
    }if(e.target.id=='btn_8'){
        pantalla.textContent +="8"
    }if(e.target.id=='btn_9'){
        pantalla.textContent +="9"
    }if(e.target.id=='btn_0'){
        pantalla.textContent +="0"
    }
        
    
    if(e.target.id=='igual'){
        numeroa+=pantalla.textContent
        console.log(numeroa)
        array_pro = numeroa.split(/([-+*/])/)
        console.log(array_pro)

        
        




    }
    if(e.target.id=='limpiar'){
        operando.textContent=""
        display.textContent=""
        num1.value=""
    }
})