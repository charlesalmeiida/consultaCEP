export function BtnPrimary(props) {
  return (
    <button
      onClick={props.handleSubmit}
      type="submit"
      className="text-blue-dark w-full max-w-md lg:max-w-36 bg-blue-light py-4 rounded-2xl px-8 hover:bg-white"
    >
      {props.children}
    </button>
  )
}
