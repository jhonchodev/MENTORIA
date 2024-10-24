// Ejemplo tomado de https://pieces.app/blog/solidifying-your-code-front-end-development-best-practices
import React, { useEffect, useState } from "react";
// Abstracting Data Service
export class AbstractDataService {
    fetchData() {
        throw new Error("Method not implemented");
    }
}
// Http Client
class HttpClient extends AbstractDataService {
    async fetchData(url) {
        const response = await fetch(url);
        return await response.json();
    }
}
// Local Storage Service (Example Alternative)
class LocalStorageService extends AbstractDataService {
    fetchData(key) {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }
}
// Data Fetching Component (Remains Unchanged)
const DataFetchingComponent = ({ dataService = new HttpClient() }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        dataService
            .fetchData("https://jsonplaceholder.typicode.com/users") // Replace with desired URL based on dataService
            .then(setData);
    }, [dataService]);
    return (
        { data.map((item) => ({ item.name })) }
    );
};
export default DataFetchingComponent;


/*  
Desacopla la lógica de obtención de datos del componente a través de una abstracción. 
“AbstractDataService.js” proporciona una interfaz para obtener datos sin implementarla.

Esta interfaz define un contrato que “HttpClient.js” debe respetar. 
“HttpClient.js” luego utiliza la API de obtención para ofrecer la funcionalidad de obtención de datos. 
Cuando se carga “DataFetchingComponent.js”, se puede inyectar con cualquier servicio que implemente la interfaz “AbstractDataService”. 
Esta flexibilidad permite que el componente funcione con diferentes fuentes de datos sin modificaciones.
*/