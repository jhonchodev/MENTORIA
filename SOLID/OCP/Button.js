export const Button = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
);

// Botón extendido con ícono sin modificar el componente original
export const IconButton = (props) => (
    <Button {...props}>
        <span>🔍</span> {props.children}
    </Button>
);