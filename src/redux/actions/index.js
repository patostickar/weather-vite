import {
  GET_CITY,
  SET_CITY,
  DEL_CITY,
  CITY_NOT_FOUND,
} from "../actions/actionTypes";

// Las actions envían un objeto con una propiedad type, que es el tipo de acción que se está ejecutando,
// y una propiedad payload, que es el contenido de la acción.

// redux thunk nos permite ejecutar una función asíncrona dentro de una acción.

// Luego en el reducer, se actualiza el state con el payload de la acción.
const handleError = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res;
  }
};

export function getCity(city) {
  return (dispatch) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    )
      .then(handleError)
      .then((res) => res.json())
      .then((res) => dispatch({ type: GET_CITY, payload: res }))
      .catch(() => dispatch({ type: CITY_NOT_FOUND, payload: true }));
  };
}

export function delCity(city_id) {
  return { type: DEL_CITY, payload: city_id };
}
