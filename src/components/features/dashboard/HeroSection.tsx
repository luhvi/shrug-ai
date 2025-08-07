import DarkVeil from "@/components/ui/DarkVeil";
import TextType from "@/components/ui/TextType";

const HeroSection = () => {
  return (
    <main className="relative h-150 w-full">
      <DarkVeil speed={1} />
      <div className="absolute top-90 flex flex-col items-start justify-center pl-18">
        <h1 className="mb-4 text-4xl font-semibold text-[oklch(0.95_0_0)] sm:text-5xl md:text-6xl">
          The AI Training App
        </h1>
        <TextType
          text={[
            "The smartest training app ever built",
            "Designed to take your training to the next level",
          ]}
          className="mb-8 text-lg"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
        <button className="cursor-pointer rounded-full px-8 py-4 text-lg font-medium text-[oklch(0.95_0_0)] ring-1 ring-white/60 transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:ring-indigo-400">
          Try For Free
        </button>
      </div>
    </main>
  );
};

export default HeroSection;
