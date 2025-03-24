import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./OurPartners.module.scss";

import oracle from "../../../../images/ourPartner/oracle.png";
import huawei from "../../../../images/ourPartner/huawei.png";
import asiaPetro from "../../../../images/ourPartner/asiaPetro.png";
import bars from "../../../../images/ourPartner/bars.png";
import bouygues from "../../../../images/ourPartner/bouygues.png";
import bpcGroup from "../../../../images/ourPartner/bpcGroup.png";
import checkPoint from "../../../../images/ourPartner/checkPoint.png";
import cisco from "../../../../images/ourPartner/cisco.png";
import cnpc from "../../../../images/ourPartner/cnpc.png";
import colvir from "../../../../images/ourPartner/colvir.png";
import digitus from "../../../../images/ourPartner/digitus.png";
import ekassir from "../../../../images/ourPartner/ekassir.png";
import elcore from "../../../../images/ourPartner/elcore.png";
import erc from "../../../../images/ourPartner/erc.png";
import h3c from "../../../../images/ourPartner/h3c.png";
import henkel from "../../../../images/ourPartner/henkel.png";
import hewlett from "../../../../images/ourPartner/hewlett.png";
import hytera from "../../../../images/ourPartner/hytera.png";
import idemia from "../../../../images/ourPartner/idemia.png";
import lanter from "../../../../images/ourPartner/lanter.png";
import lmf from "../../../../images/ourPartner/lmf.png";
import netapp from "../../../../images/ourPartner/netapp.png";
import papersystems from "../../../../images/ourPartner/papersystems.png";
import premix from "../../../../images/ourPartner/premix.png";
import schneider from "../../../../images/ourPartner/schneider.png";
import sinopec from "../../../../images/ourPartner/sinopec.png";
import tactilion from "../../../../images/ourPartner/tactilion.png";
import waviot from "../../../../images/ourPartner/waviot.png";

const partnersLogo = [
  <img src={oracle} alt="#" />,
  <img src={huawei} alt="#" />,
  <img src={asiaPetro} alt="#" />,
  <img src={bars} alt="#" />,
  <img src={bouygues} alt="#" />,
  <img src={bpcGroup} alt="#" />,
  <img src={checkPoint} alt="" />,
  <img src={cisco} alt="#" />,
  <img src={cnpc} alt="#" />,
  <img src={colvir} alt="#" />,
  <img src={digitus} alt="#" />,
  <img src={ekassir} alt="#" />,
  <img src={elcore} alt="#" />,
  <img src={erc} alt="#" />,
  <img src={h3c} alt="#" />,
  <img src={henkel} alt="#" />,
  <img src={hewlett} alt="#" />,
  <img src={hytera} alt="#" />,
  <img src={idemia} alt="#" />,
  <img src={lanter} alt="#" />,
  <img src={lmf} alt="#" />,
  <img src={netapp} alt="#" />,
  <img src={papersystems} alt="#" />,
  <img src={premix} alt="#" />,
  <img src={schneider} alt="#" />,
  <img src={sinopec} alt="#" />,
  <img src={tactilion} alt="#" />,
  <img src={waviot} alt="#" />,
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
