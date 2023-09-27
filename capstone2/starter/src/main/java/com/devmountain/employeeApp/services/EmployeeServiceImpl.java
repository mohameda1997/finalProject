package com.devmountain.employeeApp.services;

import com.devmountain.employeeApp.dto.EmployeeDto;
import com.devmountain.employeeApp.entities.Employee;
import com.devmountain.employeeApp.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;



    public List<EmployeeDto> getAllEmployee(){
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeList.stream().map(employee -> new EmployeeDto(employee)).collect(Collectors.toList());
    }



    @Transactional
    public void addEmployee(EmployeeDto employeeDto){

       Employee employee = new Employee(employeeDto);
        employeeRepository.saveAndFlush(employee);


    }


    @Override
    @Transactional
    public void deleteEmployeeById(Long employeeId) {
        Optional<Employee> employeeOptional = employeeRepository.findById(employeeId);
        employeeOptional.ifPresent(employee -> employeeRepository.delete(employee));
    }

    @Override
    public void updateEmployeeById(EmployeeDto employeeDto) {
        Optional<Employee> employeeOptional = employeeRepository.findById(employeeDto.getId());
        employeeOptional.ifPresent(employee -> {
            employee.setEmployeeName(employeeDto.getEmployeeName());
            employee.setEmail(employeeDto.getEmail());
            employee.setPhoneNumber(employeeDto.getPhoneNumber());
            employeeRepository.saveAndFlush(employee);
        });
    }


}
