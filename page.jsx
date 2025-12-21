import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'

export default function Home() {
  const services = [
    { 
      id: 1,
      title: 'Web & Next.js Development',
      desc: 'Fast, SEO-friendly websites and portals.',
      img: 'https://images.unsplash.com/photo-1526378722484-cc5c2a0df3a8?q=80&w=1200&auto=format&fit=crop'
    },
    { 
      id: 2,
      title: 'Cloud Solutions',
      desc: 'AWS / GCP deployments, CI/CD & monitoring.',
      img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop'
    },
    { 
      id: 3,
      title: 'Embedded Systems',
      desc: 'Firmware, RTOS and IoT integrations.',
      img: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=1200&auto=format&fit=crop'
    },
    { 
      id: 4,
      title: 'Design & UX',
      desc: 'Figma to production-ready UI & UX flows.',
      img: 'https://images.unsplash.com/photo-1559027615-8a9fdfc3d6d2?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  return (
    <>
      <Hero />

      {/* SERVICES SECTION */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto relative">
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#23C6E9] to-[#0F4C8A] rounded-full mb-5"></div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Services
          </h2>

          <p className="mt-4 text-slate-300 text-lg">
            End-to-end solutions — from prototype to production.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              desc={service.desc}
              img={service.img}
            />
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="rounded-3xl p-10 md:p-16 bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-lg">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Ready to start your project?
              </h3>
              <p className="mt-4 text-slate-300 text-lg">
                Tell us about your idea — we'll bring it to life with modern technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-[#23C6E9] to-[#0F4C8A] text-black rounded-xl font-semibold shadow-lg hover:scale-[1.03] transition-all"
              >
                Get in Touch
              </a>

              <a
                href="/services"
                className="inline-flex items-center px-7 py-3.5 border border-white/10 text-slate-200 rounded-xl hover:bg-white/10 transition-all"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
