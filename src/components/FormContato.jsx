import { useState } from "react";
import Button from "./Button.jsx";

const inicial = { nome: "", email: "", mensagem: "" };

export default function FormContato({ compacto = false }) {
  const [form, setForm] = useState(inicial);
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  const alterar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!form.nome.trim()) e.nome = "Informe seu nome.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Informe um e-mail válido.";
    if (form.mensagem.trim().length < 10) e.mensagem = "Escreva ao menos 10 caracteres.";
    setErros(e);
    if (Object.keys(e).length === 0) {
      setEnviado(true);
      setForm(inicial);
    }
  };

  return (
    <form className="form" onSubmit={enviar} noValidate>
      {enviado && <p className="form__sucesso" role="status">Mensagem enviada. Entraremos em contato em breve.</p>}
      <label>
        Nome
        <input name="nome" value={form.nome} onChange={alterar} autoComplete="name" />
        {erros.nome && <span className="form__erro">{erros.nome}</span>}
      </label>
      <label>
        E-mail
        <input name="email" type="email" value={form.email} onChange={alterar} autoComplete="email" />
        {erros.email && <span className="form__erro">{erros.email}</span>}
      </label>
      <label>
        Mensagem
        <textarea name="mensagem" rows={compacto ? 3 : 5} value={form.mensagem} onChange={alterar} />
        {erros.mensagem && <span className="form__erro">{erros.mensagem}</span>}
      </label>
      <Button type="submit" variante="escuro">Enviar</Button>
    </form>
  );
}
