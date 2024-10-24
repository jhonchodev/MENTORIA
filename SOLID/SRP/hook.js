// Estado y lógica en custom hook
const useCharacter = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => { /* fetch data */ }, []);
  return { characters };
};

// Componente que solo renderiza UI
const CharacterList = () => {
  const { characters } = useCharacter();
  return <div>{characters.map(c => <p>{c.name}</p>)}</div>;
};
