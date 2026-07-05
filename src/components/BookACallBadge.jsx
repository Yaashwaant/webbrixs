export default function BookACallBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-auto flex flex-col gap-3 items-end">
      {/* WhatsApp Enquiry Button */}
      <a
        href="https://wa.me/918793334476"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-3 md:p-4 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="WhatsApp Enquiry"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.428 1.978 13.96 1.94 11.977 1.94c-5.438 0-9.866 4.372-9.87 9.802 0 1.63.454 3.224 1.316 4.634L2.396 21.1l4.25-1.114zM16.518 14.99c-.27-.135-1.597-.788-1.845-.878-.248-.09-.43-.135-.61.135-.18.27-.7.878-.856 1.058-.156.18-.312.202-.582.067-.27-.135-1.14-.42-2.172-1.34-1.03-1.164-1.729-2.015-1.83-2.185-.1-.17-.01-.26.075-.345.077-.077.172-.202.258-.304.086-.102.115-.17.172-.34.057-.17.029-.317-.014-.407-.043-.09-.43-1.037-.589-1.424-.156-.379-.311-.327-.43-.327h-.368c-.13-.002-.343.047-.523.245-.18.198-.688.673-.688 1.64 0 .968.704 1.905.803 2.04.1.135 1.385 2.115 3.355 2.967.469.203.835.324 1.12.415.47.15.898.129 1.237.078.378-.057 1.596-.653 1.821-1.282.225-.63.225-1.17.157-1.283-.068-.113-.248-.203-.518-.338z"/>
        </svg>
      </a>

      {/* Book a Call Button */}
      <a
        href="https://calendly.com/hello-webbrixs/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:bg-black/90 border border-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 font-semibold text-xs md:text-sm"
      >
        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
        <span>Book a Call</span>
      </a>
    </div>
  );
}
