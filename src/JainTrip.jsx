/*
JainTrip - Single-file React component
- Built with Tailwind CSS utility classes (assumes Tailwind is configured in the project)
- Uses React (functional component). Default export is JainTripApp.
- Includes sample tour data, filters, modal booking form, enquiry pop-up, WhatsApp quick action.

How to use:
1. Create a React app (Vite/CRA/Next). Ensure Tailwind CSS is set up.
2. Place this file as `JainTripApp.jsx` and import it in your main entry (e.g., App.jsx).
3. Install optional icon dependency: `npm i lucide-react` (or replace icons with SVGs included).
4. Run the dev server.

Notes:
- Replace placeholder images with your own assets.
- Hook contact form/booking to your backend or Google Forms / CRM.
- Colors: primary blue #3460F4, yellow #FFFF00, white #FFFFFF.
*/

import { useState, useMemo } from "react";
import {
  Phone,
  MessageCircle,
  User,
  MapPin,
} from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const PRIMARY_BLUE = "#3460F4";
const PRIMARY_YELLOW = "#FFFF00";

const sampleTours = [
  {
    id: 1,
    title: "Splendid Dubai",
    destination: "Dubai 5N • Abu Dhabi 1N",
    startDate: "2025-10-06",
    endDate: "2025-10-12",
    price: 103900,
    image:
      "./TourImages/Dubai.jpg",
    highlights: [
      "All-Inclusive Package",
      "Return international flights from Bhopal/Raipur/Nagpur/Pune (fare included upto Rs. 30,000)",
      "Dubai City Tour + Dubai Frame",
      "Burj Khalifa (124th floor – non-prime slot)",
      "Dubai Mall + Musical Fountain Show",
      "Desert Safari with Arabic dance show",
      "Monorail ride to Palm Jumeirah + View at The Palm",
      "Aya Universe",
      "Dubai Miracle Garden",
      "Dubai Dolphinarium",
      "Global Village",
      "Abu Dhabi Sightseeing – including BAPS Hindu Mandir & Sheikh Zayed Grand Mosque",
      "Yas Island Theme Park: SeaWorld + choice of Warner Bros. World / Ferrari World"
    ],
    type: "International",
  },
  {
    id: 2,
    title: "Discovering Bhutan",
    destination: "Thimphu 2N • Punakha 1N • Paro 2N",
    startDate: "2025-12-07",
    endDate: "2025-12-15",
    price: 77700,
    image:
      "./TourImages/Bhutan.jpg",
    highlights: [
      "All-Inclusive Package",
      "Delhi - Paro - Delhi Flights (fare included up toRs.38,000)",
      "National Memorial Chorten - Thimphu",
      "Buddha Point - Thimphu",
      "Folk Heritage Museum - Thimphu",
      "Punakha Day Trip incl Dzong",
      "Suspension Bridge - Punakha",
      "Rinpung Dzong - Paro",
      "Kyichu Lhakhang - Paro",
      "Tachogang Iron Bridge - Paro",
      "Simply Bhutan",
      "Paro Taktsang (Tiger's Nest Monastery) - Paro",
      "Sustainable Development Fee @ 1200/per day"
    ],
    type: "International",
  },
  {
    id: 3,
    title: "Chalo Vietnam",
    destination: "Phu Quoc 3N • Da Nang 3N • Ho Chi Minh 1N",
    startDate: "2025-12-07",
    endDate: "2025-12-15",
    price: 122900,
    image: "./TourImages/Vietnam.jpg",
    highlights: [
      "All-Inclusive Package",
      "Return international & domestic flights (fare included up to Rs.43,000)",
      "Grandworld Activity - Gondola Boating - Teddy Bear - The Quintennese of Vietnam Show",
      "VinSafari + VinWonder",
      "Cable Car & Speedboat during 4 Islands tour",
      "Kiss of The Seas Show",
      "Ba Na Hills Cable Car Ticket",
      "Coconut Forest Basket Boat Ride",
      "Cu Chi Tunnels",
      "Independence Palace",
      "Museum of War Remnants",
      "Vietnam Single Entry VISA"
    ],
    type: "International",
  },
];

