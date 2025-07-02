function Error({ statusCode }) {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </h1>
      <p>
        {statusCode === 404 
          ? 'This page could not be found.'
          : 'Something went wrong.'}
      </p>
      <a href="/" style={{ 
        color: '#0070f3', 
        textDecoration: 'none',
        border: '1px solid #0070f3',
        padding: '10px 20px',
        borderRadius: '5px',
        marginTop: '20px',
        display: 'inline-block'
      }}>
        Go back home
      </a>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error 