import React from 'react'
import {Formik,Form,FieldArray,Field} from "formik";
import {TextField,} from "formik-mui"
import { Button } from '@mui/material';

function Temp() {
  return (
    <Formik initialValues={{skills:[""]}} onSubmit={val=>console.log("submit val",val)} >
        {
            ()=>(
                <Form>
                <FieldArray name="skills">
                    {
                        ({push,remove,form})=>(
                            form.values.skills.map((item,i)=>(
                                <div key={i}>
                                    <Field component={TextField} name={`skills[${i}]`} />
                                    <Button variant="contained"  color="success" onClick={()=>push("")}>+</Button>
                                    <Button  variant="contained" color="error" onClick={()=>remove(i)}>-</Button>
                                </div>
                            ))
                        )
                    }
                </FieldArray>
            </Form>
            )
        }
    </Formik>
  )
}

export default Temp