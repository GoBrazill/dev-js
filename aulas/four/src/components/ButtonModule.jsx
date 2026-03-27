import styles from './ButtonModule.module.css'

export default function ButtonModule({ text, highlight}) {
    return (
        <button className={`
        ${styles.btn}
        ${highlight ? styles.highlight : ""}`}>
            {text}
        </button>
    )
}

let onlines = true

onlines ? 'true' : 'false'