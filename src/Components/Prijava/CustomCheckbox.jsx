import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
      <label className="imePitanja imePitanjaDuze imePitanjaCheckBox">{label}</label>
        <input
          {...field}
          {...props}
          // className={meta.touched && meta.error ? "input-error " : props.name}
          className={`unosCheckBox ${meta.touched && meta.error ? "input-error" : props.name}`}

        />
        {/* <span className="">{label}</span> */}
      </div>

      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;
