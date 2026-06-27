import Title from "./Title";

const Ourstory = () => {
  const p = (
    <p>
      The rain had been falling since morning, and Maya had claimed the corner
      table before anyone else could. She wrapped both hands around her mug,
      watching steam curl toward the wooden ceiling. Around her, the café hummed
      quietly the grinder's roar, spoons tapping ceramic, someone turning a
      paperback page. The barista called out names she didn't recognize. She had
      come here to write. Instead, she just watched. An old man sat across the
      room, reading the same newspaper he'd held for an hour. He caught her
      staring and smiled, unbothered. Maya smiled back, opened her notebook, and
      finally wrote the first sentence she'd been avoiding for weeks. Some
      stories begin in the rain.
    </p>
  );
  return (
    <>
      <Title label={"Our Story"} paragraph={p} />
    </>
  );
};

export default Ourstory;
