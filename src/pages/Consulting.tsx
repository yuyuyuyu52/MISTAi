import { Globe, MagnifyingGlass, Stack, Cpu, ArrowsClockwise } from "@phosphor-icons/react";
import { useI18n } from "../i18n";
import ServiceDetail from "./ServiceDetail";

export default function Consulting() {
  const { t } = useI18n();
  return (
    <ServiceDetail
      badge={t("consulting.badge")}
      heading1={t("consulting.heading1")}
      heading2={t("consulting.heading2")}
      desc={t("consulting.desc")}
      badgeIcon={<Globe className="w-3 h-3 text-mist-accent" />}
      exploreLabel={t("services.explore")}
      orbColor1="#7928ca"
      orbColor2="#0070f3"
      cards={[
        { title: t("consulting.card1.title"), desc: t("consulting.card1.desc"), icon: <MagnifyingGlass className="w-7 h-7" /> },
        { title: t("consulting.card2.title"), desc: t("consulting.card2.desc"), icon: <Stack className="w-7 h-7" /> },
        { title: t("consulting.card3.title"), desc: t("consulting.card3.desc"), icon: <Cpu className="w-7 h-7" /> },
        { title: t("consulting.card4.title"), desc: t("consulting.card4.desc"), icon: <ArrowsClockwise className="w-7 h-7" /> },
      ]}
    />
  );
}
