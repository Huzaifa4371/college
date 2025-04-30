import { useEffect, useState } from "react";
import "./student.css";

const Students = () => {
  const [form, setForm] = useState({ gender: "male" });
  // const [response, setResponse] = useState({});
  const [studentlist, setStudentList] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:8080/students/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((data) => data.json())
      .then((res) => alert(res.message));

  };
  useEffect(() => {
    fetch("http://localhost:8080/students/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => setStudentList(res));
  }, [studentlist]);

  const deletebtn = (id) => {
    // e = e.target;
    // let tr = e.parentNode.parentNode;
    // let childnode = tr.children;
    // let rollnum = childnode[childnode.length - 4].innerText
    // console.log(rollnum)
    fetch(`http://localhost:8080/students/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => alert(JSON.stringify(res.message)))
  }


  return (
    <>
      <div className="formdiv">
        <form action="" method="" onSubmit={handelSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="text"
            name="rollnum"
            required
            placeholder="Roll Number"
            onChange={(e) => setForm({ ...form, rollnum: e.target.value })}
          />
          <input
            type="number"
            name="age"
            required
            placeholder="Age"
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
          <select
            name="gender"
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">other</option>
          </select>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button>Add Student</button>
        </form>
      </div>
      <div>
          {/* {response.message === "Success" && (
            <div style={{ color: "green", padding: "30px 0 0 30px" }}>
              Added Successfully
            </div>
          )}
          {response.message === "Failed" && (
            <div style={{ color: "red" }}>
              <p>Failed</p>
              <p>{response.err}</p>
            </div>
          )} */}
          <table className="studentlist">
            {studentlist.map((val,key)=>{
              return <tr key={key}>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.rollnum}</td>
                <td>{val.age}</td>
                <td>{val.gender}</td>
                <td><button onClick={()=>deletebtn(val._id)}>Delete</button></td>
              </tr>
            })}
          </table>
      </div>
    </>
  );
};

export default Students;
