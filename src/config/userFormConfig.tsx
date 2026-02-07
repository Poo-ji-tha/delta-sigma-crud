/**
 * userFormConfig
 *
 * Configuration array for dynamically generating user form fields.
 * Each object defines the input's `name`, display `label`, and HTML `type`.
 *
 * Usage Example:
 *  userFormConfig.map(field => (
 *    <TextField
 *      key={field.name}
 *      label={field.label}
 *      type={field.type}
 *      {...register(field.name)}
 *    />
 *  ));
 *
 * Notes:
 *  - This allows the form to be easily extended by adding/removing fields
 *    without modifying the form component JSX.
 *  - Can be used with react-hook-form for dynamic registration and validation.
 */

export const userFormConfig = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone", type: "text" },
];
