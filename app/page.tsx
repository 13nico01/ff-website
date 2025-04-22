'use client'

import { useState, useEffect } from 'react';
import { FaFire, FaTools, FaUsers, FaClock, FaCalendarAlt, FaChevronRight, FaArrowDown } from 'react-icons/fa';

// Beispieldaten für die Termine
const UPCOMING_EVENTS = [
  {
    id: 1,
    date: '24 JUN',
    title: 'Atemschutzübung',
    time: '19:00 - 22:00 Uhr',
    description: 'Themen: Einsatz unter schwerem Atemschutz, Wärmegewöhnung'
  },
  {
    id: 2,
    date: '02 JUL',
    title: 'Technische Übung',
    time: '18:30 - 21:30 Uhr',
    description: 'Themen: Personenrettung aus Fahrzeugen, Umgang mit hydraulischem Rettungsgerät'
  },
  {
    id: 3,
    date: '15 JUL',
    title: 'Gemeinschaftsübung',
    time: '19:00 - 22:00 Uhr',
    description: 'Gemeinsame Übung mit den Nachbarfeuerwehren zum Thema Waldbrand'
  }
];

// Beispieldaten für die News-Überschriften
const LATEST_NEWS = [
  {
    id: 1,
    title: 'Erfolgreiche Übung mit der Feuerwehr Wolkersdorf',
    date: '18. April 2025',
    excerpt: 'Am vergangenen Wochenende fand eine gemeinsame Übung mit der Feuerwehr Wolkersdorf statt...'
  },
  {
    id: 2,
    title: 'Neues Tanklöschfahrzeug in Dienst gestellt',
    date: '10. April 2025',
    excerpt: 'Nach monatelanger Vorbereitung konnten wir endlich unser neues TLF 4000 in Dienst stellen...'
  },
  {
    id: 3,
    title: 'Jahreshauptversammlung 2025',
    date: '01. April 2025',
    excerpt: 'Bei der diesjährigen Jahreshauptversammlung wurden wichtige Entscheidungen getroffen...'
  }
];

// Statistikdaten
const STATS = [
  { id: 1, value: 42, label: 'Gesamteinsätze', icon: FaFire },
  { id: 2, value: 18, label: 'Brandeinsätze', icon: FaFire },
  { id: 3, value: 23, label: 'Techn. Hilfeleistungen', icon: FaTools },
  { id: 4, value: 1240, label: 'Ausbildungsstunden', icon: FaUsers }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState(STATS.map(stat => ({ ...stat, count: 0 })));

  // Animation für das Scrollen
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation für die Statistikzahlen
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    STATS.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // Animation in Millisekunden
      const increment = Math.ceil(end / (duration / 16)); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) start = end;
        
        setStats(prev => prev.map((s, i) => i === index ? { ...s, count: start } : s));
        
        if (start >= end) clearInterval(timer);
      }, 16);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Hero Section - kompakter für mehr sichtbaren Inhalt auf der ersten Seite */}
      <div className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-gray-900/80 z-10" />
        <img
          src="/ff-str.jpg"
          alt="Feuerwehr Mannschaft"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: isScrolled ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease-out' }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Freiwillige Feuerwehr<br />Stranzendorf
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 drop-shadow">
            Seit über 100 Jahren im Dienst für die Sicherheit unserer Gemeinde
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-5 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Notruf 122
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-2 px-5 rounded-lg font-medium transition-all border border-white/30">
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* News Section mit News-Überschriften direkt auf der ersten Seite */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Aktuelle Neuigkeiten</h2>
              <a href="/news" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                Alle Neuigkeiten
                <FaChevronRight className="ml-1" size={14} />
              </a>
            </div>
            
            {/* News-Karten mit Überschriften */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LATEST_NEWS.map((news) => (
                <a 
                  key={news.id} 
                  href={`/news/${news.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 
                           transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{news.title}</h3>
                    <p className="text-gray-700 line-clamp-2">{news.excerpt}</p>
                    <div className="mt-4 text-red-600 font-medium flex items-center">
                      Weiterlesen
                      <FaChevronRight className="ml-1" size={12} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Die vollständige NewsSection-Komponente kann je nach Bedarf weiter unten eingefügt werden */}
            {/* <NewsSection /> */}
          </div>
        </section>
        
        {/* Einsatzstatistik mit Animation */}
        <section id="stats-section" className="py-12 bg-gradient-to-br from-red-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Unsere Einsätze 2024
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-red-600">{stat.count}</span>
                    <span className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-full">
                      <stat.icon size={24} />
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dienstplan Vorschau */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Aktuelle Termine</h2>
              <a href="/dienstplan" className="text-red-600 hover:text-red-700 font-medium flex items-center">
                Zum Dienstplan
                <FaChevronRight className="ml-1" size={14} />
              </a>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {UPCOMING_EVENTS.map((event) => (
                <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="bg-red-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">{event.date}</span>
                      <FaCalendarAlt size={20} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 flex items-center mb-4">
                      <FaClock className="mr-2" size={16} />
                      {event.time}
                    </p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">Werde Teil unseres Teams!</h2>
                <p className="text-gray-300 max-w-xl">
                  Die Freiwillige Feuerwehr Stranzendorf sucht motivierte Menschen, die bereit sind, sich für die Sicherheit ihrer Mitmenschen einzusetzen.
                </p>
              </div>
              <a href="/mitmachen" className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Jetzt mitmachen
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}