import styles from "./highlight-card.module.scss";

interface HighlightCardProps {
    title: string;
    description: string;
}

export function HighlightCard({ title, description }: HighlightCardProps) {
    return (
        <article className={styles.highlightCard}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </article>
    )
}
    