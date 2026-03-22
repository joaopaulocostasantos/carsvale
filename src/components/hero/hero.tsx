import styles from "./hero.module.scss";

// next
import Image from "next/image";
import Link from "next/link";

// components
import { Container } from "../ui/container/container";

// images
import customers from "@/assets/customers.png";

// icons
import { ArrowRight } from "lucide-react";


export function Hero() {
    return (
        <section className={styles.hero}>
           <Container>
                <div className={styles.hero__bagde}>
                    <div className={styles.hero__bagde__customers}>
                        <Image 
                            src={customers}
                            alt="Clientes satisfeitos"
                            quality={100}
                        />
                    </div>
                    <p className={styles.hero__bagde__text}><span>+3500</span> clientes satisfeitos</p>
                </div>
                <div className={styles.hero__content}>
                    <h1 className={styles.hero__title}>Encontre as melhores ofertas para comprar ou vender veículos</h1>
                    <p className={styles.hero__description}>Encontre veículos com ótimos preços, compare opções e escolha o modelo perfeito para você, ou anuncie seu carro de forma simples e rápida.</p>
                </div>

                <div className={styles.hero__cta}>
                    <button>
                        <Link href="/veiculos">Ver ofertas agora</Link>
                        <div className={styles.hero__cta__icon}>
                            <ArrowRight className={styles.hero__cta__icon__arrow} />
                        </div>
                    </button>
                </div>
           </Container>
        </section>
    );
}