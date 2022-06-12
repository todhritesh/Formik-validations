import React from 'react'
import {Form, Formik} from 'formik'
import * as Yup from "yup"
import FormikControl from './FormikControl';
import { Button, Grid } from '@mui/material';

const genderOptions = [
    {key:"Male",value:'male'},
    {key:"Female",value:'female'},
    {key:"Other",value:'other'}
]

const interestOptions = [
    {key:"Football",value:'Football'},
    {key:"Badminton",value:'Badminton'},
    {key:"Singing",value:'Singing'},
    {key:"Eating",value:'Eating'},
    {key:"Sleeping",value:'Sleeping'},
    {key:"Video games",value:'Video games'},
]

const incomeOptions = [
    {key:"Your income",value:""},
    {key:"Below 150000",value:"below 150000"},
    {key:"150000-250000",value:"150000-250000"},
    {key:"250000-500000",value:"250000-500000"},
    {key:"500000-1000000",value:"500000-1000000"},
    {key:"Above 1000000",value:"above 1000000"},
]

function FormikContainer() {
    const initialValues ={
        firstName:"",
        lastName:"",
        password:"",
        gender:"",
        skills:[""],
        income:"",
        dob:"",
        interests:[],
    };
    const validationSchema = Yup.object().shape({
        firstName:Yup.string().required("Required").test("", "${path} is not tea", value => value === "tea"),
        lastName:Yup.string().required("Required"),
        password:Yup.string().required("Required"),
        gender:Yup.string().required("Required"),
        skills:Yup.array().of(Yup.string().required("Required inner")).min(1,"1 field is required").required("Required"),
        income:Yup.string().required("Required"),
        dob:Yup.date().required("Required"),
        interests:Yup.array().of(Yup.string().required("Required")).required("Required")
    })
    const onSubmit = (values,actions) => {console.log('submit values',values);actions.resetForm()}
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {
            formik => {
                return (
                    <Form>
                        <Grid container={true} >
                            <Grid item xs={12}>
                                <FormikControl type="text" name="firstName" label="First name" control="muiInput" />
                                <FormikControl type="text" name="lastName" label="Last name" control="muiInput" />
                                <FormikControl type="password" name="password" label="Password" control="muiInput" />
                                <FormikControl options={genderOptions} name="gender" label="Gender" control="muiRadio" />
                                <FormikControl control="muiFieldArray" name="skills" label="Skills"  />
                                <FormikControl control="muiSelect" name="income" label="Income" options = {incomeOptions} />
                                <FormikControl control ="muiDate" name="dob" label="Date of birth" />
                                <FormikControl control ="muiCheckbox" name="interests" label="Interests" options={interestOptions} />
                            </Grid>
                            <Button type="submit" variant='outlined' >Submit</Button>
                        </Grid>
                    </Form>
                )
            }
        }
    </Formik>
  )
}

export default FormikContainer