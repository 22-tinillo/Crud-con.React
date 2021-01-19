const  myArray = [
     "uno",
     "dos",
     "tres",
     "cuatro"
 ];


 function mayuscula(actual,indice,tres){
    const completo = actual.toUpperCase()
    console.log(completo);
    console.log(indice);
    console.log(tres)

 }
let mivar = myArray.forEach(mayuscula)
 
 console.log(mivar)