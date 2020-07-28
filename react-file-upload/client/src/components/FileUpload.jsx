import React, { useState } from 'react';
import axios from 'axios';
import Alerts from './Alerts';
import Progress from './Progress';

const FileUpload = () => {
	const [fileName, setFileName] = useState('Choose File');
	const [file, setFile] = useState('');
	const [alerts, setAlerts] = useState({});
	const [uploadedFile, setUploadedFile] = useState(null);
	const [progressPercentage, setProgressPercentage] = useState(0);
	const onChange = e => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};
	const removeAlert = () => {
		setAlerts({});
	};
	const handleSubmit = async e => {
		e.preventDefault();
		let formData = new FormData();
		formData.append('image', file);
		try {
			const res = await axios.post('/upload', formData, {
				headers: { 'Content-Type': 'multipart/form-data' },
				onUploadProgress: progress => {
					setProgressPercentage(
						Math.round((progress.loaded / progress.total) * 100)
					);
					setTimeout(() => {
						setProgressPercentage(0);
					}, 7000);
				},
			});
			setAlerts({
				type: 'success',
				msg: res.data.message,
			});
			setUploadedFile(res.data.file);
		} catch (e) {
			setAlerts({
				type: 'danger',
				msg: e.response.data.message,
			});
		}
	};
	return (
		<div className='container'>
			<Alerts alerts={alerts} removeAlert={removeAlert} />
			<form className='mt-2' onSubmit={handleSubmit}>
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
				<Progress progressPercentage={progressPercentage} />
				<button className='mt-3 btn btn-sm btn-block btn-primary'>
					Upload
				</button>
			</form>

			<div className='container mt-5'>
				{uploadedFile ? (
					<>
						<p className='lead text-center my-3'>{uploadedFile.fileName}</p>
						<div className='row'>
							<div className='col-md-6 m-auto'>
								<img src={uploadedFile.filePath} alt='' className='img-fluid' />
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default FileUpload;
