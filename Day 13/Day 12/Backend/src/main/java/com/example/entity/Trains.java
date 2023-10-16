package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="trainnn")
public class Trains {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Tname;
	private Long Availability;
	private String Arrpoint;
	private String Destpoint;
	private String arrtime;
	private String deptime;
	
	

	public String getTname() {
		return Tname;
	}

	public void setTname(String tname) {
		Tname = tname;
	}

	public Long getAvailability() {
		return Availability;
	}

	public void setAvailability(Long availability) {
		Availability = availability;
	}

	public String getArrpoint() {
		return Arrpoint;
	}

	public void setArrpoint(String arrpoint) {
		Arrpoint = arrpoint;
	}

	public String getDestpoint() {
		return Destpoint;
	}

	public void setDestpoint(String destpoint) {
		Destpoint = destpoint;
	}

	public String getArrtime() {
		return arrtime;
	}

	public void setArrtime(String arrtime) {
		this.arrtime = arrtime;
	}

	public String getDeptime() {
		return deptime;
	}

	public void setDeptime(String deptime) {
		this.deptime = deptime;
	}

}
