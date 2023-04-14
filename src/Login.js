import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login, logout } from "./features/user";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <div>
      {!user.name && (
        <div>
          <h1>Login</h1>
          <br />
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <br />
          <input value={age} onChange={(e) => setAge(e.target.value)} />
          <br />
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
        </div>
      )}

      {!user.name ? (
        <button onClick={() => dispatch(login({ name, age, email }))}>
          Login
        </button>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
};

export default Login;
