interface HeroBackgroundProps {
  children: React.ReactNode;
}
// HeroBackground.js
const HeroBackground: React.FC<HeroBackgroundProps> = ({ children }) => {
  return (
    <div className="relative text-white">
      {/* Background image and overlay */}
      <img src="/assets/hero-bg.png" className="w-full h-screen object-cover" />
      <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-30">
        {children}
      </div>
    </div>
  );
};

const HeroContent = () => {
  return (
    <div className="absolute top-1/3 w-full text-center">
      <h1 className="text-6xl font-bold">Explore, Dream, Travel</h1>
    </div>
  );
};

const HeroSection = () => {
  return (
    <HeroBackground>
      <HeroContent />
    </HeroBackground>
  );
};

export default HeroSection;
