import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GiFireBowl } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-6 space-y-8 xl:space-y-0">
          
          {/* Logo Section */}
          <div className="xl:col-span-1 flex flex-col items-start">
            <div className="flex items-center">
              <GiFireBowl className="h-10 w-10 text-white mr-2" />
              <span className="text-xl font-heading font-bold">FF Stranzendorf</span>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Mitglied des NÖ Landesfeuerwehrverbandes
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-base font-heading font-semibold">Kontakt</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>Hauptstraße 43</li>
              <li>3702 Stranzendorf</li>
              <li className="mt-2">
                <span className="font-medium">Notruf:</span> 122
              </li>
              <li>Tel: +43 0000 000000</li>
              <li>
                <a 
                  href="mailto:feuerwehr@stranzendorf.at" 
                  className="hover:text-accent transition-colors"
                >
                  feuerwehr@stranzendorf.at
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-2">
            <h3 className="text-base font-heading font-semibold">Rechtliches</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href="/impressum" className="hover:text-accent transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-accent transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/mitgliedschaft" className="hover:text-accent transition-colors">
                  Mitglied werden
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-heading font-semibold">Folgen Sie uns</h3>
              <div className="mt-2 flex space-x-4">
                <a 
                  href="#" 
                  className="text-white/80 hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <p className="text-xs text-white/60">
                Gefördert durch das Land Niederösterreich
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/20 pt-6 text-center">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Freiwillige Feuerwehr Stranzendorf
          </p>
        </div>
      </div>
    </footer>
  )
}