import React, { useState } from "react";
import axios from "axios";
function TodoFrom() {
  const url = "http://localhost:3004/posts";
  const [data, setData] = useState({
    name: "",
    type: "",
    iduser: "",
  });
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        type: data.type,
        iduser: parseInt(data.iduser),
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="name"
          value={data.name}
          placeholder="name"
        ></input>
        <input
          onChange={(e) => handle(e)}
          type="text"
          id="type"
          value={data.type}
          placeholder="type"
        ></input>
        <input
          onChange={(e) => handle(e)}
          type="number"
          id="iduser"
          value={data.iduser}
          placeholder="id"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default TodoFrom;
