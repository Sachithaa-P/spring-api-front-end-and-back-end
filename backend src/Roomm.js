import React, { Component } from "react";
import axios from "axios";
//import "./Nennw.css";
//import "./Table1.css";

class Nennw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RoomNo:'',
            Name:'',
            No_of_people:'',
            Ac_or_NonAc:'',
            Email:'',
            Phone_No:'',
            Check_In:'',
            Check_Out:'',
        };
    }

    componentDidMount() {
        // Fetch fuel data from server when component mounts
        axios.get("http://localhost:2003/addRoom").then((response) => {
            this.setState({ fuelData: response.data });
        });
    }

    handleRoomNo = (event) => {
        this.setState({ RoomNo: event.target.value });
    };
    handleName = (event) => {
        this.setState({ Name: event.target.value });
    };
    handleNo_of_people = (event) => {
        this.setState({ No_of_people: event.target.value });
    };
    handleAc_or_NonAc = (event) => {
        this.setState({ Ac_or_NonAc: event.target.value });
    };
    handleEmail = (event) => {
        this.setState({ Email: event.target.value });
    };
    handleCheck_In = (event) => {
        this.setState({ Check_In: event.target.value });
    };
    handleCheck_Out = (event) => {
        this.setState({ Check_Out: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            RoomNo: this.state.RoomNo,
            Name: this.state.Name,
            No_of_people: this.state.No_of_people,
            Ac_or_NonAc: this.state.Ac_or_NonAc,
            Email: this.state.Email,
            Check_In: this.state.Check_In,
            Check_Out: this.state.Check_Out,
        };
        console.log(data);
        axios.post("http://localhost:2003/getRoom", data).then((response) => {
            // Add new fuel data to the state and clear the form
            this.setState({
                fuelData: [...this.state.fuelData, response.data],
                RoomNo: "",
                Name: "",
                No_of_people: "",
                Ac_or_NonAc: "",
                Email: "",
                Check_In: "",
                Check_Out:"",
            });
        });
    };

    handleUpdate = (RoomNo, data) => {
        // Send PUT request to update fuel data with the given ID
        axios.put(`http://localhost:2003/update/${RoomNo}`, data).then((response) => {
            // Update the state to reflect the updated fuel data
            const updatedFuelData = this.state.fuelData.map((fuel) => {
                if (fuel.id === response.data.id) {
                    return response.data;
                } else {
                    return fuel;
                }
            });
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleDelete = (RoomNo) => {
        // Send DELETE request to remove fuel data with the given ID
        axios.delete(`http://localhost:2003/cancel/${RoomNo}`).then((response) => {
            // Update the state to remove the deleted fuel data
            const updatedFuelData = this.state.fuelData.filter(
                (fuel) => fuel.id !== id
            );
            this.setState({ fuelData: updatedFuelData });
        });
    };

    handleEdit = (data) => {
        this.setState({
            RoomNo: data.RoomNo,
            Name: data.Name,
            No_of_people: data.No_of_people,
            Ac_or_NonAc: data.Ac_or_NonAc,
            Email: data.Email,
            Check_In: data.Check_In,
            Check_Out: data.Check_Out,
            isEdit: true,
        });
        console.log(this.state.RoomNo);
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value,
        });
    };


    handleUpdate = (event) => {
        event.preventDefault();
        const data = {
            RoomNo: this.state.RoomNo,
            Name: this.state.Name,
            No_of_people: this.state.No_of_people,
            Ac_or_NonAc: this.state.Ac_or_NonAc,
        };
        const RoomNo = this.state.RoomNo;
        axios
            .put(`http://localhost:2003/update/${RoomNo}`, data)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    RoomNo: "",
                    Name: "",
                    No_of_people: "",
                    Ac_or_NonAc: "",
                });
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    };






    render() {
        return (

            <div>
                <form onSubmit={this.handleSubmit} className="fuel">
                    <label className="login-label">RoomNo</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.RoomNo}
                        onChange={this.handleRoomNoChange}
                    />
                    <br /><br />
                    <label className="login-label">Name</label>
                    <input
                        className="fuel"
                        type="text"
                        value={this.state.Name}
                        onChange={this.handleName}
                    />
                    <br /><br />

                    <label className="login-label">No_of_PPL</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.No_of_people}
                        onChange={this.handleNo_of_people}
                    />
                    <br /><br />

                    <label className="login-label">AC_OR_NON_AC</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.Ac_or_NonAc}
                        onChange={this.handleAc_or_NonAc}
                    />
                    <br /><br />

                    <label className="login-label">EMAIL</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.Email}
                        onChange={this.handleEmail}
                    />
                    <br /><br />

                    <label className="login-label">CHECK_IN</label>
                    <input
                        className="fuel"
                        type="date"
                        value={this.state.Check_In}
                        onChange={this.handleCheck_In}
                    />
                    <br /><br />

                    <label className="login-label">Check_Out</label>
                    <input
                        className="fuel"
                        type="number"
                        value={this.state.Check_Out}
                        onChange={this.handleCheck_Out}
                    />
                    <br /><br />

                    <button className="submitt" type="submit" id="asd">
                        Submit
                    </button>
                    <br /><br />
                </form>

                <table className="output">
                    <thead>
                        <tr>
                            <th>RoomNo</th>
                            <th>Name</th>
                            <th>No_of_people</th>
                            <th>Ac_or_NonAc</th>
                            <th>Email</th>
                            <th>Check_In</th>
                            <th>Check_Out</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fuelData.map((data) => (
                            <tr key={data.RoomNo}>
                                <td>{data.Name}</td>
                                <td>{data.No_of_people}</td>
                                <td>{data.Ac_or_NonAc}</td>
                                <td>{data.Email}</td>
                                <td>{data.Check_In}</td>
                                <td>{data.Check_Out}</td>
                                <td>
                                    <button onClick={() => this.handleEdit(data)}>Edit</button>
                                </td>

                                <td>
                                    <button
                                        onClick={() => this.handleDelete(data.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br></br><br></br><br></br><br></br>
                <form onSubmit={this.handleUpdate}>
                    <input type="hidden" name="id" value={this.state.id} />
                    <label>Room Noe:</label>
                    <input
                        type="text"
                        name="RoomNo"
                        value={this.state.RoomNo}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Type:</label>
                    <input
                        type="text"
                        name="Name"
                        value={this.state.Name}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Consumption:</label>
                    <input
                        type="number"
                        name="No_of_people"
                        value={this.state.No_of_people}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Price:</label>
                    <input
                        type="number"
                        name="Ac_or_NonAc"
                        value={this.state.Ac_or_NonAc}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Fuel Amount:</label>
                    <input
                        type="number"
                        name="Email"
                        value={this.state.Email}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label>Date:</label>
                    <input
                        type="date"
                        name="Check_In"
                        value={this.state.Check_In}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <br />
                    <label>Date:</label>
                    <input
                        type="date"
                        name="Check_In"
                        value={this.state.Check_Out}
                        onChange={this.handleCheck_Out}
                    />
                    <br />
                    <button type="submit">Save</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>        </div>

        );
    }
}
export default Nennw;