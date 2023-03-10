package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.Models.Room;
import com.example.demo.Service.RoomService;

@RestController
public class Controller {
	@Autowired
	private RoomService rService;

	@PostMapping("/addRoom")
	public Room Roomticket(@RequestBody Room r)
	{
		return rService.addRoom(r);
	}
	
	@GetMapping("/getRoom")
	public List<Room> getRoom()
	{
		List<Room> alist= new ArrayList<>();
		alist=rService.getRoom();
		return alist;
	}
	
	@DeleteMapping("/cancel/{RoomNo}")
	public void deleteRoomByName(int RoomNo) {
		rService.deleteRoomByName(RoomNo);
	}
	@PutMapping("/update/{RoomNo}")
	public Room updateRoomByName(@PathVariable int RoomNo, @RequestBody Room r) {
		return rService.updateRoomByName(RoomNo, r);
	}
  
}