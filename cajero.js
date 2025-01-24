
  
  //================================ CREACION DE LA CUENTA =====================================
    function crearCuenta(cuentas, movimientos){
  
        const nuevaCuenta={
            "cc":prompt("Ingrese su cc: "),
            "name":prompt("Ingrese su nombre: "),
            "clave": prompt("Ingrese su clave: "),
            "cta": prompt("Ingrese un numero de cueta"),
            "saldo":0,
        };
        cuentas.push(nuevaCuenta);
        
        const nuevoMovimiento={
            "cta": nuevaCuenta.cta,
            "movimientos":[]
        };

        movimientos.push(nuevoMovimiento);
        
        localStorage.setItem("cuentas",JSON.stringify(cuentas));
        localStorage.setItem("movimientos",JSON.stringify(movimientos));

        alert("Su cuenta fue creada con exito")
        alert(`Su número de cuenta es: ${nuevaCuenta["cta"]}`)
        alert("su saldo acual es $0")
    }; 
    
    
    const cuentas = JSON.parse(localStorage.getItem('cuentas')) || [];
    const movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];
  // CONSIGNACION
  
    function consignacion(cuentas, movimientos){
        const validacion= prompt("ingrece su documento o numero de cuenta");
        const cuentaEncontrada = cuentas.find(cuentas=>cuentas.cc === validacion || cuentas.cta === validacion);
        if (cuentaEncontrada){
            const monto = parseInt(prompt("ingrese el monto que desea consignar = $ "));
            if(monto > 0){
                cuentaEncontrada.saldo += monto;
            movimientos.push({
                tipo:"Consignacion",
                cuenta: cuentaEncontrada.cta,
                monto:monto,
            });
            localStorage.setItem('cuentas',JSON.stringify(cuentas));
            localStorage.setItem('moviemintos',JSON.stringify(movimientos));

            alert("Consignacio Exitosa");
         }else{
            alert("El monto debe ser mayor a cero");
         }
        }else{
            alert("Cuenta no encontrada");
        }
    };
  //            Retiro 
    function RetirarDinero(cuentas,retiros){
        const validacion= prompt("ingrece su documento o numero de cuenta");
        const cuentaEncontrada = cuentas.find(cuentas=>cuentas.cc === validacion || cuentas.cta === validacion);
        if (cuentaEncontrada){
            const monto = parseInt(prompt("ingrese el monto que desea Retirar = $ "));
            if(monto > 0){
                cuentaEncontrada.saldo -= monto;
            retiros.push({
                tipo:"Retiro",
                cuenta: cuentaEncontrada.cta,
                monto:monto,
            });
            localStorage.setItem('cuentas',JSON.stringify(cuentas));
            localStorage.setItem('retros',JSON.stringify(retiros));

            alert("Retiro Exitoso");
         }else{
            alert("El monto debe ser mayor a cero");
         }
        }else{
            alert("Cuenta no encontrada");
        }
    };
//          Pago de Servicios

function pagoServicio(cuentas, Pagos){
    const documento = prompt("Ingrese su documento");
    const clave = prompt("Ingrese su clave");
    const servicio = prompt("Seleccione el servicio:\n1. Energía\n2. Agua\n3. Gas");
  
    const cuenta = cuentas.find(cuenta => cuenta.cc === documento && cuenta.clave === clave);
  
    if (cuenta) {
      const referencia = prompt("Ingrese su referencia de pago");
      const saldo = parseInt(prompt("Ingrese el monto a pagar:"));
  
      if (saldo > 0) {
        cuenta.saldo -= saldo;
  
        // Buscar el movimiento correspondiente
        const movimiento = Pagos.find(movimiento => movimiento.cta === cuenta.cta);
  
        // Agregar el movimiento
        movimiento.Pagos.push({
          tipo: "Pago de servicio",
          referencia: referencia,
          descripcion: `Se pagó el recibo de ${servicio}`,
          saldo: cuenta.saldo,
        });
        
        localStorage.setItem('cuentas',JSON.stringify(cuentas));
        localStorage.setItem('Pagos',JSON.stringify(Pagos));

        console.log("Pago realizado con éxito.");
      } else {
        console.log("El monto debe ser mayor a cero.");
      }
    } else {
      console.log("Cuenta no encontrada.");
    }
  }
  //        Movimientos



function movimientosCuenta(cuentas, movimientoCuenta){
    const numeroCuenta = prompt("Digite el número de su cuenta");
    const clave = prompt("Digite la contraseña de su cuenta");

    const cuenta = cuentas.find(cuenta => cuenta.cc === numeroCuenta && cuenta.clave === clave);

    if (cuenta) {
        const movimientosCuenta = movimientoCuenta.find(movimiento => movimiento.cta === cuenta.cta);
        if (movimientosCuenta) {
            console.log(movimientosCuenta.movimientoCuenta);
        } else {
            console.log("No se encontraron movimientos para esta cuenta.");
        }
        localStorage.setItem('cuentas',JSON.stringify(cuentas));
        localStorage.setItem('movimientoCuenta',JSON.stringify(movimientoCuenta));
    } else {
        console.log("Código incorrecto");
    }
}
    while(true){
        const op = menu()
        if (op === 1){
          crearCuenta(cuentas, movimientos)
        }
        if (op === 2){
          consignacion(cuentas, movimientos)
        }
        if (op === 3){
          RetirarDinero(cuentas,movimientos)
        }
        if (op === 4){
          pagoServicio(cuentas, Pagos)
        }
        if (op === 5){
          movimientosCuenta(cuentas, movimientos)
        }
        if (op === 6){
          alert("Gracias por usar el programa")  
          break
        }
      }
      
    //      MENU
      function menu() {
        const op = parseInt(prompt("ingrese una opcion\n 1.Crear Cuenta \n 2.Consignar en la cuenta \n 3.Retirar Dinero \n 4.Pagar Servicios \n 5.Mostrar Movimientos \n 6.salir"))
        return op
      }