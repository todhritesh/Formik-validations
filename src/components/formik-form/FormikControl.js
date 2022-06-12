import React from 'react'
import MuiChceckbox from './MuiChceckbox'
import MuiDate from './MuiDate'
import MuiFieldArray from './MuiFieldArray'
import MuiInput from './MuiInput'
import MuiRadio from './MuiRadio'
import MuiSelect from './MuiSelect'
function FormikControl(props) {
    const {control,...rest} = props
  switch (control) {
    case "muiInput": return <MuiInput {...rest} />
    case "muiRadio": return <MuiRadio {...rest} />
    case "muiFieldArray": return <MuiFieldArray {...rest} />
    case "muiSelect": return <MuiSelect {...rest} />
    case "muiDate": return <MuiDate {...rest} />
    case "muiCheckbox": return <MuiChceckbox {...rest} />
    default : return null
  }
}

export default FormikControl