import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // function classNames(classes) {
  //   return Object.entries(classes)
  //     // .filter(([key, value]) => value)
  //     .map(([key]) => key)
  //     .join(' ');
  // }

  // const classes = {
  //   'maybeClass': meta.touched && meta.error ? "input-error" : props.name,
  //   'unosOdgovora': true,
    
  // };
  // const myClassNames = classNames(classes);
  // const myClassNames = (meta.touched && meta.error ? "input-error" : props.name).join(' ')
  // const klasaPametna = meta.touched && meta.error ? "input-error" : props.name;

  return (
    <>
      <label className="imePitanja">{label}</label>
      <input
        {...field}
        {...props}
        // className={meta.touched && meta.error ? "input-error" : props.name }
        // className={myClassNames}
        className={`unosOdgovora ${meta.touched && meta.error ? "input-error" : props.name}`}
        
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;
