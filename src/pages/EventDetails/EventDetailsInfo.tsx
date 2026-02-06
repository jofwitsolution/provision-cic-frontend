import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { events } from "../../../data";

const EventDetailsInfo = () => {
  const { id } = useParams<{ id?: string }>();
  const eventId = id ? parseInt(id) : undefined;
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return <div className="text-center mt-20">Event not found</div>;
  }

  return (
    <div className=" max-w-100 m-auto!  md:max-w-250 min-h-screen bg-gray-50 !py-8 px-4">
      <div className="max-w- mx-auto bg-white rounded-2xl shadow-sm !p-8 md:!p-12">
        {/* Header */}
        <div className="flex justify-between items-center !mb-8">
          <Link to="/events" className="text-4xl hover:opacity-70 transition">
            ←
          </Link>
          <p className="text-gray-600 italic text-sm">
            Published: {event.publishDate}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold !mb-6">{event.title}</h1>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed !mb-8">
          {event.text}
        </p>

        {/* What to Expect */}
        <div className="!mb-8">
          <h2 className="font-bold text-xl !mb-4">What to expect:</h2>
          <ul className="space-y-2">
            {event.whatToExpect?.map((item, index) => (
              <li key={index} className="text-gray-700">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Who is this for */}
        <div className="!mb-8">
          <h2 className="font-bold text-xl !mb-4">Who is this for?</h2>
          <p className="text-gray-700 leading-relaxed">{event.whoIsThisFor}</p>
        </div>

        {/* Accessibility */}
        <div className="!mb-8">
          <h2 className="font-bold text-xl !mb-4">Accessibility & support:</h2>
          <p className="text-gray-700 leading-relaxed">{event.accessibility}</p>
        </div>

        {/* Booking */}
        <div>
          <h2 className="font-bold text-xl !mb-4">Booking:</h2>
          <p className="text-gray-700 italic">
            Reserve your space by contacting{" "}
            <a
              href={`mailto:events@provisionsupportservice.co.uk`}
              className="text-orange-600 hover:underline"
            >
              events@provisionsupportservice.co.uk
            </a>{" "}
            or call:{" "}
            <a
              href={`tel:020-33333-5555`}
              className="text-orange-600 hover:underline"
            >
              020-33333-5555
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsInfo;
