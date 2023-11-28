import { Header } from "../../components/Header"
import styles from './style/wastePage.module.css'

export const WastePage = () => {
    return (
        <body>
            <Header />
            <div className={styles["container"]}>
                <div className={styles["container-content"]}>
                    <div className={styles["type-header"]}>
                        <p>Cadastro de resído - Buscar</p>
                    </div>
                    <div className={styles["section-title"]}>
                        <span>
                            Categoria
                        </span>
                    </div>
                    <div className={styles["type-section-border"]}>
                        <div className="category-information">

                        </div>
                    </div>
                    <div className={styles["section-title"]}>
                        <span>
                            Tipo
                        </span>
                    </div>
                    <div className={styles["type-section-border"]}>
                        <div className={styles["type-information"]}>
                            <label>Selecione uma opção:</label>
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



                    <div className={styles["container-gradient-background"]}>
                        <div className={styles["gradient-container"]}>
                            <div className={styles["my-address-white-background"]}>
                                <div className={styles["inner-section-title"]}>
                                    <span>
                                        Endereços
                                    </span>
                                </div>
                                <div className={styles["inner-div address"]}>
                                    Rua: xyz n° 1 Bairro: Teste <br />
                                    Cidade: Cotia CEP: 00000-000 BRASIL
                                </div>
                                <div className={styles["inner-div address"]}>
                                    Rua: 123 n° 15 Bairro: Teste <br />
                                    Cidade: Barueri CEP: 11111-000 BRASIL
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={styles["create-button"]}>
                    <a href="#">Criar</a>
                </div>
            </div>
        </body>
    )
}