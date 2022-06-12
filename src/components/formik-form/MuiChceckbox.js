import React from 'react'
import {Checkbox,} from "formik-mui"
import {Field} from "formik"
import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel } from '@mui/material'
function MuiChceckbox({name,label,options,...rest}) {
  return (
    <Grid container>
        <FormControl>
            {
                <Field name={name}>
                    {
                        ({form,field})=>{
                            console.log(field)
                            return(
                            options.map(item=>(
                                <div key={item.key}>
                                    <Field component={Checkbox}  {...field} value={item.value} />
                                    <FormLabel>{item.key}</FormLabel>
                                </div >
                            )))
                        }
                    }
                </Field>
            }
        </FormControl>
    </Grid>
  )
}

export default MuiChceckbox