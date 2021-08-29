import { useState, useEffect } from "react"

export default function FetchQuestions() {
  const [amount, setAmount] = useState(10)
  const [category, setCategory] = useState(10)
  const [difficulty, setDifficulty] = useState("easy")
  const [type, setType] = useState("multiple")

  const fetchQuestions = async () => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`
    )
    const data = await res.json()
    console.log(data.results)
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return <div></div>
}
