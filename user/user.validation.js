import * as Yup from "yup";

export let addUserSchema = Yup.object({
  userName: Yup.string().required("User name is required.").trim().max(55),
  email: Yup.string()
    .email("Must be valid email.")
    .required("Email is required.")
    .trim()
    .max(55)
    .lowercase(),
  password: Yup.string()
    .required("Password must be required")
    .max(70, "Password must be at max 70 character")
    .min(6, "Password must be at min 6 character")
    .trim(),
  dob: Yup.date().nullable(),
  gender: Yup.string().nullable().oneOf(["male", "female", "other"]),
});
