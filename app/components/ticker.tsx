import SocialButton from "./social-button";

const Ticker = () => {
  return (<div className="d-flex flex-row justify-content-between container flex-wrap">
    <div className="d-flex flex-row">
      <p className="m-2"><i className="bi bi-telephone m-1"></i> +91-8888888888 </p>
      <p className="m-2"><i className="bi bi-envelope m-1" ></i> xyz@gmail.com</p>
    </div>
    <p className="justify-content-center m-2">Follow us and get a chance to win 80% off</p>
    <SocialButton />
  </div>);
}

export default Ticker;