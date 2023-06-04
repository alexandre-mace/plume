import ComputingDetails from "./ComputingDetails";
import Why from "./Why";
import ComplementaryInformation from "./ComplementaryInformation";

const Header = () => (
  <header className="flex flex-wrap justify-between">
    <div className={"flex flex-wrap gap-2 p-2"}>
      <Why />
      <ComputingDetails />
      <ComplementaryInformation />
    </div>
    <div className="md:text-md flex items-center p-2 text-sm">
      <div className={"mr-3"}>un outil du</div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-xl bg-slate-100 px-4 py-2 transition-all md:hover:bg-slate-200"
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
