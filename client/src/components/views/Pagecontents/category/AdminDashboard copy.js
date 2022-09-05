import React, { Fragment, useState } from 'react';
import { createCategory } from '../redux/actions/categoryActions';
import {createCategory} from '../api/category';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';


const AdminDashboard = () => {
	const { successMsg, setSuccessMsg } = useState('');
	const { errorMsg, setErrorMsg } = useState('');
	const { loading, setLoading } = useState('false');
	const [category, setCategory] = useState('');


	const handleCategoryChange = (evt) => {
		setCategory(evt.target.value);
	};

	const handleCategorySubmit = evt => {
		evt.preventDefault();

		if (isEmpty(category)) {
			setErrorMsg('Please enter a category')

		} else {

		}

		const data = {category};

		createCategory(data);

		console.log(category);
	};
	
    const AdminActionBtns = () => (
        <div className='bg-light my-2'>
            <div className='container'>
                <div className='row pb-3'>
                    <div className='col-md-4 my-1'>
                        <button
                            className='btn btn-outline-info btn-block'
                            data-toggle='modal'
                            data-target='#addCategoryModal'
                        >
                            <i className='fas fa-plus'> Add Category</i>
                        </button>
                    </div>
    
                    <div className='col-md-4 my-1'>
                        <button
                            className='btn btn-outline-warning btn-block'
                            data-toggle='modal'
                            data-target='#addFoodModal'
                        >
                            <i className='fas fa-plus'> Add Food</i>
                        </button>
                    </div>
    
                    <div className='col-md-4 my-1'>
                        <button className='btn btn-outline-success btn-block'>
                            <i className='fas fa-money-check-alt'> View Orders</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
    const AdminCategoryModal = () => (
		<div id='addCategoryModal' className='modal'>
			</div> );

	return (
		<section>
			{AdminActionBtns()}
			{AdminCategoryModal()}
		</section>
	);
};


export default AdminDashboard;
