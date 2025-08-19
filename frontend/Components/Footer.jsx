import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#140b4d] text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
          {/* Logo / Project Name */}
          <div>
            <h1 className="text-2xl font-bold">Exam Resources</h1>
            <p className="text-gray-400 mt-2">
              All your college notes, previous papers, and study materials in
              one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold mb-2">Quick Links</h2>
            <ul>
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/notes" className="hover:text-gray-300">
                  Notes
                </a>
              </li>
              <li>
                <a href="/papers" className="hover:text-gray-300">
                  Q-Papers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-2">
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faSquareLinkedin} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Project Admin</h2>
            <div className="flex gap-2">
              <a href="https://github.com/Sitaram8472" className="hover:text-gray-300">
                  <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/sitaram-sahu/" className="hover:text-gray-300">
                 <FontAwesomeIcon icon={faSquareLinkedin}/>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Exam Resources. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
