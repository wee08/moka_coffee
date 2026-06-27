const Title = ({ label, paragraph }) => {
  return (
    <div className="p-10.5">
      <h1 className="mb-9.5 text-4xl font-young-serif font-bold">{label}</h1>
      <p className="text-2xl/15 font-cactus-serif text-justify tracking-wide opacity-80">
        {paragraph}
      </p>
    </div>
  );
};

export default Title;
