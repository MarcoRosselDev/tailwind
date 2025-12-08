// Objeto Banco
"use strict";
const Banco = (function () {
  // "Privado" - no accesible desde fuera
  const saldoSymbol = Symbol("saldo");

  class Cuenta {
    constructor(saldoInicial) {
      this[saldoSymbol] = saldoInicial;
    }

    depositar(cantidad) {
      this[saldoSymbol] += cantidad;
    }

    getSaldo() {
      return this[saldoSymbol];
    }
  }

  return Cuenta;
})();

const miCuenta = new Cuenta(1000);
console.log(miCuenta.saldo); // undefined ← No accesible directamente
console.log(miCuenta.getSaldo()); // 1000 ← Solo a través de método
