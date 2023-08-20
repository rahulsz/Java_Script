import React, { useReducer } from "react";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, error: null, data: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "DELETE_DATA": // Correct action type
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

const Reducerex = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "FETCH_DATA_START" });

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };

  const deleteData = (id) => {
    dispatch({ type: "DELETE_DATA", payload: id }); // Pass the payload (item.id)
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.loading && <p>Loading..</p>}
      {state.error && <p>Error: {state.error}</p>}
      <ul>
        {state.data.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => deleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reducerex;
