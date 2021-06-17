import { FormikProps } from "formik";


export interface PostData {
  default: { attributes: any, html: string }
  attributes: {
    templateKey: string;
    title: string;
    Subtitel: string
    date: Date;
    headerPhoto: string;
    onderwerp: string
    auteur: string;
    tags: string[]
    ["photo's"]: string[]
  }
  html: string
  slug: string
}

export interface DataPhotos {
  onderschrift: string
  bron: string
  image: string
}

export interface DataPhotosTotal {
  headerData: DataPhotos
  photosData: DataPhotos[]
}

type Values = {
  email: "";
  instantie: "";
  message: "";
  name: "";
  subject: "";
};


type SelectOptions = { value: string; label: string };

export interface IFormItems {
  label: string;
  name: string;
  formik: FormikProps<Values>;
  type: string;
  options?: SelectOptions[];
}
