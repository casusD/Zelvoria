import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./OurPartners.module.scss";

const partnersLogo = [
  <img src="src/images/ourPartner/oracle.png" alt="#" />,
  <img src="src/images/ourPartner/huawei.png" alt="#" />,
  <img src="src/images/ourPartner/asiaPetro.png" alt="#" />,
  <img src="src/images/ourPartner/bars.png" alt="#" />,
  <img src="src/images/ourPartner/bouygues.png" alt="#" />,
  <img src="src/images/ourPartner/bpcGroup.png" alt="#" />,
  <img src="src/images/ourPartner/checkPoint.png" alt="" />,
  <img src="src/images/ourPartner/cisco.png" alt="#" />,
  <img src="src/images/ourPartner/cnpc.png" alt="#" />,
  <img src="src/images/ourPartner/colvir.png" alt="#" />,
  <img src="src/images/ourPartner/digitus.png" alt="#" />,
  <img src="src/images/ourPartner/ekassir.png" alt="#" />,
  <img src="src/images/ourPartner/elcore.png" alt="#" />,
  <img src="src/images/ourPartner/erc.png" alt="#" />,
  <img src="src/images/ourPartner/h3c.png" alt="#" />,
  <img src="src/images/ourPartner/henkel.png" alt="#" />,
  <img src="src/images/ourPartner/hewlett.png" alt="#" />,
  <img src="src/images/ourPartner/hytera.png" alt="#" />,
  <img src="src/images/ourPartner/idemia.png" alt="#" />,
  <img src="src/images/ourPartner/lanter.png" alt="#" />,
  <img src="src/images/ourPartner/lmf.png" alt="#" />,
  <img src="src/images/ourPartner/netapp.png" alt="#" />,
  <img src="src/images/ourPartner/papersystems.png" alt="#" />,
  <img src="src/images/ourPartner/premix.png" alt="#" />,
  <img src="src/images/ourPartner/schneider.png" alt="#" />,
  <img src="src/images/ourPartner/sinopec.png" alt="#" />,
  <img src="src/images/ourPartner/tactilion.png" alt="#" />,
  <img src="src/images/ourPartner/waviot.png" alt="#" />,
];

const responsive = {
  0: { items: 1 }, // 1 картинка на маленьких экранах
  600: { items: 2 }, // 2 картинки при ширине > 600px
  1024: { items: 6 }, // 3 картинки при ширине > 1024px
};

const OurPartners = () => {
  return (
    <section style={{ backgroundColor: "white", padding: "5% 0" }}>
      <div className={styles.partners}>
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval={800}
          responsive={responsive}
          items={partnersLogo}
          disableDotsControls
          disableButtonsControls
        />
      </div>
    </section>
  );
};

export default OurPartners;
