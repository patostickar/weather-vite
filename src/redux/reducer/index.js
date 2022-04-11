import {
  DEL_CITY,
  GET_CITY,
  SET_CITY,
  CITY_NOT_FOUND,
} from "../actions/actionTypes";

const initialState = {
  cities: [],
  cityDetail: [],
  cityNotFound: false,
};

// el reducer recibe el state y la acción (destructuring --> {type, payload}), y devuelve el nuevo state.
// el reducer es importado en el store y se ejecuta en cada acción (dispatch).

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // Si cities.find es true, se devuelve el mismo estado
    // Si cities.find es false, se devuelve el estado con el nuevo elemento
    case GET_CITY:
      return {
        ...state,
        cityNotFound: false,
        cities: state.cities.find((city) => city.id === payload.id)
          ? state.cities
          : [...state.cities, payload],
      };
    case DEL_CITY:
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== payload),
      };
    case CITY_NOT_FOUND:
      return {
        ...state,
        cityNotFound: true,
      };
    default:
      return state;
  }
}
