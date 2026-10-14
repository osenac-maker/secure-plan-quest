interface ProductExampleProps {
  children: string;
}

const ProductExample = ({ children }: ProductExampleProps) => (
  <aside className="mt-4 border border-copper/20 border-l-2 border-l-copper px-3 py-3" aria-label="Exemple pédagogique fictif">
    <h4 className="font-heading text-sm font-semibold text-copper mb-1">Exemple</h4>
    <p className="text-xs text-muted-foreground leading-relaxed">{children}</p>
    <p className="text-xs text-muted-foreground mt-2 italic">Situation fictive, à titre pédagogique.</p>
  </aside>
);

export default ProductExample;