export function runRegistro() {
  console.time('Tiempo de proceso');
  const accesos = [
    { usuario: 'ana', rol: 'admin', exito: true },
    { usuario: 'carlos', rol: 'user', exito: false },
    { usuario: 'luis', rol: 'user', exito: true },
  ];
  console.table(accesos);

  accesos.forEach(a => {
    console.count('Validaciones');
    if (a.exito) console.log(`Acceso OK: ${a.usuario}`);
    else console.warn(`Fallo acceso: ${a.usuario}`);
  });

  console.timeEnd('Tiempo de proceso');
}
