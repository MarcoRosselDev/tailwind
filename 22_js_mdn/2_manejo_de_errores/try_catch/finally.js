function f() {
  try {
    throw "bogus";
  } catch (e) {
    console.log('captura "falso" interno');
    throw e; // esta instrucción throw se suspende hasta
    // que el bloque finally se haya completado
  } finally {
    return false; // sobrescribe el "throw" anterior
  }
  // "return false" se ejecuta ahora
}

try {
  console.log(f());
} catch (e) {
  // ¡esto nunca se alcanza!
  // mientras se ejecuta f(), el bloque `finally` devuelve false,
  // que sobrescribe el `throw` dentro del `catch` anterior
  console.log('"falso" externo capturado');
}

// Produce
// captura "falso" interno
// false
