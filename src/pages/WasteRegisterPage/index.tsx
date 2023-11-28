import { Header } from '../../components/Header'
import styles from './style/wasteRegister.module.css'

export const WasteRegisterPage = () => {
    return (
        <>
            <Header />
            <div className={styles["container"]}>
                <div className={styles["container-content"]}>
                    <div className={styles["type-header"]}>
                        <p>Cadastro de resído - Entregar</p>
                    </div>

                    <div className={styles["section-title"]}>
                        <span>
                            Categoria
                        </span>
                    </div>
                    <div className={styles["type-section-border"]}>
                        <div className={styles["category-information"]}>

                        </div>
                    </div>
                    <div className={styles["section-title"]}>
                        <span>
                            Tipo
                        </span>
                    </div>
                    <div className={styles["type-section-border"]}>
                        <div className={styles["type-information"]}>
                            <select id="opcoes" name="opcoes">
                                <option value="opcao1">Papel</option>
                                <option value="opcao2">Metal</option>
                                <option value="opcao3">Plastico</option>
                                <option value="opcao4">Oleo</option>
                                <option value="opcao5">Vidro</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles["section-title"]}>
                        <span>
                            Quantidade
                        </span>
                    </div>
                    <div className={styles["type-section-border"]}>
                        <div className={styles["quantity-information"]}>

                        </div>
                    </div>


                    <div className={styles["section-title"]}>
                        <span>
                            Buscar parceiros registrados em:
                        </span>
                    </div>
                    <div className={styles["type-section-border"]}>
                        <div className={styles["radius-information"]}>
                            <div className={styles["distance-selector"]}>
                                <div className={styles["line"]}></div>
                                <div className={styles["arrow"]}></div>
                                <span className={styles["start-label"]}>10KM</span>
                                <span className={styles["middle-label"]}>45KM</span>
                                <span className={styles["end-label"]}>100KM</span>
                            </div>
                        </div>

                    </div>
                    <div className={styles["search-button"]}>
                        <a href="#">Buscar</a>
                    </div>
                </div>
            </div>
        </>

    )
}



