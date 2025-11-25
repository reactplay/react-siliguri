import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaUsers } from "react-icons/fa";
import { useTheme } from "../ThemeProvider";
import { Button } from "./button";

interface EventCardProps {
  event: any;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };

    checkTheme();

    if (theme === "system") {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    } else {
      setIsDark(theme === "dark");
    }
  }, [theme]);

  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-600";
  const textMuted = isDark ? "text-gray-400" : "text-gray-500";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";
  const bgCard = isDark ? "bg-gray-900" : "bg-white";

  // Format like: Sat, Dec 13
  const formatDisplayDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const dayName = date.toLocaleString("en-US", { weekday: "short" });
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    return `${dayName}, ${month} ${day}`;
  };

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all sm:max-w-full md:max-w-full w-full `}
    >
      {/* Banner image */}
      <div className="h-48 w-full bg-gray-300 dark:bg-gray-700 rounded-4xl">
        <img
          src={event.imageUrl || "/placeholder.jpg"}
          alt={event.title}
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Date + Time */}
        <p className={`text-sm flex items-center gap-2 ${textMuted}`}>
          <FaCalendarAlt className={textMuted} />
          {formatDisplayDate(event.date)} · {event.time} IST
        </p>

        {/* Title */}
        <h3 className={`text-xl font-bold mt-2 leading-tight ${textPrimary}`}>
          {event.title}
        </h3>

        {/* Description */}
        <p className={`mt-1 line-clamp-2 ${textSecondary}`}>
          {event.description}
        </p>

        {/* Location */}
        <div className={`mt-3 flex items-center text-sm ${textSecondary}`}>
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          {event.venue}
        </div>

        {/* Speaker */}
        <div className={`mt-1 flex items-center text-sm ${textSecondary}`}>
          <FaUser className="text-blue-400 mr-2" />
          {event.speaker}
        </div>

        {/* Footer */}
        {/* <div
          className={`flex items-center justify-between mt-5 pt-4 border-t ${borderColor}`}
        >
          <div className={`flex items-center text-sm ${textSecondary}`}>
            <FaUsers className="mr-2" />
            {event.registrations} peoples have registered!
          </div>
        </div> */}

        {/* Register button */}
        {event.status === "upcoming" && (
          <>
            <Button
              variant={"outline"}
              className="w-full mt-4 rounded-xl h-12 text-base"
            >
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register for Event
              </a>
            </Button>
            <Button className="w-full mt-4 rounded-xl h-12 text-base">
              <a
                href={event.speakerFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Speaker
              </a>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default EventCard;
