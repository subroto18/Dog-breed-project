export const breedImagesIntialState = {
  loading: false,
  data: [],
  error: false,
  errorMsg: "",
};

export const breedImagesReducer = (state, action) => {
  switch (action.type) {
    case "BREED_IMAGE_API_LOADING":
      return {
        loading: true,
        data: [],
        error: false,
        errorMsg: "",
      };
    case "BREED_IMAGE_API_SUCCESS":
      return {
        loading: false,
        data: action.payload.data,
        error: false,
        errorMsg: "",
      };
    case "BREED_IMAGE_API_FAILED":
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
