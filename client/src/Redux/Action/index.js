import axios from 'axios'

export const getAllCountries= () => (dispatch) => {
    return axios.get('http://localhost:3001/countries')
    .then((info) => dispatch({type: 'GET_ALL_COUNTRIES', payload: info.data}))
    .catch((error) => console.log(error))
};

export const getCountryByName = (name) => (dispatch) => {
    return axios.get(`http://localhost:3001/countries?name=${name}`)
    .then((info) => {return dispatch({ type: 'GET_COUNTRY_NAME', payload: info.data })})
    .catch((error) => console.log(error))
  };

// export const getCountryById= (id) => (dispatch) => {
//     return axios.get(`http://localhost:3001/countries/${id}`)
//     .then((info) => dispatch({type: 'GET_COUNTRY_ID', payload: info.data}))
//     .catch((error) => console.log(error))
// };

// export const getCountryById= (id) => (dispatch) => 
//     axios.get(`http://localhost:3001/countries/${id}`)
//     .then((info) => dispatch({type: 'GET_COUNTRY_ID', payload: info.data}))
//     .catch((error) => console.log(error))

export const getCountryById = (id) => async (dispatch) => {
    return axios.get(`http://localhost:3001/countries/${id}`)
    .then(info => dispatch({type: 'GET_COUNTRY_ID', payload: info.data}))
    .catch(error => dispatch({type:'GET_COUNTRY_ID', payload: {error}}))
}


export const getActivity= () => (dispatch) => {
    return axios.get(`http://localhost:3001/activity`)
    .then((info) => dispatch({type: 'GET_ACTIVITY', payload: info.data}))
    .catch((error) => console.log(error))
};

export function postActivity(body) {
    return async function(dispatch) {
        try {    
            var activity = await axios.post(`http://localhost:3001/activity`, body);
            return dispatch({
                type: 'POST_ACTIVITY',
                payload: activity.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterByContinent(payload){
    return{
        type: 'FILTER_BY_CONTINENT',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByPopulation(payload){
    return{
        type: 'ORDER_BY_POPULATION',
        payload
    }
}

