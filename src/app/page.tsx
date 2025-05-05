const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="bg-linear-to-r from-red-400 to-blue-400 text-transparent bg-clip-text font-extrabold text-8xl inline-block">
            MORSE
          </h2>

          <p className="text-2xl">
            Monitoramento de Riscos e Sistemas Metereológicos do Espírito Santo
          </p>
        </div>

        <div className="flex flex-col gap-1 text-gray-500 items-center">
          <p className="text-center font-bold">FAESA Centro Universitário</p>
          <p className="text-center">Unidade de Computação e Sistemas</p>
          <p>
            Trabalho desenvolvido para disciplina{" "}
            <strong>Projeto Integrador III</strong>
          </p>
          <p className="text-center">Período 2025/1 • Turma 5HC1</p>
          <p>
            <strong>Professor:</strong> Howard Roatti
          </p>
          <div className="text-center">
            <strong>Alunos:</strong>{" "}
            <ul>
              <li>Felipe Umpierre</li>
              <p>Nichole Nicolini</p>
              <p>Marlon Lacerda</p>
              <p>Lucas Ferrari</p>
              <p>Gustavo Trevezani</p>
            </ul>
          </div>
        </div>

        <p className="text-xl italic">
          Selecione uma página no menu superior para começar.
        </p>
      </div>
    </>
  );
};

export default Home;
