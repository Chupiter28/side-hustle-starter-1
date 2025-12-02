export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Welcome to My Side Hustle</h1>
      <p>This is my awesome side hustle application!</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Features:</h2>
        <ul>
          <li>Fast and modern</li>
          <li>Built with Next.js</li>
          <li>Deployed on Vercel</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Get Started:</h2>
        <p>Edit <code>app/page.jsx</code> to customize this page.</p>
      </div>

      <button 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Click Me!
      </button>
    </div>
  )
}
