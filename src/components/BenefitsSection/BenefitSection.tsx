import { benefit_icons_array } from "utils";
import { BenefitIcon } from "../BenefitsSection/BenefitIcon/BenefitIcon";
import styles from "./BenefitSection.module.scss";
import Image from "next/image";

export const BenefitSection = () => {
    return (
        <section className={`${styles["main-page-row"]}`}>
            <div className={`${styles["column-container"]} `}>
                <h1>{"Benefits of using Deriv API"}</h1>
                <div className={`${styles.container} ${styles["benefits-icons"]}`}>
                    {benefit_icons_array.map((el, index) => {
                        return <BenefitIcon title={el.title} imgPath={el.imgPath} key={index} />;
                    })}
                </div>
                <div className={`${styles.benefits}`}>
                    <div className={`${styles.personalisation}`}>
                        <h3>Personalisation</h3>
                        <p>
                            Personalise your trading applications to match your needs. Create charts and views just the
                            way you like them. Develop your trading applications using any common programming language
                            and extend your trading opportunity.
                        </p>
                    </div>
                    <div className={`${styles["personalisation-image"]}`}>
                        <Image alt="personalisation icon" src="/personalisation.png" width="486" height="260" />
                    </div>
                    <div className={`${styles["earn-more-image"]}`}>
                        <Image alt="build business icon" src="/build-business.png" width="486" height="260" />
                    </div>
                    <div className={`${styles["earn-more"]}`}>
                        <h3>Build a business and earn more</h3>
                        <p>
                            Create your own trading apps by taking advantage of the power of Deriv&apos;s trading
                            services. Share your apps with fellow traders or customers, and have a chance to earn more
                            or build your own business.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
