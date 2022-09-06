// const coords: any = {
//   x: 1,
//   y: 2,
// };

// coords.z = 3; // changement muable (modifier l'objet existant)

// const coords2 = { // changement immuable (créé un nouvel objet)
//   ...coords,
//   z: 3,
// };

// const names = ['Nadia', 'Christophe'];

// names.push('Romain'); // changement muable (modifier le tableau/objet existant)

// const names2 = [...names, 'Romain']; // changement immuable (créé un nouvel objet/tableau)

export function immutableAdd(object: any, key: string, value: any) {
  return {
    ...object,
    [key]: value,
  };
}