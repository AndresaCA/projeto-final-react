import { Star, Code, AddressBook  } from 'phosphor-react'
import { Header } from "../components/Header"
import styles from '../styles/pages/inicio.module.css'
import img from '../assets/home.svg'

export function Inicio() {
    return(
        <>
            <Header text="Meu site pessoal" image={img} />
            <div className={styles.homeContainer}>
                <div className={styles.cardContainer}>
                    <Star size={150} weight="thin" className={styles.cardIcon}/>
                    <h2 className={styles.cardTitle}>Vida</h2>
                    <p className={styles.cardText}>Conheça um pouquinho de mim.</p>
                </div>

                <div className={styles.cardContainer}>
                    <Code size={150} weight="thin" className={styles.cardIcon}/>
                    <h2 className={styles.cardTitle}>Habilidades</h2>
                    <p className={styles.cardText}>Meus conhecimentos relacionados a tecnologia.</p>
                </div>

                <div className={styles.cardContainer}>
                    <AddressBook size={150} weight="thin" className={styles.cardIcon} />
                    <h2 className={styles.cardTitle}>Contato</h2>
                    <p className={styles.cardText}>Onde posso ser encontrada para batermos um papo legal :).</p>
                </div>
            </div>
        </>
    )
}