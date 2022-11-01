import React, { useEffect, useState } from "react";
import axios from "axios";
function TodoList() {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/posts").then((res) => {
      setContents(res);
      console.log(res);
    });
  }, []);
  return (
    <div>
      {contents &&
        contents.length &&
        contents.map((contents) => (
          <ul key={contents.id}>
            <li>{contents.id}</li>
          </ul>
        ))}
    </div>
  );
}

export default TodoList;
