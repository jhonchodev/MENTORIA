// Ejemplo tomado de https://pieces.app/blog/solidifying-your-code-front-end-development-best-practices

// User Interface (Base Interface)
interface User {
    id: number;
    name: string;
    isClickable?: boolean; // Opcional porque no todos los usuarios serán clicables.
}

// Props para componentes
interface UserProps {
    user: User;
}

interface ClickableUserProps extends UserProps {
    onClick: (userId: number) => void;
}

// ClickableUser Component
const ClickableUser: React.FC<ClickableUserProps> = ({ user, onClick }) => (
    <div onClick= {() => onClick(user.id)} style = {{ cursor: "pointer" }}>
        { user.name }
        </div>
  );

// NonClickableUser Component
const NonClickableUser: React.FC<UserProps> = ({ user }) => (
    <div>{ user.name } </div>
);

// Parent Component
const ParentComponent: React.FC = () => {
    const handleClick = (userId: number) => {
        alert(`User ${userId} clicked!`);
    };

    const users: User[] = [
        { id: 1, name: "User 1", isClickable: true },
        { id: 2, name: "User 2", isClickable: false },
    ];

    return (
        <div>
        {
            users.map((user) =>
                user.isClickable ? (
                    <ClickableUser key= { user.id } user = { user } onClick = { handleClick } />
          ) : (
                        <NonClickableUser key={ user.id } user = { user } />
          )
    )
}
</div>
    );
  };

export default ParentComponent;
