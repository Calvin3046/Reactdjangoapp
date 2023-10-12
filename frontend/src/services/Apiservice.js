import axios from 'axios';

export function getemployee(){
    return axios.get('http://127.0.0.1:8000/employee/')
    .then(res =>{
    return  res.data

    })}
    
export function addemployee(employee){
    return axios.get('http://127.0.0.1:8000/employee/',
    {
        employee_id:null,
        first_name: employee.first_name.value,
        last_name: employee.last_name.value,
        employee_department:employee.employee_department.value,
        employee_role:employee.employee_role.value,
        employee_duties:employee.employee_duties.value,
    })
    .then(res =>{
    return  res.data

    })}