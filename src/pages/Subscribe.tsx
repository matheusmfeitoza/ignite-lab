import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { CodePhoto } from "../components/CodePhoto";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        nome,
        email,
      },
    });
    navigate("/event");
  }
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="bg-gray-700 p-8 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <Input
              type="text"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {loading ? (
              <button
                disabled
                className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors disabled:opacity-50"
                type="submit"
              >
                {" "}
                Carregando...{" "}
              </button>
            ) : (
              <button
                className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
                type="submit"
              >
                Enviar{" "}
              </button>
            )}
          </form>
        </div>
      </div>
      <CodePhoto />
    </div>
  );
}
