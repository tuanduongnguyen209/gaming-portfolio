interface SectionProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

function Section(props: SectionProps) {
  const { backgroundImage, children } = props;
  return (
    <div
      className="slide"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
}

export default Section;
