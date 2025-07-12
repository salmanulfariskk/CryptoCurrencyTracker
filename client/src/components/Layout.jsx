const Layout = ({ children }) => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <main className="max-w-6xl mx-auto px-4 py-6">
          {children}
        </main>
      </div>
    )
  }
  
  export default Layout
  