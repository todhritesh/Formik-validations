import React from 'react'
import {Field} from 'formik'
import { FormControl,FormLabel } from '@mui/material'
import {TextField} from "formik-mui"
function MuiInput(props) {
    const {name,label,...rest} = props
  return (
    <Field name={name} >
        {
            ({form,field}) => {
                return (
                    <FormControl fullWidth sx={{my:1}}>
                        <FormLabel>{label}</FormLabel>
                        <Field component={TextField} id={name} {...rest} {...field} label={label}/>
                    </FormControl>
                )
            }
        }
    </Field>
  )
}

export default MuiInput