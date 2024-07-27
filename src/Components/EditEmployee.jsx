import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
	const [employee, setEmployee] = useState({
		name: "",
		email: "",
		department: "",
		salary: "",
		address: ""
	  });
	const navigate = useNavigate()
	
	const {id} = useParams();

	useEffect(()=> {
		axios.get('http://localhost:3000/auth/employee/'+id)
			.then(result => {
				setEmployee({
					...employee,
					name: result.data.Result[0].name,
					email: result.data.Result[0].email,
					department: result.data.Result[0].department,
					salary: result.data.Result[0].salary,
					address: result.data.Result[0].address,
				})
			}).catch(err => console.log(err))
		}, [])

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.put('http://localhost:3000/auth/edit_employee/'+id, employee)
		.then(result => {
			if(result.data.Status) {
				navigate('/dashboard/employee')
			}
		})
		.catch(err => console.log(err));
	}
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Employee</h2>
			<form class="row g-3 w-50" onSubmit={handleSubmit}>
			<div class="col-12">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e => setEmployee({...employee, name: e.target.value})} value={employee.name}/>
				</div>
				<div class="col-12">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
					onChange={e => setEmployee({...employee, email: e.target.value})} value={employee.email}/>
				</div>
				<div class="col-12">
					<label for="inputEmail4" class="form-label">Department</label>
					<input type="text" class="form-control" placeholder='Enter Department' autoComplete='off'
					onChange={e => setEmployee({...employee, department: e.target.value})} value={employee.department}/>
				</div>
				<div class="col-12">
					<label for="inputSalary" class="form-label">Salary</label>
					<input type="text" class="form-control" id="inputSalary" placeholder="Enter Salary" autoComplete='off'
					onChange={e => setEmployee({...employee, salary: e.target.value})} value={employee.salary}/>
				</div>
				<div class="col-12">
					<label for="inputAddress" class="form-label">Address</label>
					<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'
					onChange={e => setEmployee({...employee, address: e.target.value})} value={employee.address}/>
				</div>
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
  )
}

export default EditEmployee