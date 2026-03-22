import styles from './footer.module.scss';

// components
import { Container } from '@/components/ui/container/container';

// Icons
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__icons}>
                    <a href="#"><Instagram /></a>
                    <a href="#"><Linkedin /></a>
                    <a href="#"><Facebook /></a>
                </div>
                <div className={styles.footer__content}>
                    <span>© 2026 - Todos os direitos reservados. Termo de uso. <a href="#">Política de privacidade</a></span>
                    <p>Desenvolvido por <a href="https://github.com/joaopaulocostasantos" target="_blank" rel="noopener noreferrer">João Paulo Santos</a></p>
                </div>
            </Container>
        </footer>
    );
}