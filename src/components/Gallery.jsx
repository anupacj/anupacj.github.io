import { useMemo, useState } from "react";
import Lightbox from "./Lightbox.jsx";
import dawnMist from "../assets/images/dawn-mist.svg";
import blueLagoon from "../assets/images/blue-lagoon.svg";
import emeraldForest from "../assets/images/emerald-forest.svg";
import nocturneSky from "../assets/images/nocturne-sky.svg";
import silverRain from "../assets/images/silver-rain.svg";
import amberSands from "../assets/images/amber-sands.svg";
import sageTide from "../assets/images/sage-tide.svg";
import lunarGlass from "../assets/images/lunar-glass.svg";
import velvetOrchid from "../assets/images/velvet-orchid.svg";
import quietHarbor from "../assets/images/quiet-harbor.svg";

const galleryItems = [
  {
    id: "dawn-mist",
    title: "Dawn Mist",
    caption: "Soft light breaks across the hillside in a quiet exhale.",
    category: "Nature",
    src: dawnMist,
  },
  {
    id: "blue-lagoon",
    title: "Blue Lagoon",
    caption: "Calm currents and cinematic tones along the coast.",
    category: "Nature",
    src: blueLagoon,
  },
  {
    id: "emerald-forest",
    title: "Emerald Forest",
    caption: "Layered greens and distant mist keep the scene hushed.",
    category: "Nature",
    src: emeraldForest,
  },
  {
    id: "nocturne-sky",
    title: "Nocturne Sky",
    caption: "Midnight tones and violet haze for a slow city night.",
    category: "Street",
    src: nocturneSky,
  },
  {
    id: "silver-rain",
    title: "Silver Rain",
    caption: "Reflections blur the line between portrait and atmosphere.",
    category: "Portraits",
    src: silverRain,
  },
  {
    id: "amber-sands",
    title: "Amber Sands",
    caption: "Warm gradients and clean silhouettes against the wind.",
    category: "Nature",
    src: amberSands,
  },
  {
    id: "sage-tide",
    title: "Sage Tide",
    caption: "A minimal horizon with soft cyan undertones.",
    category: "Nature",
    src: sageTide,
  },
  {
    id: "lunar-glass",
    title: "Lunar Glass",
    caption: "Quiet portraits lit by moonlight and glass reflections.",
    category: "Portraits",
    src: lunarGlass,
  },
  {
    id: "velvet-orchid",
    title: "Velvet Orchid",
    caption: "Portrait study with plum highlights and deep shadows.",
    category: "Portraits",
    src: velvetOrchid,
  },
  {
    id: "quiet-harbor",
    title: "Quiet Harbor",
    caption: "A serene street scene framed in icy blue tones.",
    category: "Street",
    src: quietHarbor,
  },
];

const categories = ["All", "Portraits", "Nature", "Street"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="gallery">
      <div className="gallery__filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery__grid">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="gallery__item"
            style={{ animationDelay: `${index * 80}ms` }}
            onClick={() => setActiveImage(item)}
          >
            <img src={item.src} alt={item.title} loading="lazy" />
            <div className="gallery__overlay">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
};

export default Gallery;
