package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Models.Room;
import com.example.demo.Repositary.RoomRepo;
@Service
public class RoomService {
	@Autowired
	private RoomRepo rr;
	
	public Room addRoom(Room obj) {
		return rr.save(obj);
	}
	public List<Room> getRoom()
	{
		List<Room> arr= new ArrayList<>();
		arr=rr.findAll();
		return arr;
	}
	public void deleteRoomByName(int RoomNo)
	{
		rr.deleteById(RoomNo);
	}
	public Room updateRoomByName(int RoomNo, Room obj) {
		return rr.saveAndFlush(obj);
	}
  
	
}
