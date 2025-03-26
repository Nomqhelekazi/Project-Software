export default function GoogleMap() {
  return (
    <div className="h-[300px] w-full rounded-lg overflow-hidden border border-gray-200 shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155925.7226136187!2d4.763878535490342!3d52.35426657948738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1711404245123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

