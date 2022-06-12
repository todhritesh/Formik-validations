import React from 'react'
import {Field} from "formik";
import {Select,} from "formik-mui"
import { FormControl, InputLabel, MenuItem } from '@mui/material';

function MuiSelect({name,label,options,...rest}) {
  return (
        <FormControl fullWidth sx={{my:2}}>
    <Field name={name} >
            {
                ({field,form}) => (
                    <Field component={Select} {...field} defaultValue={""}  label={label}>
                    {options.map((item,i)=>(
                        <MenuItem disabled={i===0&&true} value={item.value}>{item.key}</MenuItem>
                    ))}
                    </Field>
                )
            }
    </Field>
        </FormControl>
  )
}

export default MuiSelect