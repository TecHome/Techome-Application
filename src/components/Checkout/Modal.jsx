import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

export default function AlertDialog({open, setOpen}) {


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{background:'#151515', color:'#EBEBEB'}}>Orden Realizada con Exito</DialogTitle>
        <DialogActions style={{background:'#151515'}}>
          <Button onClick={handleClose}  component={Link}  to='/orders' color="secondary" variant="contained" >
            Ver Orden
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
