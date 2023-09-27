package com.devmountain.employeeApp.entities;

import com.devmountain.employeeApp.dto.EmployeeDto;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Employee")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String employeeName;

    private String email;

    private String phoneNumber;



    @ManyToOne
    @JsonBackReference
    private User user;
    public Employee(EmployeeDto employeeDto){
        if (employeeDto.getEmployeeName() != null){
            this.employeeName = employeeDto.getEmployeeName();
        }
        if (employeeDto.getEmail() != null){
            this.email = employeeDto.getEmail();
        }
        if (employeeDto.getPhoneNumber() != null){
            this.phoneNumber = employeeDto.getPhoneNumber();
        }


    }
}
