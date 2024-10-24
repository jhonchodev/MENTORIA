// Button Base Component
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);


// PrimaryButton inherits Button
const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} />
);

// SecondaryButton inherits Button with some extra styles
const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} />
);

