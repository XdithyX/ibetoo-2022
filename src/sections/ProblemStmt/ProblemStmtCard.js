import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import dialog_vector1 from '../../assets/svg/dialog_vector1.svg'
import dialog_vector2 from '../../assets/svg/dialog_vector2.svg'
import Aos from 'aos';
import { IoClose } from "react-icons/io5";



function ProblemStmtCard({name, ps_image, description, statements }) {
  
  useEffect(()=>{
    Aos.init({duration:1100})
  })

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div data-aos="fade-up" className='problemStmtCard'>
        <h2 className='ps__card_title'>{name}</h2>
        <img src={ps_image} className="ps_image" alt="image_ps" />
        <button onClick={handleClickOpen}>View Details</button>
        <Dialog
          style={{ padding: 0, borderRadius: 10}}
          fullWidth={true}
          maxWidth={"md"}
          PaperProps={{ sx: { width: "100%", borderRadius: 5, m: 2, minHeight: '70vh' } }}
          open={open}
          keepMounted
          onClose={handleClose}
          disableScrollLock
          aria-describedby="alert-dialog-slide-description"
        >
          
        <DialogContent
            style={{ padding: 0, borderRadius: 10 }}
          >
            <div className='psDialog'>
              <IoClose className='psDialog__close' onClick={handleClose}/>
              <img src={dialog_vector1} alt="dialogvect" className='dialog_vector1' />
              <img src={dialog_vector2} alt="dialogvect" className='dialog_vector2' />
              <div className='psDialog__header'>
                <h2>{name}</h2>
              </div>
              <div className='psDialog__content'>
                <h4>Description</h4>
                <p>{description}</p>
                {statements.length===0 ?null:<h4>Statements</h4>}
                <ul>
                  {statements.map((st, id) => (
                    <li key={id}>{st}</li>
                  ))}
                </ul>
                
              </div>
              <div style={{minHeight:'1rem'}}></div>
            </div>
            
          </DialogContent>
          
      </Dialog>
    </div>
  )
}

export default ProblemStmtCard