const ButtonGoogle = ({ handleLoginClick, text }) => (
  <button
    className="button is-google is-fullwidth has-text-weight-bold"
    onClick={handleLoginClick}
  >
    <span className="icon is-absolute">
      <i className="fab fa-google"></i>
    </span>

    <span>{text}</span>
  </button>
);

export default ButtonGoogle;
