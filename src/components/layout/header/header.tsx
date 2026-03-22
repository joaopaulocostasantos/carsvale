import { Container } from '@/components/ui/container/container';
import styles from './header.module.scss';

// Next
import Link from 'next/link';

export function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>

                    <div className={styles.nav__links}>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">Sobre</Link>
                            </li>
                            <li>
                                <Link href="/sell">Vender</Link>
                            </li>
                            <li>
                                <Link href="/buy">Comprar</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.nav__actions}>
                        <Link href="/login">Entrar</Link>
                        <Link href="/register">Cadastrar-se</Link>
                    </div>

                </nav>
            </Container>
        </header>
    );
}