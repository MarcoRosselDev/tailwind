//Operador de Coalescencia Nula (??): Este operador devolverá un valor solo si el primero es null o undefined.
const userSettings = {
  theme: null,
  volume: 0,
  notifications: false,
};

let theme = userSettings.theme ?? "light";
console.log(theme); // light
