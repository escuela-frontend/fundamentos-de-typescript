/* 👇 Utilidades de interactuar con la API de Palabras Amables
 *   y su backend.
 */

import axios from 'axios';

/* ❗️ Esta función pasa a ser `getRequest` que es genérico `T`
 * y acepta un argumento string `resourceURL` */

/* ❗️ Crédito extra: Agreguémosle un tipo de retorno a esta
 * función. Será un `Promise` genérico con un arreglo de T's */
export async function getRequest<T>(resourceURL: string): Promise<T[]> {
  /* ❗️ Crédito extra: Para hacer nuestras peticiones HTTP,
   * usamos la librería `axios`.
   * Esta también nos permite hacer `get` y `post` con `genéricos`.
   * ¡Cambiémoslos!
   */
  const res = await axios.get<T[]>(`http://localhost:6060/${resourceURL}`);
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

/* ❗️ Esta función pasa a ser `postRequest` que es genérico `T`
 * y acepta dos argumentos: un `data` tipo `T` y un string `resourceURL` */

/* ❗️ Crédito extra: Agreguémosle un tipo de retorno a esta
 * función. Será un `Promise` genérico con un void */
export async function postRequest<T>(
  data: T,
  resourceURL: string,
): Promise<void> {
  /* ❗️ Crédito extra: Para hacer nuestras peticiones HTTP, usamos
   * la librería `axios`.
   * Esta también nos permite hacer `get` y `post` con
   * `genéricos`. ¡Cambiémoslos!
   */
  await axios.post<T>(`http://localhost:6060/${resourceURL}`, data);
}
