import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

const ComputingDetails = () => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="inline-flex h-10 items-center justify-center rounded-md border border-input px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        Détail de calculs
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="ml-1 h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Détail de calculs</DialogTitle>
        <DialogDescription>
          Les calculs présentés sont des estimations illustrant les ordres de
          grandeur. Pour une estimation plus précise de votre empreinte, vous
          pouvez utiliser{" "}
          <a
            className={"underline"}
            href="nosgestesclimat.fr/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            ce simulateur
          </a>
          .
        </DialogDescription>
        <div className={"text-sm text-muted-foreground"}>
          <div className={"mb-2"}>
            Les valeurs initiales du graphiques proviennent du{" "}
            <a
              className={"underline"}
              href="https://www.carbone4.com/files/graphique_final.png"
              target={"_blank"}
              rel={"noreferrer"}
            >
              graphique de carbone4/MYCO2.
            </a>
          </div>
          <img
            src="https://www.carbone4.com/files/graphique_final.png"
            alt="l’empreinte carbone française en 2019"
          />
          <div className={"mt-2"}>
            La valeur moyenne de l&apos;avion n&apos;a pas été reprise à cause
            des biais de moyenne (
            <a
              className={"underline"}
              target={"_blank"}
              href="https://www.jean-jaures.org/publication/les-francais-les-voyages-et-lavion/"
              rel={"noreferrer"}
            >
              11% seulement des Français disent prendre régulièrement
              l&apos;avion
            </a>
            ).
          </div>
          <div className={"mt-2"}>
            Les valeurs prises pour l&apos;avion moyen courriers et long
            courriers proviennent des{" "}
            <a
              className={"underline"}
              href="https://data.ademe.fr/datasets"
              target={"_blank"}
              rel={"noreferrer"}
            >
              données ouverte de l&apos;Ademe
            </a>
            .
          </div>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default ComputingDetails;
