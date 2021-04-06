const ButtonFacebook = ({ HandleLoginClick, text }) => (
  <button
    className="button is-facebook is-fullwidth has-text-weight-bold has-text-white"
    onClick={HandleLoginClick}
  >
    <span className="icon">
      <i className="fab fa-facebook-f"></i>
    </span>
    <span>{text}</span>
  </button>
);

export default ButtonFacebook;
