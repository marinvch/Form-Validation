import "./App.css";
import { Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "./Components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Textfield } from "./Components/FormsUi/Textfield";
import { Select } from "./Components/FormsUi/Select";
import { DateTimePicker } from "./Components/FormsUi/Datepicker";
import countries from "./data/countries.json";
import { CheckboxWrapper as Checkbox } from './Components/FormsUi/Checkbox';
import { ButtonComponent as Button } from "./Components/FormsUi/Button";
import { postData } from "./Services";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    margiNTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  arrivealDate: "",
  departureDate: "",
  message: "",
  termsOfService: false
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required."),
  lastName: Yup.string().required("Required."),
  email: Yup.string().email("Invalid email.").required("Required."),
  phone: Yup.number().integer().typeError("Please enter valid phone number").required("Required."),
  addressLine1: Yup.string().required("Required."),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required."),
  state: Yup.string(),
  country: Yup.string().required("Required."),
  arrivealDate: Yup.date().required("Required."),
  departureDate: Yup.date().required("Required."),
  message: Yup.string(),
  termsOfService: Yup.boolean().oneOf([true, "The terms and conditions must be accepted."]).required('The terms and conditions must be accepted.'),
});



function App() {
  const classes = useStyles();

  return (
    <Grid container style={{ paddingTop: "100px" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                postData(values)
              
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your Details</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="phone" label="Phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Address Line 1" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="addressLine2" label="Address Line 2" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="city" label="City" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="state" label="State" />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Booking information</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="arrivealDate"
                      label="Arrival Date" />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="message"
                      label="Mesage"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Checkbox name="termsOfService" legend="Terms of Service" label="I agree" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button>Submit Button</Button>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
