import { useState, useEffect } from "react"
import ShowQuestions from "./ShowQuestions"

export default function SetupForm() {
  const [amount, setAmount] = useState(10)
  const [category, setCategory] = useState(9)
  const [difficulty, setDifficulty] = useState("easy")
  const [type, setType] = useState("multiple")
  const [showQuestions, setShowQuestions] = useState(false)
  const [questions, setQuestions] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    setShowQuestions(true)
  }

  const fetchQuestions = async () => {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    const res = await fetch(url)
    const data = await res.json()
    setQuestions(data.results)
  }

  useEffect(() => {
    fetchQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!showQuestions && (
        <section>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center m-10 p-5 rounded shadow text-left md:w-1/2 md:mx-auto md:mt-32"
          >
            <label
              htmlFor="number__of__questions"
              className="mb-2 font-bold tracking-wide mt-5"
            >
              How many questions do you want?
            </label>
            <input
              type="number"
              name="number__of__questions"
              id="number__of__questions"
              placeholder="Choose the number of questions"
              min="5"
              max="30"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 bg-gray-50 shadow rounded"
            />

            <label
              htmlFor="category"
              className="mb-2 font-bold tracking-wide mt-5"
            >
              Select a category
            </label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 bg-gray-50 shadow rounded"
            >
              <option value="9">Entertainment: Books</option>
              <option value="10">Entertainment: Film</option>
              <option value="11">Entertainment: Music</option>
            </select>

            <label
              htmlFor="difficulty"
              className="mb-2 font-bold tracking-wide mt-5"
            >
              Select difficulty
            </label>
            <select
              name="difficulty"
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="p-2 bg-gray-50 shadow rounded"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <label htmlFor="type" className="mb-2 font-bold tracking-wide mt-5">
              Select your type of questions
            </label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="p-2 bg-gray-50 shadow rounded"
            >
              <option value="multiple">Multiple</option>
              <option value="choices">Choices</option>
            </select>

            {/* onClick, fetch questions according to the inputs */}
            <button
              type="submit"
              className="bg-blue-400 py-3 px-6 rounded text-white mt-5 border border-blue-400 hover:bg-transparent hover:text-blue-400 transition-all duration-300"
              onClick={fetchQuestions}
            >
              Begin
            </button>
          </form>
        </section>
      )}

      {showQuestions && (
        <ShowQuestions
          amount={amount}
          category={category}
          difficulty={difficulty}
          type={type}
          questions={questions}
        />
      )}
    </>
  )
}
