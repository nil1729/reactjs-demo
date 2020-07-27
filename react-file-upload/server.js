const express = require('express');
const expressFileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
	app.use(cors());
}

app.use(expressFileUpload());

app.post('/api_v1_upload', async (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).json({
			message: 'No files were uploaded.',
		});
	}
	let uploadedFile = req.files.image;
	const fileName = `${uploadedFile.name.split('.')[0]}-${new Date().getTime()}`;
	const extName = uploadedFile.name.split('.')[1];
	uploadedFile.mv(
		__dirname + `/client/public/uploads/${fileName}.${extName}`,
		function (err) {
			if (err)
				return res.status(500).json({
					message: 'There was a problem with the Server',
				});

			res.status(200).json({
				message: 'Files Uploaded Successfully',
				file: {
					name: fileName,
					originalName: uploadedFile.name,
				},
			});
		}
	);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
