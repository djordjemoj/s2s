import { useField } from "formik";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className="imePitanja imePitanjaSelect">{label }</label>
      <select
        {...field}
        {...props}
        // className={meta.touched && meta.error ? "input-error" : props.name}
        className={`unosSelekcije ${meta.touched && meta.error ? "input-error" : props.name}`}

      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomSelect;
