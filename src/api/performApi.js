import Api from "./Api";
export const getBreedList = async (url) => {
  return performApi(url);
};

export const getBreedImagesByName = async (url) => {
  return performApi(url);
};

export const getSubBreedByName = async (url) => {
  return performApi(url);
};

const performApi = async (url) => {
  try {
    let result = await Api().get(url);
    let data = await result.data;
    if (data.status === "success") {
      return data.message;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
