// Funcion para actualizar un objecto en un array

export function updateMatriz(matriz: any, newValue) {
  return (
    matriz &&
    matriz.map((value: any) => (value.id === newValue.id ? newValue : value))
  );
}
