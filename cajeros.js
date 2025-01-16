function mostrarMenu() {
  console.log("==========================");
  console.log("           MENU        ");
  console.log("1. CREAR USUARIO");
  console.log("2. CONSIGNAR EN LA CUENTA");
  console.log("3. RETIRAR DINERO");
  console.log("4. PAGAR SERVICIOS");
  console.log("5. MOSTRAR MOVIMIENTOS");
  console.log("6. SALIR");
  console.log("==========================");
}

//================================ CREACION DE LA CUENTA =====================================
  function crearCuenta(cuentas, movimientos){
      const numeroCuenta = cuentas.length +1;

      const nuevaCuenta={
          "cc":prompt("ingrese su cc: "),
          "name":prompt("ingrese su nombre: "),
          "clave": prompt("ingrese su clave: "),
          "cta": cuentas,
          "saldo":0,
      };
      cuentas.push(nuevaCuenta);
  
      const nuevoMovimiento={
          "cta": numeroCuenta.toString(),
          "movimientos":[]
      };
      movimientos.push(nuevoMovimiento);
  
      alert("Su cuenta fue creada con exito")
      alert(`Su número de cuenta es: ${numeroCuenta}`)
      alert("su saldo acual es $0")
  };
  const cuentas=[];
  const movimientos=[];   

  console.log(cuentas);
  console.log(movimientos);
// CONSIGNACION

  function consignacion(cuentas, movimientos){
      const validacion= prompt("ingrece su documento o numero de cuenta");
      const cuentaEncontrada = cuentas.find(cuentas=>cuentas.cc === validacion || cuentas.cta === validacion);
      if (cuentaEncontrada){
          const monto = parseInt(prompt("ingrese el monto que desea = $ "));
          if(monto > cuentaEncontrada.saldo){
              alert("No tiene suficientes fondos para esta transaccion")
          }else if (monto <= 0){
              alert("No puedes retirar un valor negativo")
          }else{
              cuentaEncontrada.saldo += saldo
          }
      }
  };

let op = 0;
while(op!==6){
  mostrarMenu();
  op = parseInt(prompt("Ingrese una opccion: "))
  switch(op){
      case 1:
          crearCuenta(cuentas, movimientos);
      case 2:
          consignacion(cuentas, movimientos);
      case 6:
          break
      }
  }