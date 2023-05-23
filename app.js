/*  CLASE : PROGRAMACION ORIENTADA A OBJETOS

/*   EJERCICIOS  */

/*  crear una clase de tipo vehiculo.
    crear minimo 5 propiedaes y 3 Metodos
    que los metodos interactuen con las propiedades.

   
 /*   class Vehiculo {
        constructor (marca,modelo,color,año,tipocombustible) {
            this.marca =marca;
            this.modelo =modelo;
            this.color =color;
            this.año =año;
            this.tipocombustible =tipocombustible;       
        }

        tipocombustible1 () {
            console.log('El vehiculo utiliza ' + this.tipocombustible) ;
        }

        marcaVe () {
            console.log('la marca del vehiculo es ' + this.marca);
        }

        modeloVe () {
            console.log('El modelo del vehiculo es ' + this.modelo);
        }
    };

    /*const tipo = new Vehiculo ('toyota','sedan','rojo','2023','gasolina');
    console.log(tipo.tipocombustible1());*/

    /*const marcaVehi = new Vehiculo ('toyota','sedan','rojo','2023','gasolina');
    console.log(marcaVehi.marcaVe());*/

    /*const modeloVehi = new Vehiculo ('toyota','sedan','rojo','2023','gasolina');
    console.log(modeloVehi.modeloVe());*/


    
 /*   Agregar ejemplo de cada uno de los conceptos Base
      de poo. Herencia,polimorfismo,abstraccion y
      encapsulamiento. */


//    EJEMPLO CLASE : HERENCIA

/*    class auto extends Vehiculo {
        constructor (marca,modelo,color,año,tipocombustible) {
        super (marca,modelo,color,año,tipocombustible);
        this.llantasnuevas = false;
    }
        colocarllantasnuevas(value) {
                this.llantasnuevas = value ;
    }        
}
    const auto1 = new auto ('toyota','sedan','rojo','2023','gasolina')
    console.log(auto1);
    console.log(auto1.colocarllantasnuevas());   
    auto1.colocarllantasnuevas(true);
    console.log(auto1); */



//    EJEMPLO CLASE : ABSTRACCION
//
//  SON LAS PROPIEDAES Y METODOS QUE SE OBTIENE DE UN DETERMINADO OBJETO.
//  COMO SON : MARCA,MODELO,COLOR ,AÑO,TIPOCOMBUSTIBLE, LLANTAS

/*class auto extends Vehiculo {
    constructor (marca,modelo,color,año,tipocombustible) {
    super (marca,modelo,color,año,tipocombustible);
    this.llantasnuevas = false;
}
    colocarllantasnuevas(value) {
            this.llantasnuevas = value ;
}        
}
const auto1 = new auto ('toyota','sedan','rojo','2023','gasolina')
console.log(auto1);
console.log(auto1.colocarllantasnuevas());   
auto1.colocarllantasnuevas(true);
console.log(auto1);*/



//    EJEMPLO CLASE : POLIMORFISMO
//
//  ES SOBREESCRIBIR LOS METODOS DE LA CLASE DEL PADRE.
//  

/*class Moto extends Vehiculo {
        constructor (marca,modelo,color,año,tipocombustible) {
        super (marca,modelo,color,año,tipocombustible);
        this.llantasnuevas = false;
    }
    colocarllantasnuevas(value) {
            this.llantasnuevas = value ;
    } 
    tipocombustible1 () {
        console.log('la moto utiliza ' + this.tipocombustible) ;
    }
};
const Moto1 = new Moto ('toyota','sedan','rojo','2023','gasolina')
console.log(Moto1.tipocombustible1());   */



//    EJEMPLO CLASE : ENCAPSULAMIENTO

class camioneta extends Vehiculo {
    #precioAvender = 15000 ;

    constructor (marca,modelo,color,año,tipocombustible) {
    super (marca,modelo,color,año,tipocombustible);
}
    get getprecioAvender() {
            return this.#precioAvender ;
} 
    set setprecioAvender(value) {
         return (this.#precioAvender = value);
}
}
const camioneta1 = new camioneta ('toyota','sedan','rojo','2023','gasolina');
console.log('Precio actual de la camioneta ' + camioneta1.getprecioAvender + ' dolares'); 
camioneta1.setprecioAvender = 10000 ;
console.log('Precio nuevo de la camioneta ' + camioneta1.getprecioAvender + ' dolares');   

