import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("o nome não pode estar vazio"),
  email: yup
    .string()
    .email("formato precisa ser de email")
    .required("o email não pode estar vazia"),
  password: yup.string().required("a senha não pode estar vazio"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não conferem"),
});
