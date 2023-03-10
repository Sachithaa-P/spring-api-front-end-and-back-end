import React,{Component} from "react";
import axios from "axios";

class Room extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        blood_group:"",
        patient_disease:'',
        donar_name:'',
        patient_name:'',
        donar_Contact:'',
        donar_Address:'',
    };
    }

    handleblood_groupChange = (event) =>{
        this.setState({ blood_group : event.target.value});
    };
    handlepatient_disease = (event) =>{
        this.setState({ patient_disease : event.target.value});
    };
    handledonar_name = (event) =>{
        this.setState({ donar_name : event.target.value});
    };
    handlepatient_name = (event) =>{
        this.setState({ patient_name : event.target.value});
    };
    handledonar_Contact = (event) =>{
        this.setState({ donar_Contact: event.target.value});
    };
    handledonar_Address = (event) =>{
        this.setState({ donar_Address : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data ={
            blood_group: this.state.blood_group,
            patient_disease: this.state.patient_disease,
            donar_name: this.state.donar_name,
            patient_name: this.state.patient_name,
            donar_Contact: this.state.donar_Contact,
            donar_Address: this.state.donar_Address,
        };
        console.log(data);
        axios.post('http://localhost:2025/add',data)
    };

    render()
    {
        return(
            <form onSubmit={this.handleSubmit} className="don" >
               <label className="login-label">Blood Group:</label>

               <input
               className="don"
               type="text"
               value={this.state.blood_group}
               onChange={this.handleblood_groupChange}
               />

               <br></br><br></br>

               <label className="login-label">Patient Disease:</label>
               <input
               className="don"
               type="text"
               value={this.state.patient_disease}
               onChange={this.handlepatient_disease}
               />
                
                <br></br><br></br>

               <label className="login-label">Donor Name:</label>
               <input
               className="don"
               type="text"
               value={this.state.donar_name}
               onChange={this.handledonar_name}
               />

<br></br><br></br>

               <label className="login-label">Patient Name:</label>
               <input
               className="don"
               type="text"
               value={this.state.patient_name}
               onChange={this.handlepatient_name}
               />

<br></br><br></br>

               <label className="login-label">Donor Contact:</label>
               <input
               className="don"
               type="text"
               value={this.state.donar_Contact}
               onChange={this.handledonar_Contact}
               />

<br></br><br></br>

               <label className="login-label">Donor Address:</label>
               <input
               className="don"
               type="text"
               value={this.state.donar_Address}
               onChange={this.handledonar_Address}
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
export default Donate;