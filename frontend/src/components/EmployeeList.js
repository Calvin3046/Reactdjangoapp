import React, { useEffect, useState } from 'react';
import { getemployee, addemployee } from '../services/Apiservice'
import AddEmployee from './AddEmployee';

export default function EmployeeList(){

    const [employees, setEmployees]=useState([])
    const [showAddEmployeeForm, setshowAddEmployeeForm] =useState(false)
    useEffect(() =>{
        let mount = true
        getemployee()
        .then (res=>{console.log("res from Api",res)
            setEmployees(res)
            return()=> mount = false

        })
    }, [])
    const handleAddsubmit =(e) =>{
        addemployee(e.target)
        .then(res=>{
            setEmployees(res)
        })

    }
    return (
        <>
        <h3>EMPLOYEE PROFILES LIST</h3>
        <table border={"2px"} cellPadding={"1opx"}> 
            <thead>
                <tr>
                    <td>first name</td>
                    <td>last name</td>
                    <td>department</td>
                    <td>role</td>
                    <td>duties</td>
                    <td>action</td>

                </tr>
            </thead>
            <tbody>  
               { employees.map(employee =>{
              return  <tr key={employee.employee_id}>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.role}</td>
                    <td>{employee.duties}</td>
                    <td><button>edit</button></td> <td><button>Delete</button></td>
            </tr>
               })}
            </tbody>
        </table>
        <button onClick={()=>setshowAddEmployeeForm(true)}>Add new employee</button>
        {showAddEmployeeForm && <AddEmployee handleAddsubmit={ handleAddsubmit}/>}
        </>
               )
            }
            