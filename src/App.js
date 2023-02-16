import "./styles.css";
import React, { useEffect, useState } from "react";

const FormComponent = () => {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    age: null
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("I am pressed");
    setRecords([...records, data]);
  };

  const handleChange = (e) => {
    // console.log("e", e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleDelete = (deletedIndex, e) => {
    console.log({ deletedIndex, e });
    let filteredRecords = records.filter(
      (record, index) => index != deletedIndex
    );
    console.log(filteredRecords);
    setRecords([...filteredRecords]);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={handleChange}
            name="name"
          />
          &nbsp;
          {/* <br /> */}
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            name="email"
          />
          &nbsp;
          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            value={data.age}
            onChange={handleChange}
            name="age"
          />
          <button>Submit</button>
        </form>
      </div>
      {records.length > 0 &&
        records.map((record, index) => {
          return (
            <div key={index}>
              {record.name} &nbsp;{record.email}&nbsp;{record.age}&nbsp;{" "}
              <button onClick={(e) => handleDelete(index, e)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <FormComponent />
    </div>
  );
}
