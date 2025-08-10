import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Category =
  | "All"
  | "Roofing"
  | "Masonry"
  | "Concrete"
  | "Steps"
  | "Brick Pointing"
  | "Pavers & Bluestone";

type WorkItem = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  image: string;        // thumbnail / cover
  images?: string[];    // optional extra images for the lightbox
  blurb?: string;
};

const CATEGORIES: Category[] = [
  "All",
  "Roofing",
  "Masonry",
  "Concrete",
  "Steps",
  "Brick Pointing",
  "Pavers & Bluestone",
];

// TODO: Replace image paths with your own under /public/assets/work/...
const WORK: WorkItem[] = [
  {
    id: "w1",
    title: "Flat Roof Restoration – Brooklyn",
    category: "Roofing",
    image: "/assets/hero.jpg",
    images: ["/assets/hero.jpg", "/assets/bg.jpg"],
    blurb: "Membrane repair, flashing upgrade, and proper drainage.",
  },
  {
    id: "w2",
    title: "Brownstone Facade Repointing",
    category: "Masonry",
    image: "/assets/bg.jpg",
    images: ["/assets/bg.jpg", "/assets/hero.jpg"],
    blurb: "Historic brick pointing using color-matched mortar.",
  },
  {
    id: "w3",
    title: "Sidewalk Pour & Finish",
    category: "Concrete",
    image: "/assets/hero.jpg",
    blurb: "DOT-compliant sidewalk panels with smooth finish.",
  },
  {
    id: "w4",
    title: "Bluestone Walkway",
    category: "Pavers & Bluestone",
    image: "/assets/bg.jpg",
    blurb: "Natural bluestone path with tight, even joints.",
  },
  {
    id: "w5",
    title: "Stoop Rebuild",
    category: "Steps",
    image: "/assets/hero.jpg",
    blurb: "Formwork, risers/treads corrected, handrail anchors set.",
  },
  {
    id: "w6",
    title: "Lintel & Sill Repair",
    category: "Masonry",
    image: "/assets/bg.jpg",
    blurb: "Steel lintel treatment and stone sill patching.",
  },
];

const OurWork: React.FC = () => {
  const [active, setActive] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (active === "All") return WORK;
    return WORK.filter((w) => w.category === active);
  }, [active]);

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentList, setCurrentList] = useState<WorkItem[]>([]);

  const openLightbox = useCallback(
    (index: number, list: WorkItem[]) => {
      setCurrentList(list);
      setCurrentIndex(index);
      setIsOpen(true);
      document.body.style.overflow = "hidden"; // prevent background scroll
    },
    []
  );

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + currentList.length) % currentList.length);
  }, [currentList.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % currentList.length);
  }, [currentList.length]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeLightbox, goPrev, goNext]);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Banner */}
      <section
        className="relative h-[40vh] md:h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
            Our Work
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base opacity-90">
            A selection of recent projects across roofing, masonry, concrete, steps, brick pointing, and pavers.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full border transition
                  ${active === cat
                    ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <WorkCard
              key={item.id}
              item={item}
              onClick={() => openLightbox(idx, filtered)}
            />
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {isOpen && currentList[currentIndex] && (
        <Lightbox
          item={currentList[currentIndex]}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </main>
  );
};

const WorkCard: React.FC<{ item: WorkItem; onClick: () => void }> = ({ item, onClick }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg shadow
        transition-all duration-700 transform
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <button onClick={onClick} className="block w-full h-full text-left">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <div className="inline-block bg-white/90 dark:bg-gray-900/90 rounded px-3 py-2">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              {item.title}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300">{item.category}</p>
          </div>
        </div>
      </button>
    </div>
  );
};

const Lightbox: React.FC<{
  item: WorkItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ item, onClose, onPrev, onNext }) => {
  const [idx, setIdx] = useState(0);
  const imgs = item.images && item.images.length ? item.images : [item.image];

  useEffect(() => setIdx(0), [item.id]);

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1"
      >
        ✕
      </button>

      {/* Prev/Next */}
      {imgs.length > 1 && (
        <>
          <button
            onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
            className="absolute left-4 md:left-8 text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-2"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % imgs.length)}
            className="absolute right-4 md:right-8 text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-2"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      <div className="max-w-5xl w-full">
        <img
          src={imgs[idx]}
          alt={item.title}
          className="w-full max-h-[70vh] object-contain rounded"
        />
        <div className="mt-4 bg-white/90 dark:bg-gray-900/90 rounded p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{item.blurb ?? item.category}</p>
          {imgs.length > 1 && (
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              {idx + 1} / {imgs.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
