export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          🚀 Welcome to My Side Hustle
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          This is my awesome side hustle application!
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features:</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Fast and modern
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Built with Next.js
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Deployed on Vercel
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Styled with Tailwind CSS
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get Started:</h2>
          <p className="text-gray-600">
            Edit <code className="bg-gray-100 px-2 py-1 rounded">app/page.jsx</code> to customize this page.
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl">
          Click Me!
        </button>
      </div>
    </div>
  )
}
