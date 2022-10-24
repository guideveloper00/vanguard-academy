import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("o nome não pode estar vazio"),
  email: yup
    .string()
    .email("formato precisa ser de email")
    .required("o email não pode estar vazio"),
  password: yup
    .string()
    .min(5, "menos")
    .required("a senha não pode estar vazio"),
});
