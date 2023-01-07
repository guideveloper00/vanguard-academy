import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("formato precisa ser de email")
    .required("o email não pode estar vazia"),
  password: yup.string().required("a senha não pode estar vazio"),
});
