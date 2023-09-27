package com.devmountain.employeeApp.dto;

import com.devmountain.employeeApp.entities.Employee;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto implements Serializable {
    private Long id;
    private String employeeName;
    private String email;
    private String phoneNumber;


    private UserDto userDto;

    public EmployeeDto(Employee employee){
        if(employee.getId() != null){
            this.id = employee.getId();
        }
        if(employee.getEmployeeName() != null){
            this.employeeName = employee.getEmployeeName();
        }
        if(employee.getEmail() != null){
            this.email = employee.getEmail();
        }
        if(employee.getPhoneNumber() != null){
            this.phoneNumber = employee.getPhoneNumber();
        }

    }

}
