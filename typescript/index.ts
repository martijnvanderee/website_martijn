import { FormikProps } from "formik";


export interface PostData {
  default: { attributes: any, html: string }
  attributes: {
    templateKey: string;
    titel: string;
    Subtitel: string
    date: Date;
    image: string;
    onderwerp: string
    auteur: string;
    tags: string[]
  }
  html: string
  slug: string
}


type Values = {
  email: "";
  instantie: "";
  message: "";
  name: "";
  subject: "";
};

export interface IFormItems {
  label: string;
  name: string;
  formik: FormikProps<Values>;
  type: string;
  options?: SelectOptions[];
}
