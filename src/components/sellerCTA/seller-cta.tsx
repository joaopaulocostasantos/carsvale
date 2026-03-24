import styles from "./seller-cta.module.scss";

// next
import Image from "next/image";
import Link from "next/link";

// components
import { Container } from "../ui/container/container";

// images
import sellerCtaImg from "@/assets/sellerCta_image.png";
import { ArrowRight } from "lucide-react";


export function SellerCTA() {
    return (
        <section className={styles.sellerCTA}>
            <Container>
                <div className={styles.sellerCTA__container}>
                    <div className={styles.sellerCTA__image}>
                        <Image src={sellerCtaImg} alt="" />
                    </div>

                    <div className={styles.sellerCTA__content}>
                        <h2 className={styles.sellerCTA__title}>Torne-se um revendedor de veículos e ganhe comissões por cada venda</h2>
                        <p className={styles.sellerCTA__description}>Indique veículos para compradores interessados, acompanhe as negociações e receba comissões sempre que um negócio for fechado.</p>
                        <button>
                            <Link href="/register">Cadastrar como revendedor</Link>
                            <div className={styles.hero__cta__icon}>
                                <ArrowRight className={styles.hero__cta__icon__arrow} />
                            </div>
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    )
}