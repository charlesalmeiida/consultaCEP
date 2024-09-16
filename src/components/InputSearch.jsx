export function InputSearch({ name }) {
  return (
    <input
      name={name}
      type="text"
      placeholder="Digite seu CEP..."
      className="rounded-2xl py-4 pl-8 w-full max-w-[80%] sm:max-w-80"
    />
  )
}
