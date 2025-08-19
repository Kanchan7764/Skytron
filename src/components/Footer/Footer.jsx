import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#34495E] border-t mt-0 shadow-sm text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Company Info (Top Center) */}
          <div className="text-center mb-10">
            <h1 className="text-2xl font-bold">SkyTron</h1>
            <p className="mt-2 text-gray-300 text-sm">
              Empowering technology for a better tomorrow.
            </p>
          </div>

          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-16">
            {/* Column 1: Company (with left margin on large screens) */}
            <div className="lg:ml-8">
              <h3 className="text-sm font-semibold uppercase mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                 <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/review" className="hover:underline">
                    Review
                  </Link>
                </li>
               
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Products</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/drone" className="hover:underline">
                    Drones
                  </Link>
                </li>
                <li>
                  <Link to="/software" className="hover:underline">
                    Software
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:underline">
                    Solutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">
                Follow Us
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="hover:underline">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-gray-700" />

          {/* Bottom Section (Centered) */}
          <div className="text-center text-sm text-gray-400">
            <p>
              © 2025{" "}
              <Link to="/" className="hover:underline font-medium text-white">
                SkyTron
              </Link>
              . All rights reserved.
            </p>
            <div className="flex justify-center space-x-5 mt-4">
              <a href="#" className="hover:text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="hover:text-white" aria-label="Dribbble">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* Facebook */}
            <Link to="#" className="text-white hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V127.53c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.77 0 225.36 0C141.09 0 89.53 54.42 89.53 153.11V195.3H0v92.66h89.53V512h107.74V288z" />
              </svg>
            </Link>

            {/* Twitter */}
            <Link to="#" className="text-white hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M459.4 151.7c.3 4.5.3 9.1.3 13.6 0 138.72-105.58 298.56-298.56 298.56-59.5 0-114.68-17.22-161.19-47.1 8.44.97 16.88 1.44 25.84 1.44 49.26 0 94.6-16.88 130.4-45.25-46.13-1-84.79-31.2-98.15-72.77 6.5.97 13 .97 19.81.97 9.4 0 18.6-1.3 27.4-3.67-48.07-9.72-84.01-51.98-84.01-103.06v-1.3c13.97 7.8 30.1 12.66 47.24 13.3-28.3-18.84-46.78-51.02-46.78-87.39 0-19.2 5.2-37 14.32-52.45 51.55 63.25 129.3 104.48 216.36 108.82-1.8-7.8-2.8-15.9-2.8-24.3 0-57.4 46.7-104.1 104.1-104.1 29.9 0 56.9 12.66 75.89 33.14 23.7-4.7 46.1-13.3 66.6-25.34-7.8 24.5-24.5 45.25-46.13 58.1 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.2z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link to="#" className="text-white hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.3 0-71.1-31.8-71.1-71.1s31.8-71.1 71.1-71.1 71.1 31.8 71.1 71.1-31.8 71.1-71.1 71.1zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9C385.7 7.9 354.3-.3 319 1.4c-35.3 1.7-139.7 1.7-175 0C109.7-.3 78.3 7.9 52.1 34.1 25.8 60.4 17.6 91.8 19.3 127.1c1.7 35.3 1.7 139.7 0 175-1.7 35.3 7.9 66.7 34.1 92.9s57.6 35.8 92.9 34.1c35.3-1.7 139.7-1.7 175 0 35.3 1.7 66.7-7.9 92.9-34.1 26.3-26.3 35.8-57.6 34.1-92.9 1.7-35.3 1.7-139.7 0-175zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.5 22.9-34.6 42.4-42.4 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z" />
              </svg>
            </Link>

            {/* GitHub */}

            <Link to="#" className="text-white hover:text-gray-300">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6s-5.2-1.6-5.2-3.6 2.3-3.6 5.2-3.6 5.2 1.6 5.2 3.6zM133.2 394.2c-.7 2.2-3.4 3.2-6.1 2.2s-4.3-3.4-3.6-5.6 3.4-3.2 6.1-2.2c2.7 1 4.3 3.4 3.6 5.6zM178 392.5c-2.9 1.6-6.5 0-7.9-3.2s0-6.9 2.9-8.5 6.5 0 7.9 3.2c1.4 3.2 0 6.9-2.9 8.5zm28.3-5.9c-2.9 1.4-6.5-.2-7.9-3.6s0-7.4 2.9-8.8 6.5.2 7.9 3.6 0 7.4-2.9 8.8zm39.1-2.5c0 2.2-2.3 3.9-5.2 3.9s-5.2-1.7-5.2-3.9 2.3-3.9 5.2-3.9 5.2 1.7 5.2 3.9zm56.3 1.6c-1.8 2-5.2 1.1-7.6-1.5-2.4-2.6-2.9-6-1.1-8 1.8-2 5.2-1.1 7.6 1.5 2.4 2.6 2.9 6 1.1 8zM244 8C109.5 8 0 117.5 0 252c0 108.9 70.7 201.4 168.7 234.1 12.3 2.3 16.8-5.3 16.8-11.8 0-5.9-.2-25.4-.3-46-68.7 14.9-83.2-33.1-83.2-33.1-11.2-28.4-27.4-36-27.4-36-22.4-15.3 1.7-15 1.7-15 24.8 1.7 37.8 25.5 37.8 25.5 22 37.7 57.8 26.8 71.9 20.5 2.2-15.9 8.6-26.8 15.6-33-54.8-6.2-112.4-27.4-112.4-122 0-27 9.6-49.1 25.4-66.4-2.6-6.2-11-31.2 2.4-65 0 0 20.7-6.6 67.7 25.2 19.7-5.5 40.9-8.2 62-8.3 21.1.1 42.3 2.8 62 8.3 47-31.8 67.6-25.2 67.6-25.2 13.5 33.8 5.1 58.8 2.5 65 15.8 17.3 25.3 39.4 25.3 66.4 0 94.9-57.7 115.7-112.7 121.8 8.8 7.6 16.6 22.6 16.6 45.6 0 32.9-.3 59.4-.3 67.5 0 6.6 4.4 14.2 16.9 11.8C425.3 453.4 496 360.9 496 252 496 117.5 386.5 8 252 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>

      {/* <footer className="bg-white border-y mt-20">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-4">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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2P8AyW0wmiMxbLJIYXPgBDnNO/K5RyxXax5jjka5j4zJs078u3qrX0brv6FoutDK0GZnNGSfMA9E9rUe1Th4aUDIpnva5kL4gwd2u/aA382keRW10jl68PDWWoXnxoK0z3sI6AOe7Zbe1oTOa0rRZWO3XqxWWFzWSA7+m+3wH3qR8NuHc+my85f6NYIYWMLCXA+0T1B+KiKd4W1blrOWBSqyTOdA5o5G7gE7dz5Lqeqx0daJj9uZrADt6gLEFaCBpEEEcYPfkYBuvsoC0Ot5PD0vfO/7TA37SAt8orxKl8LSlj+aRg+/f+yQco5N/iZG0/1ld+K6B/w9Y7wNMWLjhs6eXYH1AXPErueZ7h15nE/euteGWOGM0VjINtnOj53b+pQSlERAXxtQ+PXlh5nM8RhbzNOxG/mvsiCtNJ8LGYTLC9ZyAshrw4AR7F+x3HMT71ZWyzt1RAREQEREBERAREQEREBERAREQEREHws1oLLOSxDHM3+F7QQuf+IvDifFX5bdWvYlxEjy9slZnO+tudy1ze/Lv2K6HRByLXxJnBq4eGzftTHl8R0fLsPQN6n5lWpozhRbENY59wihZ7ToGndzz57+gVwsgijcXRRMYT3LWgbr6q6PlBDHBCyGJgbGxoa1voAvqiKAiIgKDcX5/C0r8ZN/saSpyo7rfTDNVYR2PNh1Z++7JQ3fl6bHp80HJuDqm9mKVZvUyTNb967NpQivUhgaNhHG1v2BVvpDg5jdPZWHJT35rk0J5mNLA1oPqrOHdBlERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//Z"
                                className=" h-20 pl-20"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3 mr-14">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/home" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Insta
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025
                        <a href="/" className="hover:underline">
                            ourcompany
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer> */}
    </>
  );
}
