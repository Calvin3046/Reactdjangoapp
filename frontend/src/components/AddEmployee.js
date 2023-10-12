import React from "react";
export default function AddEmployee({handleAddsubmit}) {
return(
    <>
    <h3>ADD FORM</h3>
    <form onSubmit={handleAddsubmit}>
    First name <input type="text"name='first_name'/>
    last name <input type="text"name='last_name'/>
    department <input type="text"name='employee_department'/>
    role <input type="text"name='employee_role'/>
    duties <input type="text"name='employee_duties'/>
    <button type='submit'>ADD</button>
    </form>
    </>
)
}