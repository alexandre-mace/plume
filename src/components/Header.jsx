import ComputingDetails from "./ComputingDetails.tsx";
import Why from "./Why.tsx";

const Header = () => (
  <header className="flex justify-between">
    <div className={"flex p-2"}>
      <Why />
      <div className={"mx-1"} />
      <ComputingDetails />
    </div>
    <div className="flex items-center p-2">
      <div className={"mr-3"}>un outil du</div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-xl px-4 py-2 transition-all hover:bg-slate-200"
        href="https://climatelab.fr"
      >
        <img
          className="logo-img mr-1"
          src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png"
          alt="Alambic"
          width="27"
          height="27"
        />{" "}
        ClimateLab
      </a>
    </div>
  </header>
);

export default Header;
