import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
	const [fileName, setFileName] = useState('Choose File');
	const [file, setFile] = useState('');
	const onChange = e => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};
	const handleSubmit = async e => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('image', file);
		try {
			const res = await axios.post(
				'http://localhost:5000/api_v1_upload',
				formData,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			);
			console.log(res);
		} catch (e) {
			console.log(e.response.data.message);
		}
	};
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<div className='custom-file mb-2'>
					<input
						onChange={onChange}
						type='file'
						className='custom-file-input'
					/>
					<label className='custom-file-label' htmlFor='customFile'>
						{fileName}
					</label>
				</div>
				<button className='mt-3 btn btn-sm btn-block btn-primary'>
					Upload
				</button>
			</form>
		</div>
	);
};

export default FileUpload;
