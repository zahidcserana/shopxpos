export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/8801970887754"
      target="_blank"
      className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.15-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52z"/>
      </svg>
    </a>
  );
}
