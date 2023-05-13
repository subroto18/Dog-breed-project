export const subBreedsIntialState = {
  loading: false,
  data: [],
  error: false,
  errorMsg: "",
};

export const subBreedsReducer = (state, action) => {
  switch (action.type) {
    case "SUB_BREEDS_API_LOADING":
      return {
        loading: true,
        data: [],
        error: false,
        errorMsg: "",
      };
    case "SUB_BREEDS_API_SUCCESS":
      return {
        loading: false,
        data: action.payload.data,
        error: false,
        errorMsg: "",
      };
    case "SUB_BREEDS_API_FAILED":
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
