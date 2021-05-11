import FormItem from "./formItem";
import { Form } from "formik";

export const FormConstruct = (props:any) => {

  return ( <Form className="bg-white shadow-offset rounded px-8 pt-6 pb-8 mb-4">
<FormItem type="text" label="naam" name="name" />
<FormItem type="text" label="instantie" name="instantie" />
<FormItem type="text" label="email" name="email" />
<FormItem type="textarea" label="opmerkingen" name="message" />
<button
  type="submit"
  className="bg-color1 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow text-base"
>
  verzend
</button>
</Form>)

}
