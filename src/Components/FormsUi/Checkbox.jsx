import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@material-ui/core";
import { useField, useFormikContext } from "formik";

export const CheckboxWrapper = ({
    name,
    label,
    legend,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();

    const [field, meta] = useField(name);

    const handleChange = (e) => {
        const { checked } = e.target;
        setFieldValue(name, checked);
    }
    const configCheckbox = {
        ...field,
        onChange: handleChange,
    };
    const configFormControl = {};

    if (meta && meta.touched && meta.error) {
        configFormControl.error = true;
    }
    return (
        <FormControl {...configFormControl}>
            <FormLabel component="legend"></FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox {...configCheckbox} />} label={label} />
            </FormGroup>
        </FormControl>
    )
}
