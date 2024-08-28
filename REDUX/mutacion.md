# ¿Qué significa mutar el estado?

Mutar el estado significa modificar el estado existente directamente en lugar de crear una nueva versión del estado con las actualizaciones. En JavaScript, puedes mutar un objeto o arreglo existente cambiando sus valores directamente en lugar de crear una copia del objeto o arreglo con las modificaciones.

## Ejemplo de mutación de estado:

Supongamos que tienes un estado que es un objeto con información del usuario:

```javascript
const initialState = {
  user: {
    name: 'Juan',
    age: 25,
  }
};
```

En un reducer, si mutas el estado, harías algo como esto:

```javascript
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_AGE':
      state.user.age = action.payload;  // ❌ Esto es mutación directa
      return state;
    default:
      return state;
  }
}
```

En este ejemplo, estamos cambiando directamente el valor de `state.user.age` sin crear una nueva copia del estado. Esto es una mutación directa.


## ¿Por qué es una mala práctica?

Redux se basa en la **inmutabilidad del estado**, lo que significa que nunca debes modificar directamente el estado existente. En su lugar, siempre debes devolver una nueva copia del estado con los cambios aplicados. La razón principal es que Redux utiliza la inmutabilidad para detectar cuándo el estado ha cambiado, y esto es clave para que React sepa cuándo necesita volver a renderizar los componentes.

Si mutas el estado directamente, Redux no puede detectar correctamente los cambios, y puedes experimentar varios problemas como:

* Renderizados inesperados o faltantes: Como Redux no detecta cambios en el estado, React podría no volver a renderizar los componentes que dependen de ese estado.
* Dificultad para depurar: Las mutaciones directas son más difíciles de rastrear, lo que puede llevar a errores difíciles de encontrar.
* Comportamiento impredecible: La mutación directa puede causar inconsistencias en el estado global de la aplicación.

## Ejemplo correcto (sin mutar el estado):

En lugar de mutar el estado, debes crear una nueva copia del estado con los cambios aplicados. Aquí está el ejemplo corregido:

```javascript
function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_AGE':
      return {
        ...state, // Crea una nueva copia del estado
        user: {
          ...state.user, // Crea una nueva copia del objeto `user`
          age: action.payload, // Aplica el cambio en la nueva copia
        }
      };
    default:
      return state;
  }
}
```
En este ejemplo, no estás mutando el estado existente, sino que estás devolviendo un nuevo objeto que contiene los cambios. Esto permite que Redux detecte que el estado ha cambiado y actualice la interfaz de usuario de manera adecuada.