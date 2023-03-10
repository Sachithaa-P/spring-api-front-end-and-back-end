import React,{Component} from "react";
import axios from "axios";

class Room extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            roomNo:'',
            name:'',
            no_of_people:'',
            ac_or_NonAc:'',
            email:'',
            phone_No:'',
            check_In:'',
            check_Out:'',
    };
    }

    handleRoomNo = (event) =>{
        this.setState({ roomNo : event.target.value});
    };
    handleName = (event) =>{
        this.setState({ name : event.target.value});
    };
    handleNo_of_people = (event) =>{
        this.setState({ no_of_people : event.target.value});
    };
    handleAc_or_NonAc = (event) =>{
        this.setState({ ac_or_NonAc : event.target.value});
    };
    handleEmail = (event) =>{
        this.setState({ email: event.target.value});
    };
    handlePhone_No = (event) =>{
        this.setState({ phone_No : event.target.value});
    };
    handleCheck_In = (event) =>{
        this.setState({ check_In : event.target.value});
    };
    handleCheck_Out = (event) =>{
        this.setState({ check_Out : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            roomNo: this.state. roomNo,
            name: this.state. name,
            no_of_people: this.state.no_of_people,
            ac_or_NonAc: this.state.ac_or_NonAc,
            email: this.state.email,
            phone_No: this.state.phone_No,
            check_In: this.state.check_In,
            check_Out: this.state.check_Out,
        };
        console.log(data);
        axios.post('http://localhost:2003/addRoom',data)
    };

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="don" >
               <label className="login-label">Room_No</label>

               <input
               className="don"
               type="text"
               value={this.state.roomNo}
               onChange={this.handleRoomNo}
               />

               <br></br><br></br>

               <label className="login-label">Name</label>
               <input
               className="don"
               type="text"
               value={this.state.name}
               onChange={this.handleName}
               />
                
                <br></br><br></br>

               <label className="login-label">No_of_people</label>
               <input
               className="don"
               type="text"
               value={this.state.no_of_people}
               onChange={this.handleNo_of_people}
               />

<br></br><br></br>

               <label className="login-label">Ac_or_NonAc:</label>
               <input
               className="don"
               type="text"
               value={this.state.ac_or_NonAc}
               onChange={this.handleAc_or_NonAc}
               />

<br></br><br></br>

               <label className="login-label">Email:</label>
               <input
               className="don"
               type="text"
               value={this.state.email}
               onChange={this.handleEmail}
               />

<br></br><br></br>

               <label className="login-label">Phone_No:</label>
               <input
               className="don"
               type="text"
               value={this.state.phone_No}
               onChange={this.handlePhone_No}
               />

<br></br><br></br>
<label className="login-label">Check_In:</label>
               <input
               className="don"
               type="text"
               value={this.state.check_In}
               onChange={this.handleCheck_In}
               />

<br></br><br></br>
<label className="login-label">Check_Out:</label>
               <input
               className="don"
               type="text"
               value={this.state.check_Out}
               onChange={this.handleCheck_Out}
               />

<br></br><br></br>

               <button className="submitt" type="submit" id="asd">
Submit
               </button>
               <br></br><br></br>
               </form>
               );
               
    }
}
export default Room;