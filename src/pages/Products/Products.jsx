import React from 'react'
import Card from '../../components/Card/Card'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Footer from '../../components/Footer/Footer';

const currencies = [
  {
    value: 'USD',
    label: '$', 
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
export default function Products() {


  return (
    <>
      <div className="Product">
        <div className="row">
          <div className="col-lg-4 col-xl-4 col-xxl-4 ms-5 mt-5">
            <p className='pProducts'>Shop The Latest</p>
            <br />
            <Box component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"  >
              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                maxRows={4}
                variant="standard"
              />
<br />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
           </Box>
          </div>   
          <div className="col-lg-8 col-xl-8 col-xxl-8" style={{
            marginRight:'-80px'
          }}>
            <Card /></div>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}
