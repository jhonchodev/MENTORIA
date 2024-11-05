// Definición del Tipo Usuario
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }
  
  // Propiedades del Componente UserList
  interface UserListProps {
    users: User[];
    onUserSelect: (userId: number) => void;
  }
  
  // Componente que Renderiza una Lista de Usuarios
  const UserList: React.FC<UserListProps> = ({ users, onUserSelect }) => {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem user={user} onSelect={onUserSelect} />
          </li>
        ))}
      </ul>
    );
  };
  
  // Componente de Usuario Individual
  interface UserItemProps {
    user: User;
    onSelect: (userId: number) => void;
  }
  
  const UserItem: React.FC<UserItemProps> = ({ user, onSelect }) => {
    const handleSelect = () => onSelect(user.id);
  
    return (
      <div onClick={handleSelect} style={{ color: user.isActive ? "green" : "gray" }}>
        {user.name} - {user.email}
      </div>
    );
  };
  