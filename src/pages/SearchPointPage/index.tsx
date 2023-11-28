import { Header } from '../../components/Header'
import styles from './style/searchPoint.module.css'

export const SearchPointPage = () => {
    return (
        <>
            <Header />
            <div className={styles["search-box-container"]}>
                <div className={styles["search-box-input-area"]}>
                    <div className={styles["search-box-input"]}>

                        <input type="text" placeholder="Pesquisar um ponto de coleta por tipo de resído" />
                    </div>
                    <div className={styles["toggle-filters"]}>

                    </div>
                </div>
            </div>
            <div className={styles["container"]}>

                <div id="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14624.293433877621!2d-46.931960350000004!3d-23.6017019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1685535409885!5m2!1spt-BR!2sbr"
                        loading="lazy"></iframe>
                </div>
            </div>

        </ >


    )
}


