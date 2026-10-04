import { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Akash",
      employeeId: "EMP001",
      email: "akash@gmail.com",
      department: "IT",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul",
      employeeId: "EMP002",
      email: "rahul@gmail.com",
      department: "HR",
      status: "Active",
    },
  ]);

  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("IT");
  const [status, setStatus] = useState("Active");

  const [search, setSearch] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();

    if (!name || !employeeId || !email) {
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      name,
      employeeId,
      email,
      department,
      status,
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setEmployeeId("");
    setEmail("");
    setDepartment("IT");
    setStatus("Active");
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveCount = employees.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  return (
    <div className="container">

      <h1>Employee Management</h1>

      {/* Statistics */}

      <div className="stats">

        <div className="card">
          <h3>Total Employees</h3>
          <p>{employees.length}</p>
        </div>

        <div className="card">
          <h3>Active</h3>
          <p>{activeCount}</p>
        </div>

        <div className="card">
          <h3>Inactive</h3>
          <p>{inactiveCount}</p>
        </div>

      </div>

      {/* Add Employee */}

      <div className="form-section">

        <h2>Add Employee</h2>

        <form onSubmit={addEmployee}>

          <input
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button type="submit">
            Add Employee
          </button>

        </form>

      </div>

      {/* Search */}

      <div className="search-section">

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Employee List */}

      <div className="employee-section">

        <h2>Employees</h2>

        {filteredEmployees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          filteredEmployees.map((employee) => (

            <div className="employee" key={employee.id}>

              <div>

                <h3>{employee.name}</h3>

                <p>
                  Employee ID: {employee.employeeId}
                </p>

                <p>
                  Email: {employee.email}
                </p>

                <p>
                  Department: {employee.department}
                </p>

                <p>
                  Status: {employee.status}
                </p>

              </div>

              <button
                className="delete"
                onClick={() => deleteEmployee(employee.id)}
              >
                Delete
              </button>

            </div>

          ))
        )}

      </div>

    </div>
  );
}

export default App;