import Generator from "./Generator"

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-blue-300 via-green-200 to-green-300">
      <h1 className="flex justify-center text-4xl font-bold py-10 text-purple-500 text-wrap">
        Password Generator
      </h1>
      <Generator />
    </div>
  );
}

export default App;