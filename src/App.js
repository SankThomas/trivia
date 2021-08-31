import "./App.css"
import SetupForm from "./components/SetupForm"

export default function App() {
  return (
    <div className="App">
      <h1 className="font-bold uppercase tracking-wide text-4xl lg:text-8xl mt-5">
        Trivia App
      </h1>
      <SetupForm />
    </div>
  )
}
