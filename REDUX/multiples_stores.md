# Crear más de un store

Es posible crear dos o más stores de Redux en una aplicación, pero es una práctica poco común y generalmente no recomendada.

### Ventajas de tener múltiples stores:

1. **Separación de responsabilidades**:
   - Al tener varios stores, puedes separar completamente diferentes dominios o partes de la aplicación. Por ejemplo, podrías tener un store específico para la autenticación y otro para el contenido de la aplicación. Esto podría facilitar el razonamiento sobre partes aisladas del estado.

2. **Modularidad**:
   - En aplicaciones muy grandes, donde distintas partes de la aplicación son desarrolladas por equipos diferentes, tener un store independiente para cada módulo o micro frontend podría permitir una mayor independencia entre equipos.

3. **Optimización del rendimiento**:
   - Si un store gestiona solo una parte de la aplicación, los renderizados que dependen de ese store estarán más limitados a los componentes que realmente lo necesitan, lo que puede mejorar el rendimiento al reducir renderizados innecesarios.

### Desventajas de tener múltiples stores:

1. **Complicación del manejo del estado global**:
   - Una de las principales fortalezas de Redux es que centraliza todo el estado de la aplicación en un solo store. Al tener múltiples stores, pierdes esta centralización y se vuelve más complicado compartir el estado entre diferentes partes de la aplicación.

2. **Mayor complejidad en la sincronización de estados**:
   - Si dos stores necesitan interactuar o compartir datos, la comunicación entre ellos se vuelve complicada. Es posible que tengas que crear lógica adicional para sincronizar los estados entre diferentes stores, lo que aumenta la complejidad y el riesgo de errores.

3. **Mayor complejidad en la depuración**:
   - Redux DevTools está diseñado para trabajar con un solo store, por lo que utilizar múltiples stores puede hacer que la depuración sea más difícil. Además, el seguimiento del flujo de acciones y del estado en diferentes stores se vuelve más complicado, lo que puede dificultar la identificación de problemas.

4. **Mayor dificultad en la integración con middleware**:
   - Muchos middlewares de Redux, como `redux-thunk` o `redux-saga`, están diseñados para trabajar con un solo store. Si utilizas múltiples stores, necesitarás manejar cada store de manera independiente, lo que puede hacer que la configuración y el mantenimiento del middleware sea más complejo.

### Conclusión:
Aunque es posible tener múltiples stores en una aplicación de Redux, en la mayoría de los casos, **no es recomendable** debido a la complejidad adicional que introduce en la gestión del estado, la depuración y la sincronización. Generalmente, es mejor utilizar un solo store y dividir el estado en **reducers** o módulos bien organizados, manteniendo la centralización del estado y aprovechando las herramientas que ofrece Redux para manejar aplicaciones complejas.


# Ejemplo implementación


### Paso 1: Configuración de los Reducers para cada Store

Imaginemos que tenemos dos dominios de la aplicación que queremos manejar de forma independiente: uno para la **autenticación** y otro para los **productos**.

```javascript
// authReducer.js
const initialAuthState = { isAuthenticated: false };

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

// productsReducer.js
const initialProductsState = { items: [] };

function productsReducer(state = initialProductsState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
```

### Paso 2: Crear dos Stores de Redux

Crear los dos stores separados utilizando `createStore` de Redux.

```javascript
import { createStore } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';

// Crear el primer store para la autenticación
const authStore = createStore(authReducer);

// Crear el segundo store para los productos
const productsStore = createStore(productsReducer);
```

### Paso 3: Proveer los Stores a tu aplicación

Dado a que tenemos dos stores, no se puede usar el `Provider` de `react-redux` de manera directa para ambos stores. Tendremos que crear un proveedor personalizado o envolver los componentes de manera manual. 

#### Opción 1: Proveer stores manualmente usando `Provider` en diferentes partes de la app

```javascript
import React from 'react';
import { Provider } from 'react-redux';
import AuthComponent from './AuthComponent';
import ProductsComponent from './ProductsComponent';
import { authStore, productsStore } from './stores';

function App() {
  return (
    <div>
      {/* Proveedor para el store de autenticación */}
      <Provider store={authStore}>
        <AuthComponent />
      </Provider>

      {/* Proveedor para el store de productos */}
      <Provider store={productsStore}>
        <ProductsComponent />
      </Provider>
    </div>
  );
}

export default App;
```

En este ejemplo, `AuthComponent` y `ProductsComponent` están cada uno envueltos en su propio `Provider`, utilizando diferentes stores.

#### Opción 2: Crear un Proveedor personalizado

Otra opción es crear un proveedor personalizado que gestione ambos stores y los inyecte en los componentes adecuados. Esto implica un mayor trabajo de configuración y posiblemente el uso de contextos adicionales.

```javascript
import React, { createContext } from 'react';

// Contextos para los stores
export const AuthStoreContext = createContext();
export const ProductsStoreContext = createContext();

```
Creamos el proveedor personaalizado que entregara ambos stores a toda la aplicación.

```javascript
import React from 'react';
import { AuthStoreContext, ProductsStoreContext } from './storeContexts';
import { authStore, productsStore } from './stores';

export function MultiStoreProvider({ children }) {
  return (
    <AuthStoreContext.Provider value={authStore}>
      <ProductsStoreContext.Provider value={productsStore}>
        {children}
      </ProductsStoreContext.Provider>
    </AuthStoreContext.Provider>
  );
}

```

### Paso 4: Conectar los Componentes a los Stores

Finalmente, en los componentes que se conectarán a cada store, puedes usar `connect` o el hook `useSelector`/`useDispatch` de `react-redux` de la manera habitual, ya que cada componente estará envuelto en su propio `Provider`.

```javascript
// AuthComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function AuthComponent() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
      ) : (
        <button onClick={() => dispatch({ type: 'LOGIN' })}>Login</button>
      )}
    </div>
  );
}

export default AuthComponent;

// ProductsComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ProductsComponent() {
  const products = useSelector(state => state.items);
  const dispatch = useDispatch();

  const addProduct = () => {
    const newProduct = { id: Date.now(), name: 'New Product' };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

  return (
    <div>
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsComponent;
```

### Consideraciones Finales
- **Rendimiento**: Con múltiples stores, debemos asegurarnos de no estar duplicando innecesariamente datos o lógica que podrían haberse centralizado en un solo store.
- **Depuración**: Como cada store tiene su propio flujo de acciones y estado, puede ser más difícil depurar la aplicación, ya que Redux DevTools solo se conecta a un store a la vez.

A menos que tengas una razón muy específica, es mejor intentar usar un solo store y dividir la lógica dentro de ese store usando múltiples **reducers** o **slices**.