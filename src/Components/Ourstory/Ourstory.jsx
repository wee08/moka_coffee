import Navbar_Title from "../Navbar_Title";

const Ourstory = () => {
  const experiences = [
    { amount: "5+", label: "years experiences" },
    { amount: "5", label: "types of cofee" },
    { amount: "100K+", label: "customors" },
  ];
  return (
    <>
      <div>
        <Navbar_Title label={"Our Story"} />
        <p className="text-2xl/15 font-cactus-serif text-justify tracking-wide">
          The rain had been falling since morning, and Maya had claimed the
          corner table before anyone else could. She wrapped both hands around
          her mug, watching steam curl toward the wooden ceiling. Around her,
          the café hummed quietly the grinder's roar, spoons tapping ceramic,
          someone turning a paperback page. The barista called out names she
          didn't recognize. She had come here to write. Instead, she just
          watched. An old man sat across the room, reading the same newspaper
          he'd held for an hour. He caught her staring and smiled, unbothered.
          Maya smiled back, opened her notebook, and finally wrote the first
          sentence she'd been avoiding for weeks. Some stories begin in the
          rain.
        </p>
        <div className="flex justify-between">
          {experiences.map((item, idx) => (
            <div key={idx} className="items-center flex gap-2 text-center">
              <h1 className="text-[64px] font-young-serif font-bold">
                {item.amount}
              </h1>
              <p className="text-[20px]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {}
    </>
  );
};

export default Ourstory;
