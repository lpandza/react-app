type CharacterAttributeProps = {
  label: string;
  value: string | string[];
};

export function CharacterAttribute({ label, value }: CharacterAttributeProps) {
  const displayValue = Array.isArray(value) ? value.join(', ') : value;

  return (
    <>
      <p>
        <strong>{label}:</strong>
      </p>
      <p>{displayValue || 'Unknown'}</p>
    </>
  );
}
