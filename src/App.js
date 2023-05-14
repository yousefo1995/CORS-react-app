import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todos/ ");
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getData, []);

  return (
    <div>
      <h1> TODOS</h1>
      <hr></hr>
      <ul>
        {" "}
        {list.length > 0 &&
          list.map((item, i) => {
            return (
              <li key={i}>
                <h2>Title :{item.title}</h2>
                <h4>ID : {item.id}</h4>
                <p>Description:{item.description}</p>
                <hr></hr>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
