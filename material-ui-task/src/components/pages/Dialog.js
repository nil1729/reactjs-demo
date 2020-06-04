import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import ZoomInIcon from '@material-ui/icons/ZoomIn';



const DialogComponent = (props) => {
      
      const DialogContent = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiDialogContent);
      
      const DialogActions = withStyles((theme) => ({
        root: {
          margin: 0,
          padding: theme.spacing(1),
        },
      }))(MuiDialogActions);
      
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <ZoomInIcon onClick={handleClickOpen}/>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogContent dividers>
            <img src={props.img} alt={'Pixabay'} style={{width:'100%', height:'100%'}} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DialogComponent;