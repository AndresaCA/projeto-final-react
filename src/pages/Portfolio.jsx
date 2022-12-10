import { Header } from "../components/Header"
import { useState, useEffect } from "react"
import img from '../assets/portfolio.svg'
import styles from '../styles/pages/portfolio.module.css'

export function Portfolio() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/AndresaCA/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <>
           <Header text="Meu portfólio" image={img} />
           <div className={styles.portfolioContainer}>
                    <div className={styles.portfolioSubcontainer}>
                        <h2 className={styles.portfolioTitle}>Tecnologias</h2>
                        <ul className={styles.portfolioListTecnologias}>
                            <li className={styles.portfolioListItemTecnologias}>HTML/CSS/Bootstrap</li>
                            <li className={styles.star}>★</li>
                            <li className={styles.portfolioListItemTecnologias}>JavaScript/NodeJS/React</li>
                            <li className={styles.star}>★</li>
                            <li className={styles.portfolioListItemTecnologias}>Git/Github</li>
                        </ul>
                            
                    </div>
                    
                    <div className={styles.portfolioSubcontainer}>
                        <h2 className={styles.portfolioTitle}>Meus repositórios no Github</h2>
                        <ul className={styles.portfolioList}>
                            { repositories.map(repository => {
                                return(
                                    <li className={styles.portfolioListItemRepo}>
                                        <h3 className={styles.repositoryName}>{repository.name}</h3>
                                        <p className={styles.repositoryDesc}>{repository.description}</p>
                                        <a className={styles.repositoryLink} href={repository.html_url} target="_blank">Saiba mais</a>
                                    </li>
                                )
                            }) }
                        </ul>
                    </div>
           </div>
        </>
    )
}