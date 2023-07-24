import React, { useState } from "react";
import Validation from "./Validation";

const Home = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [editIndex, setEditIndex] = useState("");
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(inputs));
        // console.log("inputs", inputs);
        if (editClick) {
            const tempTableData = tableData;
            Object.assign(tempTableData[editIndex], inputs);
            setTableData([...tempTableData]);
            setEditClick(false);
            setInputs({
                name: "",
                email: "",
                password: ""
            });
        } else {
            setTableData([...tableData, inputs]);
            setInputs({
                name: "",
                email: "",
                password: ""
            });
        }
    };

    const handleDelete = (index) => {
        const filterData = tableData.filter((item, i) => i !== index);
        setTableData(filterData);
    };
    const handleEdit = (index) => {
        const tempData = tableData[index];

        setInputs({ name: tempData.name, email: tempData.email, password: tempData.password });
        setEditClick(true);
        setEditIndex(index);
    };
    return (
        <div>
            <h1>Students Login Form</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <br />
                        <br />

                        <label>Name:</label>
                        <input type="text"
                            placeholder="Enter Your Name "
                            name="name"
                            class="psd"
                            value={inputs.name}
                            onChange={handleChange} />
                    </div>
                    {errors.name && <p>{errors.name}</p>}
                    <br />
                    <div>
                        <label>Email:</label>
                        <input type="email"
                            placeholder="Enter Your Email-Id "
                            name="email"
                            class="psd"
                            value={inputs.email}
                            onChange={handleChange} />
                    </div>
                    {errors.email && <p>{errors.email}</p>}

                    <br></br>
                    <div>
                        <label>Password:</label>
                        <input type="password"

                            placeholder="Enter Your Password"
                            name="password"
                            value={inputs.password}
                            onChange={handleChange} />
                    </div>
                    {errors.password && <p>{errors.password}</p>}
                    <br />
                    <button type="submit" >
                        {editClick ? "update" : "Login"}
                    </button>
                </form>
            </div>
            <div>
                <hr />
                <h4>Students Information</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, i) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>
                                    <button id="btn1"
                                        onClick={() => handleEdit(i)}
                                    >
                                        Edit
                                    </button>


                                    <button id="btn2"
                                        onClick={() => handleDelete(i)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;