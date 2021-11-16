import { useState } from "react"

export default function ShowQuestions({ questions }) {
  const [alert, setAlert] = useState({
    msg: "",
    type: true,
  })

  const handleCorrect = () => {
    setAlert({ msg: "Correct Answer", type: true })
  }

  return (
    <>
      <section>
        <div className="text-left mx-10 sm:w-3/4 sm:mx-auto lg:w-1/2 mt-10 grid grid-cols-1 gap-10 pb-20">
          {questions.map(
            ({ correct_answer, incorrect_answers, question, index }) => (
              <article key={index}>
                <h3
                  className="font-bold text-xl"
                  dangerouslySetInnerHTML={{ __html: question }}
                ></h3>
                <ul>
                  {incorrect_answers.map((ans) => (
                    <li key={ans}>
                      <button
                        dangerouslySetInnerHTML={{ __html: ans }}
                        className="bg-red-500 py-2 px-4 rounded my-2 text-white cursor-pointer w-full text-left select-none"
                      ></button>
                    </li>
                  ))}
                </ul>
                <p
                  className="bg-green-500 py-2 px-4 rounded my-2 text-white cursor-pointer select-none"
                  onClick={handleCorrect}
                  dangerouslySetInnerHTML={{ __html: correct_answer }}
                ></p>
              </article>
            )
          )}
        </div>
      </section>
    </>
  )
}
