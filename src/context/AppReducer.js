export default (state, action) => {
    switch(action.type) {
      case 'FETCH_ALL':
        return {
          ...state,
          loading: false,
          resume: action.payload
        }
      case 'DELETE':
        return {
          ...state,
          resume: state.resume.filter(res => res.id !== action.payload)
        }
      case 'CREATE':
        return {
          ...state,
          resume: action.payload
        }
      default:
        return state;
    }
  }