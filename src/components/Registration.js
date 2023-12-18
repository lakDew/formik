import { useFormik } from "formik";
import initialValue from "../constant/form";
import { signUpSchema } from "../schemas/inedx";

const Registration = () => {
  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,

    validationSchema:signUpSchema,
    onSubmit: (values,action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(touched)
  return (

    <div>
        <form onSubmit={handleSubmit}>
      
      <div>
        <label for="name">Name</label>
        <input
          type="name"
          autoComplete="off"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
       {errors.name && touched.name &&
        <p className="form-error">{errors.name}</p> }
      </div>
      <div>
        <label for="name">Email</label>
        <input
          type="email"
          autoComplete="off"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.email && touched.email &&
        <p className="form-error">{errors.email}</p> }
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.password && touched.password &&
        <p className="form-error">{errors.password}</p> }
      </div>
      <div>
        <label for="confirm_password">Confirm Password</label>
        <input
          type="password"
          autoComplete="off"
          id="confirm_password"
          name="confirm_password"
          placeholder="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {errors.confirm_password && touched.confirm_password &&
        <p className="form-error">{errors.confirm_password}</p> }
      </div>
    <div>
        <button type="submit">
            Register
        </button>
    </div>

    <select name="plan" id="plan">
        <option value="none" selected disabled hidden>
          Select an Option
      </option>
        <option value="free">Free</option>
        <option value="starter">Starter </option>
        <option value="professional">Professional</option>
        <option value="corporate">Corporate</option>
    </select>

    </form>
    </div>
    
  );
};
export default Registration;
