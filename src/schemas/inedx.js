import * as yup from "yup";
 export const signUpSchema=yup.object({
    name:yup.string().min(2).max(25).required("please Enter your name"),
    email:yup.string().email().required("please enter email"),
    password:yup.string().min(6).required("please enter password"),
    confirm_password:yup.string().required().oneOf([yup.ref("password"),null],"password must match")
 })