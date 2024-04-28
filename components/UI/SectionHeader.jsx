function SectionHeader({ title, subTitle }) {
  return (
    <header className="flex flex-col items-center gap-2 mb-20">
      <span className="text-sm font-bold tracking-widest text-primary">
        {subTitle}
      </span>
      <h2 className="section-header text-[45px] font-extrabold tracking-wider">
        {title}
      </h2>
    </header>
  );
}

export default SectionHeader;
