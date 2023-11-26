const initialState = {
    loading: false,
    cars: [],
    error: "",
  };
  
  const carsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_CARS_SUCCESS":
        return {
          ...state,
          loading: false,
          cars: action.payload,
        };
      case "FETCH_CARS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_CARS_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default carsReducer;
  