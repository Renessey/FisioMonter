import './css/Tela1.css';

export default function Tela1() {
  return (
    <div className="tela1">
        <div className="info-tela1">
            <h1>Faça fisioterapia para seu bem estar</h1>
            <p>Bem-vindo(a) à nossa clínica de fisioterapia de última geração, onde oferecemos atendimento personalizado e tratamentos eficazes para ajudá-lo(a) a alcançar seus objetivos de saúde e bem-estar.</p>

            <div className="buttontela1">
              <button className="btn-agendar">Agendar Consulta</button>
              <button className="btn-P">Nossos Serviços</button>
            </div>
        </div>
          <img src="/images/fisio.png" alt="Home Illustration" />
      </div>
  )
};    