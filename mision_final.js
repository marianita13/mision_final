var ranking=[{nombre:"Leidy",puntos:80},{nombre:"Andrea",puntos:63},{nombre:"Valentina",puntos:55},{nombre:"Sergio",puntos:42},{nombre:"Ronald",puntos:38},{nombre:"Luis",puntos:30}]
let suma=0
let suma1=0
let multiplicacion=0
let nuevo=[]
let b1=false
let b2=false
let b3=false


const opciones=document.getElementById('opciones') // Las opciones se imprime en consola
const mostar=document.getElementById('guardar') // Oprimir mostrar para mostar en consola

mostar.addEventListener('click',()=>{
    let opcion=opciones.value
    if (opcion==1){
        console.log(ranking)
    }else if (opcion==2){
        nuevo=(nuevo.concat(ranking))
        nuevo.splice(0,0,{nombre:"Yanires",puntos:93})
        nuevo.splice(2,0,{nombre:"Gustavo",puntos:77})
        nuevo.splice(3,0,{nombre:"jamile",puntos:77})
        let sumas=ranking[3].puntos;
        suma1=sumas+14
        nuevo.splice(5,0,{nombre:"sergio",puntos:suma1})
        nuevo.splice(7,1)
        nuevo.pop(nuevo[9])
        b1=true
    console.log(nuevo);
    }else if (opcion==3){
        if (b1==true){
        console.log(nuevo.reverse())
        b2=true
        }else{
            alert('Primero selecciona el ranking actualizado')
        }
    }else if (opcion==4){
        if (b1==true){
        for (i=0;i<nuevo.length;i++){
            let promedio=nuevo[i].puntos;
            suma+=promedio
        }
        console.log('El promedio de los puntos es: ') 
        console.log(parseInt(suma/8))
    }else{
        alert('Primero selecciona el ranking actualizado')
    }
    }else if (opcion==5){
        if (b1==true && b2==true){
        nuevo.reverse()
        let mayores=nuevo.filter(el =>el.puntos>50).map(el => el.nombre)
        console.log(`Puntos mayores de 50: ${mayores}`);
        b3=true
        }else{
            alert('Primero selecciona el ranking actualizado y el ranking inverso')
        }
    }else if (opcion==6){
        if (b1==true && b2==true && b3==true){
        let comodin=ranking[5].puntos;
        multiplicacion=comodin*1.3
        nuevo.splice(7,0,{nombre:"Luis",puntos:multiplicacion})
        console.log(nuevo)
        }else{
            alert('Primero selecciona el ranking actualizado, el ranking inverso y los participantes mayores a 50 ')
        }
    }else if (opcion==7){
        console.log(`Nombres:

Mariana Acero
Cielo Mariño`)
    }
})