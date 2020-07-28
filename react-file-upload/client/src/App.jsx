import React from 'react';
import FileUpload from './components/FileUpload';
const App = () => {
	return (
		<div className='container'>
			<h1 className='display-4 text-center mb-4'>
				<i className='fab fa-react mr-3'></i>React File Upload
			</h1>
			<FileUpload />
		</div>
	);
};

export default App;
