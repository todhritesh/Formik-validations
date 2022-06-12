import React from 'react'
import {TextField} from "formik-mui"
import {Field} from "formik"
import { FormControl, FormLabel, InputLabel } from '@mui/material';
function MuiDate({name,label,...rest}) {
  return (
    <FormControl sx={{my:2}} fullWidth>
        <FormLabel>{label}</FormLabel>
        <Field name={name}>
            {
                ({form,field})=>{
                    return (
                        <Field {...field} type="date"  component={TextField} ></Field>
                    )
                }
            }
        </Field>
    </FormControl>
  )
}

export default MuiDate