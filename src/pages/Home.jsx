import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard.jsx";
import SocialLinks from "../components/SocialLinks.jsx";

const Home = () => {
  return (
    <main className="home">
      <div className="ambient ambient--one" />
      <div className="ambient ambient--two" />
      <GlassCard className="home__card">
        <p className="eyebrow">Photography Portfolio</p>
        <h1>Anupa CJ</h1>
        <p className="lead">
          Portrait &amp; nature photographer based in Sri Lanka. Focused on clean
          light, depth, and natural tones.
        </p>
        <SocialLinks />
        <Link className="button" to="/photos">
          View Photos
        </Link>
      </GlassCard>
    </main>
  );
};

export default Home;
