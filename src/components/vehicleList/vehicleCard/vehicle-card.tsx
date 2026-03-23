import styles from "./vehicle-card.module.scss";

// next
import Image from "next/image";

// icons
import { Calendar } from "lucide-react";
import { BsFillGeoAltFill } from "react-icons/bs";

// images
import vehicleCard from "@/assets/img-car-card.png";
import mileageIcon from "@/assets/mileage_icon.svg";


export function VehicleCard() {
    return (
        <div className={styles.vehicleCard}>
            <div className={styles.image}>
                <Image src={vehicleCard} quality={100} alt="" />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>VOLKSWAGEN T-CROSS</h3>
                    <p className={styles.subtitle}>1.4 250 TSI TOTAL FLEX HIGHLINE AUTOMÁTICO</p>
                    <div className={styles.info}>
                        <div className={styles.info_date_kms}>
                            <div className={styles.date__container}>
                                <Calendar size={14} />
                                <span className={styles.date}>2023/2024</span>
                            </div>
                            <div className={styles.kms__container}>
                                <Image src={mileageIcon} alt="" />
                                <span className={styles.kms}>10.000 km</span>
                            </div>
                        </div>
                        <div className={styles.address__container}>
                            <BsFillGeoAltFill size={14} />
                            <span className={styles.address}>São Paulo - SP</span>
                        </div>
                    </div>
                    <span className={styles.price}>
                        R$68.600,22
                    </span>
                    <button className={styles.button}>
                        Ver oferta
                    </button>
                </div>
            </div>
        </div>
    )
}