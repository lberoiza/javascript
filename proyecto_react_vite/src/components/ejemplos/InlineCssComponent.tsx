const styles ={

  divContainer: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.7rem',
    backgroundColor: '#1d78e7',
    margin: '1rem',
    padding: '1rem 2rem',
  },
  span: {
    backgroundColor: '#0b51a8',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
  }
}



export default function InlineCssComponent() {
  return (
    <div style={styles.divContainer}>
      <span style={styles.span}>Span con clase css inline</span>
    </div>
  );
}