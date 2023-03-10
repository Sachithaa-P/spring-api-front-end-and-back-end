import axios from "axios";
import React,{Component} from "react";

class Table extends Component{
    state = {
        data:[]
    }

    componentDidMount(){
        axios.get('http://localhost:2003/getRoom')
        .then(response =>{
            this.setState({
                data:response.data
                
            });
            console.log(response)
        })
        .catch(error =>{
            console.log(error);
        });
    }

    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>RoomNo</th>
                        <th>Name</th>
                        <th>No_of_people</th>
                        <th>Ac_or_NonAc</th>
                        <th>Email</th>
                        <th>Phone_No</th>
                        <th>Check_In</th>
                        <th>Check_Out</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(room_reservation => (
                        <tr key={room_reservation.roomNo}>
                            <td>{room_reservation.name}</td>
                            <td>{room_reservation.no_of_people}</td>
                            <td>{room_reservation.ac_or_NonAc}</td>
                            <td>{room_reservation.email}</td>
                            <td>{room_reservation.phone_No}</td>
                            <td>{room_reservation.check_In}</td>
                            <td>{room_reservation.check_Out}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Table;