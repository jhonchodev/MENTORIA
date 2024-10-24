# Cómo se Aplica el Principio de Liskov

* **Reemplazo transparente:** En el componente padre (``ParentComponent``), puedes cambiar entre ``PrimaryButton`` y ``Button`` sin romper la funcionalidad del ``onClick``.
  
* **Comportamiento consistente:** Los botones personalizados (``PrimaryButton`` y ``SecondaryButton``) mantienen la misma funcionalidad que el componente base (``Button``). Si uno de estos botones no respetara el contrato original, como dejar de llamar al ``onClick``, se estaría violando el **principio de Liskov**.


# Qué Evitar (Violación del LSP)

Si, por ejemplo, ``PrimaryButton`` ignorara la prop ``onClick`` o la reemplazara con un comportamiento inesperado, el **principio de Liskov** se estaría violando.



```tsx
const BadButton: React.FC<ButtonProps> = ({ label }) => (
  <button>{label}</button> // Falta onClick, comportamiento inconsistente
);
```

Este tipo de problema haría que la sustitución del componente base (``Button``) por el derivado algún derivado generara errores inesperados en la aplicación.