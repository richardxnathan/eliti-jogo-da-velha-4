"use client"

export default function Home() {

  let jogador = "X";
  let jogoDaVelha = ["", "", "", "", "", "", "", "", ""]

  function jogar(posicao: any) {
    if (jogoDaVelha[posicao] == "") {
      jogoDaVelha[posicao] = jogador;

      if (jogador == "X") {
        jogador = "O";
      } else {
        jogador = "X";
      }
    } else {
      alert("Casa ocupada, jogue novamente!");
    }

    render();

    setTimeout(ganhou, 3000);
  }

  function render() {
    let tds = document.querySelectorAll("td");
    let index = 0;

    for (let index = 0; index < jogoDaVelha.length; index++) {
      tds[index].innerHTML = jogoDaVelha[index];
    }
  }

  function ganhou() {
    if ((jogoDaVelha[0] == jogoDaVelha[1] && jogoDaVelha[0] == jogoDaVelha[2] && jogoDaVelha[0] == "X") ||
      (jogoDaVelha[3] == jogoDaVelha[4] && jogoDaVelha[3] == jogoDaVelha[5] && jogoDaVelha[3] == "X") ||
      (jogoDaVelha[6] == jogoDaVelha[7] && jogoDaVelha[6] == jogoDaVelha[8] && jogoDaVelha[6] == "X") ||
      (jogoDaVelha[0] == jogoDaVelha[3] && jogoDaVelha[0] == jogoDaVelha[6] && jogoDaVelha[0] == "X") ||
      (jogoDaVelha[1] == jogoDaVelha[4] && jogoDaVelha[1] == jogoDaVelha[7] && jogoDaVelha[1] == "X") ||
      (jogoDaVelha[2] == jogoDaVelha[5] && jogoDaVelha[2] == jogoDaVelha[8] && jogoDaVelha[2] == "X") ||
      (jogoDaVelha[0] == jogoDaVelha[4] && jogoDaVelha[0] == jogoDaVelha[8] && jogoDaVelha[0] == "X") ||
      (jogoDaVelha[2] == jogoDaVelha[4] && jogoDaVelha[2] == jogoDaVelha[6] && jogoDaVelha[2] == "X")) {

      alert("O jogador X ganhou!")
    } else if ((jogoDaVelha[0] == jogoDaVelha[1] && jogoDaVelha[0] == jogoDaVelha[2] && jogoDaVelha[0] == "O") ||
      (jogoDaVelha[3] == jogoDaVelha[4] && jogoDaVelha[3] == jogoDaVelha[5] && jogoDaVelha[3] == "O") ||
      (jogoDaVelha[6] == jogoDaVelha[7] && jogoDaVelha[6] == jogoDaVelha[8] && jogoDaVelha[6] == "O") ||
      (jogoDaVelha[0] == jogoDaVelha[3] && jogoDaVelha[0] == jogoDaVelha[6] && jogoDaVelha[0] == "O") ||
      (jogoDaVelha[1] == jogoDaVelha[4] && jogoDaVelha[1] == jogoDaVelha[7] && jogoDaVelha[1] == "O") ||
      (jogoDaVelha[2] == jogoDaVelha[5] && jogoDaVelha[2] == jogoDaVelha[8] && jogoDaVelha[2] == "O") ||
      (jogoDaVelha[0] == jogoDaVelha[4] && jogoDaVelha[0] == jogoDaVelha[8] && jogoDaVelha[0] == "O") ||
      (jogoDaVelha[2] == jogoDaVelha[4] && jogoDaVelha[2] == jogoDaVelha[6] && jogoDaVelha[2] == "O")) {

      alert("O jogador O ganhou!")
    }
  }

  return (
    <>
      <header>
        <title>Jogo da Velha</title>
      </header>
      <main className='text-center text-6xl font-bold text-white'>
        <h1 className='mt-16 mb-20'>Jogo da Velha</h1>
        <table className='flex justify-center text-center'>
          <tbody>
            <tr>
              <td onClick={() => jogar(0)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
              <td onClick={() => jogar(1)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
              <td onClick={() => jogar(2)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
            </tr>
            <tr>
              <td onClick={() => jogar(3)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
              <td onClick={() => jogar(4)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
              <td onClick={() => jogar(5)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
            </tr>
            <tr>
              <td onClick={() => jogar(6)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
              <td onClick={() => jogar(7)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
              <td onClick={() => jogar(8)} className='border-2 border-white w-[100px] h-[100px] hover:bg-white hover:text-black'></td>
            </tr>
          </tbody>
        </table>

      </main>
    </>
  )
}
