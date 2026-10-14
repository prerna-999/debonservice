type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="web-app-development-section-heading">
    <p className="web-app-development-section-heading-eyebrow">{eyebrow}</p>
    <h2 className="web-app-development-section-heading-title">{title}</h2>
    {description && (
      <p className="web-app-development-section-heading-description">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
