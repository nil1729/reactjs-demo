const express = require('express');
const expressFileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
	app.use(cors());
}

app.use(expressFileUpload());

app.post('/upload', async (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).json({
			message: 'No files werers uploaded.',
		});
	}
	let uploadedFile = req.files.image;

	uploadedFile.mv(
		__dirname + `/client/public/uploads/${uploadedFile.name}`,
		function (err) {
			if (err)
				return res.status(500).json({
					message: 'There was a problem with the Server',
				});

			res.status(200).json({
				message: 'File Uploaded Successfully',
				file: {
					fileName: uploadedFile.name,
					filePath: `/uploads/${uploadedFile.name}`,
				},
			});
		}
	);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
