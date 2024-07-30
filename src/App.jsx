import { BtnPrimary } from "./components/BtnPrimary"
import { InputSearch } from "./components/InputSearch"
import "./index.css"
import { PackageSearch } from "lucide-react"
import { api } from "./lib/axios"
import { useState } from "react"
import { ResultsText } from "./components/ResultsText"

export default function App() {
  const [streetName, setStreetName] = useState("")
  const [neighName, setNeighoName] = useState("")
  const [cityName, setCityName] = useState("")
  const [stateName, setStateName] = useState("")
  const [isResultsTextVisible, setIsResultsTextVisible] = useState(false)
  const [isError, setError] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const cep = formData.get("cep")
    setError("")

    api
      .get(`${cep}/json/`)
      .then((response) => {
        setStreetName(response.data.logradouro)
        setNeighoName(response.data.bairro)
        setStateName(response.data.uf)
        setCityName(response.data.localidade)
      })
      .catch((err) => {
        console.error("Erro ao consultar o CEP:", err)
        setError("Erro ao consultar o CEP. Verifique o CEP digitado e tente novamente.")
        setIsResultsTextVisible(false)
      })

    setIsResultsTextVisible(true)
  }

  return (
    <section className="pt-36">
      <div className="space-y-6 flex flex-col items-center">
        <PackageSearch className="size-16 text-blue-light" />
        <h1 className="text-white text-4xl font-semibold">ConsultaCEP</h1>
      </div>

      <form
        className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-24"
        onSubmit={handleSubmit}
      >
        <InputSearch name="cep" /> <BtnPrimary>Consultar</BtnPrimary>
      </form>
      {isError && <p className="text-red-500 mt-4 text-center">{isError}</p>}
      {isResultsTextVisible && (
        <ResultsText
          streetName={streetName}
          neighName={neighName}
          cityName={cityName}
          stateName={stateName}
        />
      )}
    </section>
  )
}
