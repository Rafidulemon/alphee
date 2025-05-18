import { Facebook, Instagram } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <div className="bg-primary text-white text-[12px] md:text-[14px] py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="tel:+8801973547022">+880 1973-547022</a>
            <span>alphee.bd@gmail.com</span>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://www.facebook.com/profile.php?id=61572945527439"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/alphee.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Topbar
