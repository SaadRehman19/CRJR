const ReadyToScaleCTA = () => {
  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6">
          Ready to Scale?
        </h2>

        {/* Description */}
        <p className="text-lg lg:text-xl text-[#475569] mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you're looking for strategic advisory, partnership opportunities, 
          or want to discuss an acquisition, I'm always open to the right conversation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button - Let's Build Your Growth Plan */}
          <a
            href="/work-with-me"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: 'linear-gradient(264deg, rgba(27, 157, 217, 1) 0%, rgba(6, 52, 130, 1) 97%)',
            }}
          >
            {/* Arrow/Calendar Icon */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Let's Build Your Growth Planss
          </a>

          {/* Secondary Button - Connect on LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jasoncrjr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#E2E8F0] bg-white text-[#334155] font-semibold text-base transition-all hover:bg-gray-50 hover:border-gray-300"
            style={{
              boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
            }}
          >
            {/* LinkedIn Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToScaleCTA;

