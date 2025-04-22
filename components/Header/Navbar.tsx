'use client'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Scroll-Effekt für die Navigation
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Navigationspunkte
    const navItems = [
        { name: 'Start', href: '/' },
        { name: 'Aktuelles', href: '/news' },
        { name: 'Einsätze', href: '/einsaetze' },
        { name: 'Über uns', href: '/about' },
    ]

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white shadow-md py-2'
                    : 'bg-white/80 backdrop-blur-sm py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <div className="h-12 w-12 flex items-center justify-center overflow-hidden">
                            <img
                                src="/korpsabzeichen.png"
                                alt="Logo Feuerwehr Stranzendorf"
                                className="object-contain h-full w-full"
                            />
                        </div>
                        <div className="ml-3">
                            <div className="text-lg font-bold text-red-600">Feuerwehr</div>
                            <div className="text-base text-gray-700 font-medium">Stranzendorf</div>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium text-sm lg:text-base"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all shadow-sm hover:shadow flex items-center text-sm lg:text-base"
                        >
                            <FaPhoneAlt className="mr-2" size={14} />
                            Kontakt
                        </a>
                    </div>

                    {/* Notruf für mittlere Bildschirme */}
                    <div className="hidden sm:block md:hidden">
                        <a
                            href="tel:122"
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all shadow-sm hover:shadow flex items-center"
                        >
                            <FaPhoneAlt className="mr-2" size={14} />
                            Notruf 122
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none transition-colors"
                            aria-label="Hauptmenü"
                        >
                            {isOpen ? (
                                <FiX className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b z-50 shadow-lg max-h-[80vh] overflow-y-auto transition-all duration-300 ease-in-out">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-md font-medium transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-4 pb-2">
                            <div className="border-t border-gray-200"></div>
                        </div>
                        <a
                            href="/contact"
                            className="block mx-3 mt-2 px-4 py-3 text-center bg-red-600 text-white rounded-md hover:bg-red-700 shadow-sm transition-all font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Kontakt
                        </a>
                        <a
                            href="tel:122"
                            className="block mx-3 mt-2 mb-4 px-4 py-3 text-center bg-red-700 text-white rounded-md hover:bg-red-800 shadow-sm transition-all font-medium flex items-center justify-center"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaPhoneAlt className="mr-2" size={14} />
                            Notruf 122
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}