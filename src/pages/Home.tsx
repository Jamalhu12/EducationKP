function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            EducationKP
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Welcome to your education platform
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Getting Started
            </h2>
            <p className="text-slate-600">
              Your project is now set up and ready for development. Start building your education platform!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
