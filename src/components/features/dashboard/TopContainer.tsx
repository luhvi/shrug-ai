import SpotlightCard from "@/components/ui/SpotlightCard";
import Aurora from "@/components/ui/Aurora";
import TextType from "@/components/ui/TextType";

const TopContainer = () => {
  return (
    <div className="relative h-150 w-full">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      <div className="absolute top-80 mx-20">
        <h1 className="mb-4 text-4xl font-medium drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] sm:text-5xl md:text-6xl">
          The AI Training App
        </h1>
        <TextType
          text={["All your training needs,", "one intelligent app"]}
          className="text-md sm:text-lg"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(58, 41, 255, 0.75)"
        >
          Start For Free
        </SpotlightCard>
      </div>
    </div>
  );
};

export default TopContainer;
