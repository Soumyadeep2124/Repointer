import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiInstagram,
  FiHeart,
  FiMoon,
  FiGlobe,
  FiZap,
  FiCheckCircle
} from "react-icons/fi";
import {assets} from "../assets/assets"

const Footer = () => {
  return (
    <footer className="bg-[#0e0f1a text-white px-6 py-12 md:px-16 mt-50">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mr-10">
        {/* Brand Column */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
                      <img src={assets.Repointer} alt="" className="w-20 h-20 rounded-full"/>
                    <span className="text-5xl font-semibold text-white">Repointer</span>
                  </div>
          <p className="text-gray-400 text-l">
            Empowering coders worldwide with interactive learning experiences, cutting-edge visualizations, and industry-standard coding challenges.
          </p>
          <div className="flex gap-4">
            <div className="bg-[#1b1f27] rounded-lg px-4 py-2 text-center">
              <p className="text-xl font-bold text-orange-500">1M+</p>
              <p className="text-xs text-gray-400">Students</p>
            </div>
            <div className="bg-[#1b1f27] rounded-lg px-4 py-2 text-center">
              <p className="text-xl font-bold text-orange-500">50K+</p>
              <p className="text-xs text-gray-400">Problems</p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <FiGithub className="text-gray-400 hover:text-white cursor-pointer" />
            <FiTwitter className="text-gray-400 hover:text-white cursor-pointer" />
            <FiLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
            <FiInstagram className="text-gray-400 hover:text-white cursor-pointer" />
            <FiYoutube className="text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">Products</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Interactive Courses</li>
            <li>DSA Visualizer</li>
            <li>CodeLab Pro</li>
            <li>Ai Assistance</li>
            <li>Certification</li>
            <li>Smart Plans</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Tutorials</li>
            <li>Community</li>
            <li>Support Center</li>
            <li>Status Page</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><FiMail /> mrbhowmik2124@gmail.com</li>
            <li className="flex items-center gap-2"><FiPhone /> +1 (234) 567-890</li>
            <li className="flex items-start gap-2"><FiMapPin /> Tripura, India</li>
          </ul>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-wrap justify-between items-center text-sm text-gray-400">
        <p>© 2025 LearnHub. Made with <FiHeart className="inline text-red-500 mx-1" /> for coders worldwide.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-1"><FiCheckCircle className="text-green-500" /> All systems operational</div>
          <div className="flex items-center gap-1"><FiGlobe /> English</div>
          <div className="flex items-center gap-1"><FiMoon /> Dark Mode</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
