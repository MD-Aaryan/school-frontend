interface ButtonProps {
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button";
  name?: string;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  label,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}
