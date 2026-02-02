import GlassCard from "../components/GlassCard.jsx";
import Gallery from "../components/Gallery.jsx";

const Photos = () => {
  return (
    <main className="photos">
      <GlassCard className="photos__intro">
        <p className="eyebrow">Selected Works</p>
        <h2>Quiet frames. Cinematic light.</h2>
        <p className="lead">
          A curated gallery of portraits, nature, and street moments. Tap any
          frame to view full scale.
        </p>
      </GlassCard>
      <Gallery />
    </main>
  );
};

export default Photos;
