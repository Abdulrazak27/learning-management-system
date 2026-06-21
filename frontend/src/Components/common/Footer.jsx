import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-extrabold text-white mb-3">
            🎓 Nexora Academy
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empowering learners worldwide with quality courses, certifications, and skills to grow your career.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/")}>Home</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/courses")}>All Courses</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/profile")}>My Profile</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/Learnings")}>My Learnings</li>
          </ul>
        </div>

        {/* Course Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/courses")}>Web Development</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/courses")}>Data Science & ML</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/courses")}>Mobile Development</li>
            <li className="hover:text-white cursor-pointer transition" onClick={() => navigate("/courses")}>Cloud & DevOps</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Contact Us</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Copyright + Socials */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Nexora Academy. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/login/" target="_blank" rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 text-white transition">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.instagram.com/abdulrazak27__/" target="_blank" rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 text-white transition">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/abdulrazak27/" target="_blank" rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 text-white transition">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;