import './css/Tela3.css';

export default function Tela3() {
    return (
        <div className="tela3">
            <div className="info-tela3">
                <h1>Nossos Serviços</h1>
                <p>Oferecemos uma ampla gama de serviços de fisioterapia, incluindo reabilitação de lesões esportivas, recuperação pós-operatória, tratamento da dor crônica e muito mais.</p>
            </div>

            <div className="img-tela3">
                <div className="img1" id='img'>
                    <span>
                        <div className="info-span">
                            <h1>Fisioterapia Ortopédica</h1>
                            <p>Tratamento especializado para dores musculares, lesões, pós-operatório e problemas na coluna, com foco na recuperação rápida e segura dos movimentos.</p>
                        </div>
                    </span>
                </div>

                <div className="img2" id='img'>
                    <span>
                        <div className="info-span">
                            <h1>Fisioterapia Neurológica</h1>
                            <p>Reabilitação personalizada para pacientes com AVC, Parkinson, lesões neurológicas e outras condições que afetam os movimentos e a coordenação.</p>
                        </div>
                    </span>
                </div>

            </div>
        </div>
    )
}