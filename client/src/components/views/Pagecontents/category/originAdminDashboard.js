import React, { useEffect } from 'react';
// components
import AdminActionBtns from './AdminActionBtns';
import AdminCategoryModal from './AdminCategoryModal';


//redux
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoryActions';
import { getProducts } from '../redux/actions/productActions';


const AdminDashboard = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);
	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<section>

			<AdminActionBtns />
			<AdminCategoryModal />

		</section>
	);
};

export default AdminDashboard;
