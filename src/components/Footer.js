import {
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiApplemusic, SiTidal } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <section className="footer__socialMedia">
          <div className="footer__socialMediaWrap">
            <a href="/" className="footer__logo">
              <p className="footer__logoH1">Fredrik Fordelsen</p>
              <small className="footer__rights">
                &copy; {new Date().getFullYear()} All Rights Reserved.
              </small>
            </a>

            <div className="footer__socialIcons">
              <a
                href="https://www.linkedin.com/in/fredrik-fordelsen-6a1281203/"
                target="_blank"
                className="footer__socialIconLink"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <AiFillLinkedin />
              </a>

              <a
                href="https://github.com/btfredr"
                target="_blank"
                className="footer__socialIconLink"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
