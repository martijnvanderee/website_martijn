import { validate } from "./validate";
import { Formik } from "formik";
import { FormConstruct } from "./form";
import { onSubmit } from "./onSubmit";

const initialValues = {
  name: "",
  instantie: "",
  email: "",
  message: "",
  subject: "error",
};

export const ContactForm = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
    >


      {(props: any) => (

        <div>
          <FormConstruct />
          <div> {console.log("props1", props)} {console.log("props1", props.isSubmitting)} {console.log("props1", props.errors)}</div>
        </div>
      )}

    </Formik>
  );
};
