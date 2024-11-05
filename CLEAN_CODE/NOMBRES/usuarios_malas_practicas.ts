// Definición del Tipo
interface U {
    i: number;
    n: string;
    e: string;
    a: boolean;
  }
  
  // Propiedades del Componente List
  interface LProps {
    u: U[];
    cb: (id: number) => void;
  }
  
  // Componente de Lista
  const L: React.FC<LProps> = ({ u, cb }) => {
    return (
      <ul>
        {u.map((el) => (
          <li key={el.i}>
            <LiItem el={el} cb={cb} />
          </li>
        ))}
      </ul>
    );
  };
  
  // Componente de Elemento
  interface LiItemProps {
    el: U;
    cb: (id: number) => void;
  }
  
  const LiItem: React.FC<LiItemProps> = ({ el, cb }) => {
    const fn = () => cb(el.i);
  
    return (
      <div onClick={fn} style={{ color: el.a ? "green" : "gray" }}>
        {el.n} - {el.e}
      </div>
    );
  };
  