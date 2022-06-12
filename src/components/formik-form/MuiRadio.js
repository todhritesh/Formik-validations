import React from 'react'
import {Field} from 'formik'
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio } from '@mui/material'
import {RadioGroup} from "formik-mui"
function MuiRadio(props) {
    const {name,label,options,...rest} = props
  return (
    <Field name={name} >
        {
            ({field,form}) => {
                return (
                    <FormControl >
                        <FormLabel  id={name}>{label}</FormLabel>
                        <Field component={RadioGroup} row name={name} {...field}>
                            {
                                options.map(item=>(
                                    <FormControlLabel control={<Radio/>} label={item.key} value={item.value} />
                                ))
                            }
                        </Field>
                        <FormHelperText  error={form.touched[name] && true} >{form.touched[name] && form.errors[name]}</FormHelperText>
                    </FormControl>
                )
            }
        }
    </Field>
  )
}

export default MuiRadio