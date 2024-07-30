export function ResultsText(props) {
  return (
    <div className="flex flex-col items-center lg:items-start justify-start flex-wrap max-w-xl gap-24 mx-auto mt-11">
      <p className="font-medium text-white text-base">
        Rua: {props.streetName}
      </p>
      <p className="font-medium text-white text-base">
        Cidade: {props.neighName}
      </p>
      <p className="font-medium text-white text-base">
        Bairro: {props.cityName}
      </p>
      <p className="font-medium text-white text-base">
        Estado: {props.stateName}
      </p>
    </div>
  )
}
