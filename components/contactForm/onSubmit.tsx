import { fetcher } from "../../functions/fetcher";

type IValues = {
  name: string;
  instantie: string;
  email: string;
  message: string;
  subject: string;
};

export const onSubmit = async (values: any, test: any) => {
  const { name, email, message, instantie, subject } = values;

  const data = await fetcher(
    [
      "https://us-central1-website-dennis-stassen.cloudfunctions.net/app",
      "mail",
    ],
    {
      name,
      email,
      message,
      instantie,
      subject,
    }
  );
  console.log(data, 'data')

  test.resetForm({});
};
