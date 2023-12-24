"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          E aiii, Tudo bem ? <span className="text-lg ml-3">😅</span>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none cursor-pointer flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => router.push("/voce-clicou-no-memoji")}
          >
            Nao clique nesse memoji!!!!!{" "}
            <Image
              src="/memoji.png"
              alt="Benito Pedro"
              width={120}
              height={120}
              priority
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col place-items-center">
        <p>Oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii :D</p>
        <br />
        <p>Como voce esta ? espero que melhor !!!!!</p>
        <br />
        <p>Nao consigo entender pq eu nao posso mais falar com voce :(</p>
        <br />
        <p>Eu estou com medo de voce nao me desbloquear mais...</p>
        <p>
          tudo bem se nao desbloquear tbm, mas eu to sentindo falta de conversar
          com voce
        </p>
        <br />
        <p>
          se o problema for pq voce namora, eu paro de ficar flertando com voce
          e podemos ser amigos
        </p>
        <p>
          eu so queria sua amizade.. é tao dificil achar pessoas parecidas com
          voce
        </p>
        <br />
        <p>
          se eu te tratar apenas como amiga, a gente pode voltar a se falar ?
          prometo nunca mais tentar ficar com voce
        </p>
        <br />
        <p>
          Ontem meu dia foi horrivel, muito tempo que nao me sentia mal assim,
          mas hoje ja estou bem melhor :)
        </p>
        <br />
        <p>
          enfim, e isso... desculpa novamente por complicar mais sua vida do que
          ela ja é
        </p>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://wa.me/5521983849852"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center w-[250px] mt-6 cursor-pointer rounded-lg transition-all h-16 font-bold text-base bg-[#04FF93] hover:scale-110 text-black shadow-md px-6 py-4 border-2 border-black">
            Vire minha amiga!! <span className="text-2xl ml-3">🥹</span>
          </button>
        </a>
      </div>
    </main>
  );
}
//
