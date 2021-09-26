package com.do_an.utt.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.do_an.utt.model.UserDTO;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@Table(name = "useraddress")
@NoArgsConstructor
@RequiredArgsConstructor
public class UserAddress implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NonNull
	private int id;

	@Column(name = "name" ,unique = true)
	private String name;
	
	@Column(name = "phone_number")
	private String phoneNumber;
	
	@Column(name = "city")
	private String city;

	@Column(name = "district")
	private String district;

	@Column(name = "address")
	private String address;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
}
