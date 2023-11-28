import { } from './actions-types'
import axios from 'axios'

export const getAllVG = () => {
    return async (dispatch) => {
        try {
            const response = await axios(`${API}/videogames/`)
            return dispatch({ type: GET_VG, payload: response.data })
        } catch (error) {
            console.log({error: error.message});
        }
    }
}
