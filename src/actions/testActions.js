import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });

    try {
      const response = await axios.get("https://dummyjson.com/test");
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
};