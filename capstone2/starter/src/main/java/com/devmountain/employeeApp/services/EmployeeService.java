package com.devmountain.employeeApp.services;

import com.devmountain.employeeApp.dto.EmployeeDto;

import javax.transaction.Transactional;
import java.util.List;

public interface EmployeeService {


    List<EmployeeDto> getAllEmployee();




    @Transactional
    void addEmployee(EmployeeDto employeeDto);

    @Transactional
    void deleteEmployeeById(Long employeeId);

    @Transactional
    void updateEmployeeById(EmployeeDto employeeDto);
}
