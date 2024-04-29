function SectionHeader({ title, subTitle }) {
  return (
    <header className="mb-20 flex flex-col items-center gap-2">
      <span className="text-sm font-bold tracking-widest text-primary">
        {subTitle}
      </span>
      <h2 className="section-header pb-5 text-center text-3xl font-extrabold tracking-wider sm:text-start sm:text-[45px]">
        {title}
      </h2>
    </header>
  );
}

export default SectionHeader;
