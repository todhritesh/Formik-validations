import React from "react";
import { Divider, Button, TextField } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { FieldArray, Form, Formik, getIn } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  people: Yup.array().of(
    Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required")
    })
  )
});

const debug = true;

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   button: {
//     margin: theme.spacing(1)
//   },
//   field: {
//     margin: theme.spacing(1)
//   }
// }));

const MyForm = () => {
  // const classes = useStyles();

  return (
    <div
    //  className={classes.container}
     >
      <Formik
        initialValues={{
          people: [
            {
              id: Math.random(),
              firstName: "",
              lastName: ""
            }
          ]
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log("onSubmit", JSON.stringify(values, null, 2));
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
          <Form noValidate autoComplete="off">
            <FieldArray name="people">
              {({ push, remove }) => (
                <div>
                  {values.people.map((p, index) => {
                    const firstName = `people[${index}].firstName`;
                    const touchedFirstName = getIn(touched, firstName);
                    const errorFirstName = getIn(errors, firstName);

                    const lastName = `people[${index}].lastName`;
                    const touchedLastName = getIn(touched, lastName);
                    const errorLastName = getIn(errors, lastName);

                    return (
                      <div key={p.id}>
                        <TextField
                          margin="normal"
                          variant="outlined"
                          label="First name"
                          name={firstName}
                          value={p.firstName}
                          required
                          helperText={
                            touchedFirstName && errorFirstName
                              ? errorFirstName
                              : ""
                          }
                          error={Boolean(touchedFirstName && errorFirstName)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <TextField
                          margin="normal"
                          variant="outlined"
                          label="Last name"
                          name={lastName}
                          value={p.lastName}
                          required
                          helperText={
                            touchedLastName && errorLastName
                              ? errorLastName
                              : ""
                          }
                          error={Boolean(touchedLastName && errorLastName)}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Button
                          margin="normal"
                          type="button"
                          color="secondary"
                          variant="outlined"
                          onClick={() => remove(index)}
                        >
                          x
                        </Button>
                      </div>
                    );
                  })}
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() =>
                      push({ id: Math.random(), firstName: "", lastName: "" })
                    }
                  >
                    Add
                  </Button>
                </div>
              )}
            </FieldArray>
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            <Button
              // className={classes.button}
              type="submit"
              color="primary"
              variant="contained"
              // disabled={!isValid || values.people.length === 0}
            >
              submit
            </Button>
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
            {debug && (
              <>
                <pre style={{ textAlign: "left" }}>
                  <strong>Values</strong>
                  <br />
                  {JSON.stringify(values, null, 2)}
                </pre>
                <pre style={{ textAlign: "left" }}>
                  <strong>Errors</strong>
                  <br />
                  {JSON.stringify(errors, null, 2)}
                </pre>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
