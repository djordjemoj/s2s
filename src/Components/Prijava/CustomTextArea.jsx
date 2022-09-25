import { useField } from "formik";

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="imePitanja imePitanjaDuze">{label}</label>
      <textarea
        {...field}
        {...props}
        // className={meta.touched && meta.error ? "input-error" : props.name}
        className={`unosTextBox ${meta.touched && meta.error ? "input-error" : props.name}`}

      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomTextArea;
