import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import heroVideo from '../assets/videos/hero-background.mp4';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            <div className="mb-2">
              {t('hero.line1')}{" "}
              <span className="px-1 glow-future">
                {t('hero.line1.highlight')}
              </span>
            </div>
            <div className="mb-2">
              {t('hero.line2')}{" "}
              <span className="px-1 glow-present">
                {t('hero.line2.highlight')}
              </span>
            </div>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
            {t('hero.line3')}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="bg-school-blue hover:bg-school-blue-dark text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
