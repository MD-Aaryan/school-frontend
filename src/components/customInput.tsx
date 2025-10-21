interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
}

export default function CustomInput({
  label,

  ...props
}: CustomInputProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="input">{label}</label>
      <input
        placeholder={label}
        className="px-2 py-1 outline rounded"
        {...props}
      />
    </div>
  );
}
