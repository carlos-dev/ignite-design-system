import '../styles/tokens-grid.css'

interface TokenGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue }: TokenGridProps) {
  return (
    <table className='tokens-grid'>
      <thead>
        <tr>
          <th>name</th>
          <th>value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && (
               <td>{Number(value.replace('rem', '')) * 16}px</td>
            )}
          </tr>  
        ))}
      </tbody>
    </table>
  );
}
