export default function LocationMap() {
  return (
    <div className="flex justify-center items-center py-5 bg-gray-50">
      <div className="w-full max-w-7xl ">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Find Us on Map
        </h2>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3573.2176813668475!2d87.266348!3d26.416451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef759f5101b261%3A0xd6c9608ecad72fe7!2sMills%20Secondary%20School!5e0!3m2!1sen!2snp!4v1760709128808!5m2!1sen!2snp"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
