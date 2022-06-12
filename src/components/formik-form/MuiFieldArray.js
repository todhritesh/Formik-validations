import React from 'react'
import {FieldArray,Field,ErrorMessage} from "formik"
import {FormControl,Button,FormLabel, FormHelperText, Stack} from "@mui/material"
import {TextField} from "formik-mui"
function MuiFieldArray({name,label,...rest}) {
  return (
    <FieldArray name={name}>
        {
            ({form,push,remove,}) => {
                const {values} = form;
                const {skills} = values
                return (
                    <FormControl fullWidth sx={{my:2}}>
                        <FormLabel>{label}</FormLabel>
                        {
                            skills.map((item,i)=>{
                                return <Stack direction={"row"} key={i} justifyContent="center" alignItems="center">
                                    {/* <div> */}
                                        <Field component={TextField} fullWidth name={`${name}[${i}]`}  />
                                        <Button sx={{my:"auto"}} variant="outlined" color="success" onClick={()=>push("")}>+</Button>
                                        <Button sx={{my:"auto"}} variant="outlined" color="error" onClick={()=>remove(i)}>-</Button>
                                    {/* </div> */}
                                </Stack>
                            })
                        }
                    </FormControl>
                )
            }
        }
    </FieldArray>
  )
}

export default MuiFieldArray