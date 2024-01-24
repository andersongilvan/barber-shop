import './style.css'
import { useState } from 'react';


export default function LandingPage() {


    const modoClaro = 'modo-claro';
    const modoEscuro = 'modo-escuro';

    const [ estiloAtualizado, setEstiloAtualizado ] = useState(true)

    const alterarCor = () => {
        setEstiloAtualizado(!estiloAtualizado);
    }


    return(
        
       <main className={ estiloAtualizado ? modoClaro : modoEscuro }>

            <section className="secao-topo">
                <header>
                   <div className="limitar-secao">
                    <img src="assets/barbearia-logo.png"></img>
                    <button onClick={ alterarCor }>
                    
                    </button>
                   </div>
                </header>
            </section>

            <section className="secao-baner">
                <div className="container-baner">

                </div>
            </section>

            <section className="secao-conteudo">
                <div className='container-conteudo'>
                    <h2>
                        Bem-vindo a Barber Shop
                    </h2>
                    <span>
                        Nossa barbearia sempre oferece proficionais de qualidade e estamos prontos para lidar com suas maiores espectativas.
                    </span>
                    <p>
                        Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                    </p>
                    <p className='paragrafo-estilizado'>
                        S. Kelly
                    </p>
                </div>
            </section>

       </main>
       
    )
}