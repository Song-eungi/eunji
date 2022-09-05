import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//import  Button  from "react-bootstrap"



const AdminDashboard = () => {

	const AdminActionBtns = () => (
        <div className='bg-light my-2'>
            <div className='container'>
                <div className='row pb-3'>
                    <div className='col-md-4 my-1'>
                        <button
                            className='btn btn-outline-info btn-block'
                            data-toggle='modal'
                            data-target='#addCategoryModal'>
                            <i className='fas fa-plus'> Add Category</i>
                        </button>
                    </div>
    
                    <div className='col-md-4 my-1'>
                        <button
                            className='btn btn-outline-warning btn-block'
                            data-toggle='modal'
                            data-target='#addFoodModal'
                        >
                            <i className='fas fa-plus'> Add Nutrients</i>
                        </button>
                    </div>
    
                </div>
            </div>
        </div>
	);
    
	const AdminCategoryModal = () => (
		<div id="addCategoryModal" className="modal fade" role="dialog">
		<div className="modal-dialog">
			<div className="modal-content">
			<div className="modal-header">
				<button type="button" className="close" data-dismiss="modal">&times;</button>
				<h4 className="modal-title">Modal Header</h4>
			</div>
			<div className="modal-body">
				<p>Some text in the modal.</p>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			</div>
			</div>

		</div>
		</div>

		
			);


			
	return (
		<section>
			{AdminCategoryModal()}
			{AdminActionBtns()}
		</section>
	);

};


export default AdminDashboard;

