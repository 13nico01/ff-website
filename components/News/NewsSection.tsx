// components/News/NewsSection.jsx
export default function NewsSection() {
    const newsItems = [
      {
        title: "Erfolgreiche Brandbekämpfung bei Großbrand",
        date: "15.06.2024",
        category: "Einsatzbericht",
        excerpt: "Gestern Abend wurden wir zu einem Großbrand in einen landwirtschaftlichen Betrieb alarmiert...",
        image: "/news/grossbrand.jpg"
      },
      {
        title: "Neue TLF 4000 in Dienst gestellt",
        date: "10.06.2024",
        category: "Ausstattung",
        excerpt: "Endlich ist es soweit - unser neues Tanklöschfahrzeug wurde heute feierlich...",
        image: "/news/tlf-4000.jpg"
      },
      {
        title: "Jugendfeuerwehr-Übungstag",
        date: "05.06.2024",
        category: "Jugend",
        excerpt: "Spannender Übungstag mit realistischen Einsatzszenarien für unseren Nachwuchs...",
        image: "/news/jugenduebung.jpg"
      }
    ]
  
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900">
              Aktuelle Meldungen
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Neueste Einsätze, Veranstaltungen und Informationen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article 
                key={index}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <time 
                      className="block mt-1 text-sm text-gray-500"
                      dateTime={item.date}
                    >
                      {item.date}
                    </time>
                    <p className="mt-3 text-base text-gray-600">
                      {item.excerpt}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="text-primary hover:text-accent font-medium">
                      Mehr lesen →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <a 
              href="/news" 
              className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-light transition-colors"
            >
              Alle Meldungen anzeigen
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    )
  }