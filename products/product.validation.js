import * as Yup from "yup";

export let addProductSchema = Yup.object({
  productName: Yup.string()
    .required("Product name is required.")
    .trim()
    .max(55),
  quantity: Yup.number().required(),
  price: Yup.number().required(),
  rating: Yup.number().required(),
});
