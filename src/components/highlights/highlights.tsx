import styles from "./highlights.module.scss";

// components
import { Container } from "../ui/container/container";
import { HighlightCard } from "./highlight-card/highlight-card";

export function Highlights() {
    return (
        <section className={styles.highlights}>
            <Container>
                <div className={styles.highlightsCards}>
                    <HighlightCard title="Veículos Novos"description="Ofertas de carros 0 km para quem busca mais conforto e praticidade no dia a dia."/>
                    <HighlightCard title="Veículos Usados"description="Ofertas em carros usados com qualidade e preços que cabem no seu bolso."/>
                    <HighlightCard title="Compre ou venda"description="Compre carros novos ou usados ou venda o seu com facilidade."/>
                </div>
            </Container>
        </section>
    )
}