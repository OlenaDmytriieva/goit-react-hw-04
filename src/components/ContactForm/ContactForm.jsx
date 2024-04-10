import style from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Enter more than 3 characters, please")
    .max(50, "Enter less than 50 characters, please")
    .required("Required"),
  number: Yup.string()
    .min(3, "Enter more than 3 characters, please")
    .max(50, "Enter less than 50 characters, please")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
  id: "",
};

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    // console.log({ ...values, id: nanoid() });
    onAdd({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={style.form}>
        <div className={style.labelAndField}>
          <label htmlFor={nameId}>Name</label>
          <Field className={style.field} id={nameId} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={style.error} />
        </div>
        <div className={style.labelAndField}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={style.field}
            id={numberId}
            type="tel"
            name="number"
          />
          <ErrorMessage name="number" component="div" className={style.error} />
        </div>
        <button className={style.addButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// export default function ContactForm({ onAdd }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAdd({
//       id: nanoid(),
//       name: e.target.elements.name.value,
//       number: e.target.elements.number.value,
//     });
//     e.target.reset();
//   };

//   const nameId = useId();
//   const numberId = useId();

//   return (
//     <form className={style.form} onSubmit={handleSubmit}>
//       <label htmlFor={nameId}>Name</label>
//       <input className={style.field} id={nameId} type="text" name="name" />
//       <label htmlFor={numberId}>Number</label>
//       <input className={style.field} id={numberId} type="tel" name="number" />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// }
