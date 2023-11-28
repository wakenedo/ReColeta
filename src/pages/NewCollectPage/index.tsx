import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import styles from './style/newCollect.module.css'
import { NewCollectActions } from "./data"


export const NewCollectPage = () => {
    return (
        <>
            <Header />
            <main className={styles["content"]}>
                <span className={styles["content-title"]}>Cadastro de resíduos</span>
                <section className={styles["content-area"]}>
                    {NewCollectActions.map((item) => {
                        return (
                            <Link key={item.id} to={item.path}>
                                <div className={styles[item["color-className"]]}>
                                    <div className={styles["content-choice-container"]}>
                                        <div className={styles["content-choice-container-border"]}>
                                            <img className={styles["content-icon"]} src={item.image} alt="icon-busca" />
                                            <p className={styles["content-text"]}>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </section>
            </main>

        </>

    )
}

