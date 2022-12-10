import { Header } from "../components/Header"
import { Books, FilmSlate, MusicNotes, NumberOne, NumberTwo, NumberThree  } from 'phosphor-react'
import img from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
    return(
        <>
           <Header text="Sobre mim" image={img} />
           <main className={styles.sobreContainer}>
                <section className={styles.sobreContainerIntroducao}>
                    <h2 className={styles.sobreTitle}>Quem sou eu</h2>
                    <p className={styles.sobreText}>
                        Muito prazer, meu nome é Andresa Crisóstomo Avelar, natural de São José dos Campos, SP. <br />
                        <br />
                        Desde que eu era criança, a tecnologia me fascinava. Computadores, em especial, eram vistos por mim como artefatos mágicos que continham todos os segredos do universo. Contudo, apesar do meu encanto com o assunto, naquela época uma carreira na área não parecia possível para mim, e por vários anos eu segui minha vida sem nem pensar em aprofundar mais meus conhecimentos sobre o mundo da tecnologia. <br />
                        <br />
                        Mas então chegou um momento na minha vida em que tive que fazer uma mudança radical, e eu pensei: por que não seguir a carreira em desenvolvimento? Era um assunto que sempre me interessou, e quanto mais eu pesquisava sobre, mais tinham certeza, como nunca tive antes na minha vida, de que sim, aquilo era para mim. Trabalhar desenvolvendo códigos e criando aplicações não era só algo que eu faria essencialmente para me sustentar, mas algo que me traria gratificação e um senso de realização. <br />
                        <br />
                        Este é apenas o começo da minha jornada. Aprendi muito coisa até agora, e sei que ainda tenho que aprender muito mais, e que essa jornada de aprendizado nunca vai acabar, porque sempre surgem coisas novas na área de desenvolvimento. Mas eu estou não só disposta, mas ansiosa para iniciar esse caminho.
                    </p>
                </section>

                <section className={styles.sobreContainerTrivia}>
                    <div className={styles.sobreSubontainerFavoritos}>
                    <h2 className={styles.sobreTitle}>Favoritos</h2>
                        <span>
                            <FilmSlate size={45} className={styles.sobreIcons}/>
                            <p>Filme: <i>Parasita</i></p>
                        </span>
                        <span>
                            <Books size={45} className={styles.sobreIcons}/>
                            <p>Livro: <i>As quinze primeiras vidas de Harry August</i></p>
                        </span>
                        <span>
                            <MusicNotes size={45} className={styles.sobreIcons}/>
                            <p>Música: <i>Waving Through A Window</i></p>
                        </span>
                    </div>
                    
                    <div className={styles.sobreSubontainerObjetivos}>
                    <h2 className={styles.sobreTitle}>Meus objetivos de vida</h2>
                        <ul>
                            <span>
                                <NumberOne size={45} className={styles.sobreIcons}/>
                                <li>Aprender pelo menos outras duas linguas</li>
                            </span>
                            <span>
                                <NumberTwo size={45} className={styles.sobreIcons}/>
                                <li>Viajar para pelo menos tres paises</li>
                            </span>
                            <span>
                                <NumberThree size={45} className={styles.sobreIcons}/>
                                <li>Escrever um livro</li>
                            </span>
                        </ul>
                    </div>
                </section>  
           </main>
        </>
    )
}