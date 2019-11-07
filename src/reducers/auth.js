import { SET_CURRENT_USER } from '../actions/types';


const initialState = {
  isAuthenticated: false,
  user: {},
  works: false
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: action.user,
        user: action.user
      };
      case 'GET_BOOKS':
        return {
         ...state,
         works: true
        };
      
    default: return state;
  }
}
