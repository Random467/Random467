import './ScreenFooter.css'

function SparkleIcon() {
  return (
    <svg
      className="screen-footer__icon"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ScreenFooter() {
  return (
    <footer className="screen-footer">
      <p className="screen-footer__text">
        Automatic Systems
        <br />
        Built to Endure
      </p>
      <SparkleIcon />
    </footer>
  )
}
