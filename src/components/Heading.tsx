const Heading = () => (
  <section className="relative mx-auto mt-5 max-w-5xl px-4 md:mt-0">
    <div className={"flex items-center justify-center gap-2"}>
      <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900">
        Reduce
      </h1>{" "}
      <div>
        <img
          src="https://em-content.zobj.net/thumbs/240/apple/354/feather_1fab6.png"
          height={20}
          width={30}
          className={"inline-block"}
          alt="logo plume"
        />
      </div>
    </div>
    <p className="text-md mx-auto mt-2 max-w-3xl text-center text-slate-600">
      Comprenez quels indicateurs ont le plus d&apos;impact sur votre empreinte
    </p>
  </section>
);

export default Heading;
