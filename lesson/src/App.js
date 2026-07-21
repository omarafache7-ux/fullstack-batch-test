import "./App.css";
import { useState, useEffect } from "react";
//useState update data , useEffect fetch data

export default function ExpenseManager() {
  const [expenses, setExpenses] = useState([]);
  const [formDate, setFormData] = useState({
    Description: "",
    Amount: "",
    category: "food",
    date: new Date().toISOString().split("T")[0],
  });
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);

  //load exprenses from local storage
  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses"); // axios.get('')
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);
  //save expenses to local storage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  });

  const categories = ["food", "transportation", "Utilities", ""];

  const handleSumbit = (e) => {};
  const handelInputChange = (e) => {};
  const mayaAss = ()=>{return alert("Maya Ass was juicy")};
  return (
    <div className="Expense-manager">
      <div className="container">
        <header className="header">
          <h1>Expense manager</h1>
          <p>Track your daily expenses and manage your budget</p>
        </header>
        <div className="main-content">
          <div className="form-section">
            <h2>{editingId ? "Edit Expense" : "Add New Expense"}</h2>
            <form onSubmit={handleSumbit} className="expense-form">
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={FormData.description}
                  onChange={handelInputChange}
                  placeholder="Enter expense Description"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount">Amount $</label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={FormData.amount}
                    onChange={handelInputChange}
                    placeholder="0.00"
                    step="0.01"
                    min="1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="categry"
                    value={FormData.category}
                    onChange={handelInputChange}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                 <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input 
                  type="date"
                  id="date"
                  value={FormData.date}
                  onChange={handelInputChange}
                  />
                </div>
              </div>
            </form>
            <div className="form-button">
            <button className="formButton" onClick={mayaAss}>Add payment</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
