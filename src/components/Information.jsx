import React, { useState } from "react";
import "./Information.css";

const Information = () => {
  const peoples = ["John", "Bob", "Sam"];

  const [person, setPerson] = useState("");
  const [delPerson, setDelPerson] = useState("");
  const [people, setPeople] = useState(peoples);

  const add = () => {
    if (person.trim() !== "") {
      setPeople([...people, person]);
      setPerson("");
      alert("Вы добавили нового сотрудника: " + person);
    }
  };

  const del = () => {
    if (delPerson.trim() !== "") {
      if (people.includes(delPerson.trim())) {
        setPeople(people.filter((p) => p !== delPerson.trim()));
        alert("Вы удалили сотрудников с именем: " + delPerson.trim());
      }
    }
  };

  return (
    <div className="maininfo">
      <h1>Список сотрудников</h1>
      <div className="txt">
        {people.map((person, index) => (
          <p key={index} className="list">
            {person}
          </p>
        ))}

        <button onClick={add} className="binf">
          Добавить
        </button>
        <input
          className="inp"
          value={person}
          onChange={(event) => setPerson(event.target.value)}
        />

        <button onClick={del} className="binf">
          Удалить
        </button>
        <input
          className="inp"
          value={delPerson}
          onChange={(event) => setDelPerson(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Information;
