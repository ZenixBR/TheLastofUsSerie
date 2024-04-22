import joelellie from "/joelellie.jpg";
import joel from "/joel.jfif";
import ellie from "/ellie.webp";
import gabriel from "/Gabriel_Luna.webp";
import nico from "/Nico_Parker.png";
import merle from "/Merle Dandridge.jfif";
import jeffrey from "/Jeffrey Pierce.jpg";
import craig from "/Craig.jpg";
import neil from "/Neil.jfif";
import hospital from "/hospital.webp";
import game from "/last-of-us-como-assistir.webp";
import Header from "../components/Header"

export default function TheLastofUs() {
  return (
    <main className="flex">
      <Header />
      <section className="flex justify-center">
        <div id="pginicial" className=" flex flex-col justify-center items-center bg-white w-8/12">
          <h1 className="text-5xl font-bold mt-20 mb-8">The Last of Us A Série</h1>
          <img
            className="w-96"
            src={joelellie}
            alt="Joel e Ellie junto em um plano de fundo preto"
          />
          <p id="elenco" className="text-1 font-thin mt-4 text-subtitulo">The Last Of Us A Série</p>

          <h2 className="text-3xl font-medium mt-10 mb-6 text-subtitulo">Elenco</h2>
          <p className="text-2xl w-8/12 mb-10 text-justify font-thin text-paragrafo">
            O elenco da série incluía Pedro Pascal no papel de Joel e Bella Ramsey
            como Ellie, ambos conhecidos por seus papéis em "Game of Thrones". Além
            disso, outros membros do elenco incluíam Gabriel Luna, Nico Parker,
            Merle Dandridge, Jeffrey Pierce e outros.
          </p>
          <div className="flex pb-6">
            <img
              className="w-60 pr-6"
              src={joel}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
            <img
              className="w-60 pr-6"
              src={ellie}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
          </div>
          <div className="flex">
            <img
              className="w-60 pr-6"
              src={gabriel}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
            <img
              className="w-60 pr-6"
              src={nico}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
            <img
              className="w-60 pr-6"
              src={merle}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
            <img
              className="w-60"
              src={jeffrey}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
          </div>

          <p id="producao" className="text-1 font-thin mt-4 text-subtitulo">Elencos do The Last of Us</p>

          <h2 className="text-3xl font-medium mt-10 text-subtitulo">Produção</h2>

          <p className="text-2xl w-8/12 my-6 text-justify font-thin text-paragrafo">
            Craig Mazin, conhecido por criar a aclamada série "Chernobyl", estava
            atuando como escritor e produtor executivo ao lado de Neil Druckmann, o
            diretor criativo por trás dos jogos "The Last of Us". A série estava
            sendo produzida pela HBO.
          </p>

          <div className="flex">
            <img
              className="w-60 mr-6"
              src={craig}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
            <img
              className="w-60"
              src={neil}
              alt="Joel e Ellie junto em um plano de fundo preto"
            />
          </div>

          <p id="historia" className="text-1 font-thin mt-4 text-subtitulo">Principais Produtores</p>

          <h2 className="text-3xl font-medium mt-10 text-subtitulo">História</h2>

          <p className="text-2xl w-8/12 my-8 text-justify font-thin text-paragrafo">
            A série é baseada no enredo do primeiro jogo da franquia, "The Last of
            Us", que se passa em um mundo pós-apocalíptico onde a civilização foi
            destruída por uma pandemia que transforma pessoas em criaturas hostis
            semelhantes a zumbis. A história segue Joel, um sobrevivente endurecido,
            e Ellie, uma jovem imune ao vírus, enquanto eles viajam juntos por um
            Estados Unidos devastado, enfrentando não apenas as criaturas
            infectadas, mas também outros sobreviventes desesperados.
          </p>

          <img
            className="w-6/12 "
            src={hospital}
            alt="Joel e Ellie junto em um plano de fundo preto"
          />

          <p id="espectativas" className="text-1 font-thin mt-4 text-subtitulo">Parte principal da história</p>

          <h2 className="text-3xl font-medium mt-10 text-subtitulo">Espectativas</h2>

          <p className="text-2xl w-8/12 my-6 text-justify font-thin text-paragrafo">
            Devido à popularidade massiva do jogo e ao talento envolvido na produção
            da série, muitos fãs estavam ansiosos para ver como a adaptação para a
            TV iria capturar a atmosfera sombria e a narrativa emocionalmente
            intensa do jogo.
          </p>

          <img
            className="w-2/4 "
            src={game}
            alt="Joel e Ellie junto em um plano de fundo preto"
          />

          <h2 className="text-3xl font-medium my-10 text-subtitulo">Trailer</h2>

          <iframe className="mb-10" width="660" height="415" src="https://www.youtube.com/embed/IpjRuuFEPMk?si=W9Poqar4kMrVkQXb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
    </main>
  );
}