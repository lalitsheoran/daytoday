import React, { useReducer } from "react";
import "./styles.css";

const initialState = {
  isLogin: false,
  isLoading: false,
  error: "",
  username: "",
  password: ""
};

function LoginReducer(state, action) {
  const copyState = { ...state };
  switch (action.type) {
    case "field":
      return {
        ...copyState,
        [action.field]: action.value
      };
    case "login":
      return {
        ...copyState,
        isLoading: true,
        error: ""
      };

    case "logout":
      return {
        ...copyState,
        isLogin: false,
        isLoading: false,
        error: "",
        username: "",
        password: ""
      };

    case "success":
      return {
        ...copyState,
        isLogin: true,
        isLoading: false,
        error: ""
      };

    case "error":
      return {
        ...copyState,
        isLogin: false,
        isLoading: false,
        error: "Username or Password is Incorrect",
        username: "",
        password: ""
      };
    default:
      return copyState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const { isLogin, isLoading, username, password, error } = state;
  const toLogin = () => {
    dispatch({ type: "login" });
    setTimeout(() => {
      if (username === "lalit" && password === "123") {
        dispatch({ type: "success" });
      } else {
        dispatch({ type: "error" });
      }
    }, 750);
  };
  return (
    <div className="App">
      {!isLogin ? (
        <div>
          {isLoading ? <p>Loading...</p> : <p>Login Form</p>}
          <input
            placeholder="Username"
            value={username}
            onChange={e => {
              dispatch({
                type: "field",
                field: "username",
                value: e.target.value
              });
            }}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => {
              dispatch({
                type: "field",
                field: "password",
                value: e.target.value
              });
            }}
          />
          <button onClick={toLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      ) : (
        <div>
          <p>Welcome, Mr.{username}</p>
          <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
        </div>
      )}
    </div>
  );
}
