interface SourceNoteProps {
  href: string;
  hypotheses: string;
}

const SourceNote = ({ href, hypotheses }: SourceNoteProps) => (
  <p className="text-xs text-muted-foreground leading-relaxed mt-4">
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-copper underline underline-offset-2">Source : [À COMPLÉTER]</a>
    {" — hypothèses : "}{hypotheses}
  </p>
);

export default SourceNote;