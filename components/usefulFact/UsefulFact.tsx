import styles from "./styles.module.css";

const usefulData = [
  {
    headline: "Impuissance sexuelle",
    content:
      "Il est bien connu que dans la plupart des cas ce sont les personnes âgées qui souffrent de dysfonctionnement  érectile. La majorité des gens pensent que c’est le vieillissement qui provoque ce désordre.",
  },
  {
    headline: "Les infections urinaires",
    content:
      "Une infection urinaire est une infection qui peut toucher une ou plusieurs parties du système urinaire : les reins, les uretères, la vessie et l’urètre. Elle se manifeste le plus souvent par des douleurs.",
  },
  {
    headline: "Maladies des organes internes",
    content:
      "Touchant 60 % de la population mondiale, la colopathie fonctionnelle est la résultante d’une malformation congénitale du colon (du gros intestin). Diagnostiquée en retard ou mal traitée, la pathologie fait des ravages en laissant des séquelles invalidantes ou occasionnant la mort.",
  },
  {
    headline: "Infections sexuellement transmissibles",
    content:
      "Les infections sexuellement transmissibles sont donc la source principale d'infection du système urinaire chez l'homme (alors que ce mode est marginal chez la femme). Les bactéries les plus fréquemment impliquées dans les infections urinaires masculines sont les gonocoques et les chlamydias.",
  },
];

export const UsefulFact = () => {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h5>Informations utiles</h5>
        <p>
          Une meilleure connaissance des maladies peut être très utiles pour la
          prévention et le traitement. Quelques explications du Pr Mouleikafou!
        </p>
      </div>

      <div className={styles.infosWrapper}>
        {usefulData.map((info, index) => (
          <div key={index}>
            <h6>
              {info.headline}
              <span>.</span>
            </h6>
            <p>{info.content}</p>
            <button>en savoir plus</button>
          </div>
        ))}
      </div>
    </section>
  );
};
