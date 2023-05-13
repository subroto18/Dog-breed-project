export const breedsIntialState = {
  loading: false,
  data: [],
  error: false,
  errorMsg: "",
};

export const breedReducer = (state, action) => {
  switch (action.type) {
    case "BREEDS_LOADING_API":
      return {
        loading: true,
        data: [],
        error: false,
        errorMsg: "",
      };
    case "BREEDS_API_SUCCESS":
      return {
        loading: false,
        data: action.payload.data,
        error: false,
        errorMsg: "",
      };
    case "BREEDS_API_FAILED":
      return {
        loading: false,
        data: [],
        error: true,
        errorMsg: action.payload.errMsg,
      };

    default:
      return state;
  }
};
