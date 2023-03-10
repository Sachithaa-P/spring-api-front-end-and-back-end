package com.example.demo.Repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Models.Room;

public interface RoomRepo extends JpaRepository<Room,Integer>{

}