function formatDate(d) {
  const date = new Date(d);
  return date.toLocaleDateString();
}

export default function JainTripApp() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedTour, setSelectedTour] = useState(null);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  const filteredTours = useMemo(() => {
    return sampleTours.filter((t) => {
      if (filter !== "All" && t.type !== filter) return false;
      if (
        search &&
        !`${t.title} ${t.destination}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [filter, search]);

  function openBooking(tour) {
    setSelectedTour(tour);
    setShowEnquiry(true);
  }

  function submitEnquiry(e) {
    e.preventDefault();
    // TODO: integrate with backend or API (send form data)
    setShowEnquiry(false);
    setShowBookingSuccess(true);
    setTimeout(() => setShowBookingSuccess(false), 4000);
  }

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header
        className="sticky top-0 z-40 bg-white shadow-sm"
        style={{ backgroundColor: "#355ff3" }}
      >
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dkwjkakbc/image/upload/v1755268307/jain_trip_log_without_bg_kuhpke.png"
                  width={150}
                  height={50}
                  alt="logo"
                />
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#tours"
                className="hover:underline"
                style={{ color: "#fff" }}
              >
                Tours
              </a>
              <a
                href="#who"
                className="hover:underline"
                style={{ color: "#fff" }}
              >
                Who We Are
              </a>
              <a
                href="#why"
                className="hover:underline"
                style={{ color: "#fff" }}
              >
                Why us?
              </a>
              <a
                href="#testimonials"
                className="hover:underline"
                style={{ color: "#fff" }}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="hover:underline"
                style={{ color: "#fff" }}
              >
                Contact
              </a>
            </nav>

            <a
              href="tel:+918821079210"
              className="flex items-center gap-2 px-3 py-2 rounded border"
              style={{ borderColor: PRIMARY_BLUE }}
            >
              <Phone size={16} color="#ffffff" />
              <span style={{ color: "#ffffff", fontWeight: 600 }}>
                +91 88210 79210
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="h-144 md:h-96 bg-[linear-gradient(90deg,#3460F4cc,rgba(52,96,244,0.4))] flex items-center">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Travel Pure. Travel Together.
              </h1>
              <p className="mt-4 text-lg max-w-xl">
                Hassle-free vegetarian & Jain-friendly group tours
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#tours"
                  className="px-6 py-3 rounded font-semibold"
                  style={{ background: PRIMARY_YELLOW, color: PRIMARY_BLUE }}
                >
                  View Live Tours
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-6 py-3 rounded border"
                  style={{
                    borderColor: PRIMARY_YELLOW,
                    color: "white",
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=4"
                alt="travel"
                className="rounded-lg shadow-lg w-full max-h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who" className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: PRIMARY_BLUE }}>
              Who We Are
            </h2>
            <p className="mt-4 text-gray-700">
              Travel should be about discovery, not compromise. Yet, as Jain and
              vegetarian travellers, finding the right meals and comfort abroad
              has always been a challenge. JainTrip began with a mission to make
              travel stress-free and meaningful for our community. Guided by our
              founder’s journeys across 30+ countries and strengthened by the
              expertise of SuperTrip and the legacy Gyan Ganga Group, we create
              thoughtfully curated itineraries that let you explore freely, with
              complete peace of mind.
            </p>
          </div>

          <div>
            <img
              src="./TourImages/GroupImg.png"
              alt="group"
              className="rounded-lg shadow-md object-cover w-full h-50"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold" style={{ color: PRIMARY_BLUE }}>
            What We Do
          </h3>
          <p className="mt-2 text-gray-700">
            We design all-inclusive travel experiences tailored for Jain and
            vegetarian travelers. Every package is thoughtfully crafted and
            covers:
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <img src="./Others/flight.png" style={{height: "30px", width: "30px"}}/>
              <p className="mt-2 text-sm text-gray-600">
                Flights, visas, hotels, and transfers.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <img src="./Others/pureVeg.png" style={{height: "40px", width: "40px"}}/>
              <p className="mt-2 text-sm text-gray-600">
                100% pure vegetarian or Jain-friendly meals served at trusted
                restaurants or freshly prepared & packed.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <img src="./Others/captain.png" style={{height: "30px", width: "30px"}}/>
              <p className="mt-2 text-sm text-gray-600">
                Experienced trip captains to ensure timely meals, smooth
                logistics and group well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Group Tours */}
      <section id="tours" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2
                className="text-3xl font-bold"
                style={{ color: PRIMARY_BLUE }}
              >
                Live Group Tours
              </h2>
              <p className="mt-1 text-gray-600">
                Choose a tour and book with confidence — limited seats per group
                for a community feel.
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <article
                key={tour.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition relative"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-44 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        className="font-semibold text-lg"
                        style={{ color: PRIMARY_BLUE }}
                      >
                        {tour.title}
                      </h3>
                      <p className="text-sm font-bold">
                        {tour.destination}
                      </p>
                    </div>
                    <div className="text-right">
                      <div
                        className="font-bold text-xl"
                        style={{ color: PRIMARY_BLUE }}
                      >
                        ₹{tour.price.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <ul className="mt-3 text-sm text-black space-y-1">
                    {tour.highlights.map((h, i) => (
                      <li key={i}>• {h}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <div className="text-xs text-gray-500">
                      {formatDate(tour.startDate)} - {formatDate(tour.endDate)}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:+911234567890"
                        className="px-3 py-2 rounded font-medium"
                        style={{
                          background: PRIMARY_YELLOW,
                          color: PRIMARY_BLUE,
                        }}
                      >
                        Call to book Now
                      </a>
                      {/* <button
                        onClick={() =>
                          alert("Open full itinerary modal / page (implement)")
                        }
                        className="px-3 py-2 rounded border"
                        style={{
                          borderColor: PRIMARY_BLUE,
                          color: PRIMARY_BLUE,
                        }}
                      >
                        View
                      </button> */}
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {filteredTours.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No tours match your filters.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section id="why" className="py-12" style={{ background: PRIMARY_BLUE }}>
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h2 className="text-3xl font-bold">Why Travel With Us</h2>
          <p className="mt-2">
            Travel isn’t just about destinations, it’s about peace of mind. With
            decades of expertise and a no-shortcuts philosophy, we make every
            journey seamless, authentic, and enriching.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded">
              <div className="text-2xl font-bold">🍽️</div>
              <div className="mt-2 font-semibold">
                Expertly Crafted Itineraries
              </div>
              <div className="text-sm mt-1">
                Curated with real on-ground insights. Our founder, who has
                explored 30+ countries, personally ensures every trip is
                designed with care.
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded">
              <div className="text-2xl font-bold">⏳</div>
              <div className="mt-2 font-semibold">
                All-Inclusive Convenience
              </div>
              <div className="text-sm mt-1">
                From flights and hotels to transfers and meals, everything is
                covered, so you can focus on making memories.
              </div>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white/10 rounded">
              <div className="text-2xl font-bold">🙏</div>
              <div className="mt-2 font-semibold">Trusted Legacy</div>
              <div className="text-sm mt-1">
                Backed by SuperTrip and the Gyan Ganga Group, we stand for
                authenticity, quality, and reliability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold" style={{ color: PRIMARY_BLUE }}>
            What Our Travelers Say
          </h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <blockquote className="p-4 bg-white rounded shadow">
              <p className="italic">
                "They are super in documentation so getting visa was not
                problem. After reaching every step was taken care of from which
                tain to board where is hotel how to reach there where to eat was
                mentioned in detail plan given to us. We were 9 females only
                group all above 60 years, no problem faced in our journey to
                Switzerland and back home."
              </p>
              <div className="mt-3 font-semibold">Pranita Tripre</div>
            </blockquote>
            <blockquote className="p-4 bg-white rounded shadow">
              <p className="italic">
                "What truly sets them apart is their flexibility and genuine
                understanding of a client’s needs. They listen carefully and
                deliver accordingly. I’ve entrusted them with two of my
                international trips, and on both occasions, they provided
                end-to-end services with outstanding support whenever required.
                Their commitment to customer satisfaction, along with the
                personal involvement of Mr. Viny, makes SuperTrip a reliable and
                trustworthy travel partner."
              </p>
              <div className="mt-3 font-semibold">Kalpveer Singh</div>
            </blockquote>
            <blockquote className="p-4 bg-white rounded shadow">
              <p className="italic">
                "If you're looking for a travel agency that offers reliable
                service, great communication, and well-curated itineraries, we
                highly recommend Super Trip. They made our vacation truly
                stress-free and memorable!"
              </p>
              <div className="mt-3 font-semibold">Richa Gupta</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8">
        <div
          className="max-w-7xl mx-auto px-6 rounded-lg"
          style={{ background: PRIMARY_YELLOW }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between p-6">
            <div>
              <h4 className="text-xl font-bold" style={{ color: PRIMARY_BLUE }}>
                Ready for worry-free Jain & Veg travel?
              </h4>
              <p className="text-sm text-gray-800 mt-1">
                Join our all-inclusive tours and experience comfort without
                compromise.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="#tours"
                className="px-5 py-3 rounded"
                style={{ background: PRIMARY_BLUE, color: "white" }}
              >
                View Tours
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-6 items-start">
          <div>
            <h3 className="text-2xl font-bold" style={{ color: PRIMARY_BLUE }}>
              We’re here to help
            </h3>
            <p className="mt-2 text-gray-700">
              Questions about a tour or need a custom group booking? Reach out
              or chat with us on WhatsApp.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone />
                <div>
                  <div className="text-sm text-gray-600">Call us</div>
                  <a
                    href="tel:+911234567890"
                    className="font-semibold"
                    style={{ color: PRIMARY_BLUE }}
                  >
                    +91 88210 79210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle />
                <div>
                  <div className="text-sm text-gray-600">Email</div>
                  <a
                    href="mailto:info@jain-trip.com"
                    className="font-semibold"
                    style={{ color: PRIMARY_BLUE }}
                  >
                    info@jain-trip.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin />
                <div>
                  <div className="text-sm text-gray-600">Address</div>
                  <a
                    href="mailto:Info@jain-trip.com"
                    className="font-semibold"
                    style={{ color: PRIMARY_BLUE }}
                  >
                    B-186, Rachna Nagar, Bhopal, Madhya Pradesh - 462023
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-white border-t py-2"
        style={{ backgroundColor: PRIMARY_BLUE }}
      >
        <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div style={{ backgroundColor: PRIMARY_BLUE }}>
              <img
                src="https://res.cloudinary.com/dkwjkakbc/image/upload/v1755268307/jain_trip_log_without_bg_kuhpke.png"
                width={150}
                height={50}
                alt="logo"
              />
            </div>
          </div>

          <div className="flex gap-8 text-white">
            <div>
              <div className="font-semibold text-sm">Follow us on</div>
              <div className="mt-2 flex gap-3 text-gray-600">
                <img
                  src="./Socials/instagram.svg"
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  alt="instagram"
                  onClick={() => window.open("https://www.instagram.com/jaintripindia?igsh=MW45azJqbzM0Y2N1NA==", "_blank")}
                />
                <img
                  src="./Socials/facebook.svg"
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  alt="facebook"
                  onClick={() => window.open("https://www.facebook.com/share/168ZcpHLeF/?mibextid=wwXIfr", "_blank")}
                />
                <img
                  src="./Socials/youtube.svg"
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  alt="youtube"
                  onClick={() => window.open("https://youtube.com/@jaintripindia?si=-NllTMUcPD68DWmx", "_blank")}
                />
              </div>
            </div>
          </div>

          <div className="text-sm text-white">
            © {new Date().getFullYear()} JainTrip. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/918821079210"
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-16 rounded-full shadow-lg p-1.5"
        style={{ background: "#25D366" }}
      >
        <WhatsAppIcon fontSize="large" style={{ color: "white" }} />
      </a>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg w-11/12 max-w-xl p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">Enquiry / Booking</h4>
              <button
                onClick={() => setShowEnquiry(false)}
                className="text-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking success toast */}
      {showBookingSuccess && (
        <div className="fixed right-5 top-5 bg-green-500 text-white px-4 py-2 rounded shadow">
          Enquiry sent — we will contact you shortly.
        </div>
      )}
    </div>
  );
}
