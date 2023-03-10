package com.example.demo.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Room_Reservation")
public class Room {
	
	@Id
	@Column(name="RoomNo")
	private int RoomNo;
	
    @Column(name="NAME")
    private String Name;
    
    @Column(name="Noofppl")
    private int  No_of_people;
    
    @Column(name="AC or Non AC")
    private String Ac_or_NonAc;
    
    @Column(name="email")
    private String Email;
    
    @Column(name="phoneno")
    private int Phone_No;
    
    @Column(name="CheckIN")
    private int Check_In;
    
    @Column(name="CheckOUT")
    private int Check_Out;
 
	public Room(int roomNo, String name, int no_of_people, String ac_or_NonAc, String email, int phone_No, int check_In,
			int check_Out) {
		super();
		RoomNo = roomNo;
		Name = name;
		No_of_people = no_of_people;
		Ac_or_NonAc = ac_or_NonAc;
		Email = email;
		Phone_No = phone_No;
		Check_In = check_In;
		Check_Out = check_Out;
	}


	public int getRoomNo() {
		return RoomNo;
	}


	public void setRoomNo(int roomNo) {
		RoomNo = roomNo;
	}


	public String getName() {
		return Name;
	}


	public void setName(String name) {
		Name = name;
	}


	public int getNo_of_people() {
		return No_of_people;
	}


	public void setNo_of_people(int no_of_people) {
		No_of_people = no_of_people;
	}


	public String getAc_or_NonAc() {
		return Ac_or_NonAc;
	}


	public void setAc_or_NonAc(String ac_or_NonAc) {
		Ac_or_NonAc = ac_or_NonAc;
	}


	public String getEmail() {
		return Email;
	}


	public void setEmail(String email) {
		Email = email;
	}


	public int getPhone_No() {
		return Phone_No;
	}


	public void setPhone_No(int phone_No) {
		Phone_No = phone_No;
	}


	public int getCheck_In() {
		return Check_In;
	}


	public void setCheck_In(int check_In) {
		Check_In = check_In;
	}


	public int getCheck_Out() {
		return Check_Out;
	}


	public void setCheck_Out(int check_Out) {
		Check_Out = check_Out;
	}


	public Room() {
		
	}

}
