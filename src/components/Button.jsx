import { Link } from "react-router-dom";

// Botão reutilizável: vira <Link> quando recebe "to", ou <button> caso contrário.
export default function Button({ to, children, variante = "primario", ...resto }) {
  const classe = `btn btn--${variante}`;
  if (to) {
    return (
      <Link to={to} className={classe} {...resto}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classe} {...resto}>
      {children}
    </button>
  );
}
