package com.devmountain.employeeApp.controllers;

import com.devmountain.employeeApp.dto.EmployeeDto;
import com.devmountain.employeeApp.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employee")
    public List<EmployeeDto> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

    @PostMapping("/employee")
    public void addEmployee(@RequestBody EmployeeDto employeeDto){
        employeeService.addEmployee(employeeDto);
    }

    @DeleteMapping("/employee/{employeeId}")
    public void deleteEmployeeById(@PathVariable Long employeeId){
        employeeService.deleteEmployeeById(employeeId);
    }

    @PutMapping("/employee")
    public void updateEmployeeById(@RequestBody EmployeeDto employeeDto){
        employeeService.updateEmployeeById(employeeDto);
    }


}
