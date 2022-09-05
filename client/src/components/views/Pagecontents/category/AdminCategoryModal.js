import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createCategory } from '../redux/actions/categoryActions';

const AdminCategoryModal = () => {
	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
	const { successMsg, setSuccessMsg } = useState('');
	const { errorMsg, setErrorMsg } = useState('');
	const { loading, setLoading } = useState('false');
	const [category, setCategory] = useState('');


	const handleCategoryChange = (evt) => {
		setCategory(evt.target.value);
		console.log(category)
	};


	/****************************
	 * RENDERER
	 ***************************/
	return (
		<div id='addCategoryModal' className='modal'>
			<div className='modal-dialog modal-dialog-centered modal-lg'>
				<div className='modal-content'>
					
						<div className='modal-header bg-info text-white'>
							<h5 className='modal-title'>Add Category</h5>
							<button className='close' data-dismiss='modal'>
								<span>
									<i className='fas fa-times'></i>
								</span>
							</button>
						</div>
						<div className='modal-body my-2'>
							<form>	
								<input 
								type='text'
								className='form-control'
								name='category'
								value={category}
								onChange={handleCategoryChange}
								/> 
							</form>
					
						</div>
						<div className='modal-footer'>
							<button
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Close
							</button>
							<button type='submit' className='btn btn-info'>
								Submit
							</button>
						</div>
					
				</div>
			</div>
		</div>
	);
};

export default AdminCategoryModal;
