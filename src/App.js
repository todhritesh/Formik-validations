import React from 'react'
import FormikContainer from './components/formik-form/FormikContainer'
import {Grid} from '@mui/material'
import { Formik, Form, Field, FieldArray } from 'formik';
import MyForm from './MyForm';
import Temp from './Temp';





function App() {
  return (
   <Grid mt={5} container justifyContent={"center"}>
      <Grid item md={4}>
        <FormikContainer />


        {/* <Temp/> */}





      </Grid>
   </Grid>
  )
}

export default App