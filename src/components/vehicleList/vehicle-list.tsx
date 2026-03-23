import styles from "./vehicle-list.module.scss";

// components
import { Container } from "../ui/container/container";
import { VehicleCard } from "./vehicleCard/vehicle-card";

// Icons
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function VehicleList() {
    return (
        <section className={styles.vehicleList}>
            <Container>
                <div className={styles.header}>
                    <h2 className={styles.title}>Encontre as melhores ofertas</h2>

                    <div className={styles.arrows}>
                        <button className={styles.arrow}>
                            <ArrowLeft />
                        </button>
                        <button className={styles.arrow}>
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className={styles.cards}>
                    <VehicleCard />
                    <VehicleCard />
                    <VehicleCard />
                </div>

                {/* Cta */}
                <button className={styles.button}>
                    <Link href="/veiculos">
                        Veja todas as ofertas
                        <ArrowRight />
                    </Link>
                </button>
            </Container>
        </section>
    )
}