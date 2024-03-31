(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  /*const l: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];*/
  const var1 = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(var1);

  //-------------------------------------------------------------

  //Lista de compras de un carrito
  /*const var2: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];*/
  const var2 = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(var2);

  //-------------------------------------------------------------

  //funcion para sumar mas 3 a un numero y retornarlo
  /*const fff = (asdfg: number): number => {
    return asdfg + 3;
  }*/
  const var3 = (numero : number) => {
    return numero + 3;
  };

  console.log(var3(2));

  //-------------------------------------------------------------
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  /*function capi(w: string): string {
    w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().toString().concat(w.substring(1, w.length));
    return c;
  }*/
  function capi(w: string): string {
    w = w.toLowerCase();    
    const c = w.charAt(0).toUpperCase().concat(w.substring(1));
    return c;
  } 

  console.log(capi("capricorn"));

  //-------------------------------------------------------------
  
  //variable que alerta en caso de que algun evento suceda
  /*let www: boolean = false;
  if(www) console.log('event');*/
  let www: boolean = true;
  
  if (www) {
    console.log('event');
  }


  //-------------------------------------------------------------

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  /*let c: boolean = true;
  if(c) console.log('welcome');*/
  let c = true;

  if (c) {
    console.log('welcome');
  }

  //-------------------------------------------------------------
  

  //variable para hallar el promedio de 3 numeros
  /*const sudo: number = (1 + 2 + 3) / 3;
  console.log(sudo);*/
  const sudo = (1 + 2 + 3) / 3;

  console.log(sudo);

  //-------------------------------------------------------------
  
  //variable que almacena el valor de PI
  /*let pizza: number = 3.141592654;

  console.log(pizza);*/
  const PI = 3.141592654;

  console.log(PI);


  //-------------------------------------------------------------
  

  //variabel que controla si un archivo es modificable 
  /*let Bv: boolean = false;

  if(Bv) console.log('edit this file?');*/
  const canEditFile = false;

  if (canEditFile) {
    console.log('Puede editar este archivo.');
  }   else {
    console.log('No puede editar este archivo.');
  }

  //-------------------------------------------------------------
  
  //variable para almacenar el valor de e
  //const eioua: number = 2.718281828; 
  const eulerNumber = 2.718281828;
  console.log(eulerNumber);

})();