import React, { useState } from "react";
import "./DIYCorner.css";

const diyGuides = [
    {
        title: "Balcony Compost — No-Smell Cold Compost",
        description: "Easy, apartment-friendly composting method.",
        materials: "Small lidded bin or compost tumbler, drill, dry leaves/cardboard, vegetable & fruit scraps (no meat/dairy), small shovel, spray bottle, starter soil.",
        time: "6–12 weeks",
        difficulty: "Easy",
        steps: [
            "Place bin on a tray or raised stand; drill 6–8 small holes near the top for gas exchange.",
            "Add a 5–8 cm base layer of coarse material (twigs, paper) for drainage.",
            "Start layering: 2–3 cm browns → 1–2 cm greens. Sprinkle a handful of starter soil.",
            "Keep moisture like a wrung-out sponge — mist with spray bottle if dry.",
            "Cover fresh scraps with a brown layer to prevent flies.",
            "Turn the pile every 1–2 weeks (tumbler: rotate).",
            "When material is dark, crumbly and earthy-smelling, it’s ready."
        ],
        troubleshooting: [
            "Smell = too wet → add more browns & turn.",
            "Fruit flies = bury scraps deeper & cover top with cardboard.",
            "Pests = avoid meat/dairy."
        ],
        safety: "Gloves recommended, avoid animal products.",
        outcome: "Rich potting soil for potted plants.",
        tip: "Save finished compost in a sealed container — excellent for houseplants."
    },
    {
        title: "Hot Composting — Fast Backyard Method",
        description: "Faster composting in a backyard or large area.",
        materials: "Large bin or heap (~1m³), thermometer (optional), mix of browns and greens, water, pitchfork.",
        time: "3–8 weeks (active) + curing 2–4 weeks",
        difficulty: "Medium",
        steps: [
            "Build a pile or use an insulated bin (~1m³ for heat retention).",
            "Mix materials for C:N ratio ~25–30:1 (3 parts browns : 1 part greens by volume).",
            "Water to 40–60% moisture.",
            "Monitor temperature — it should rise to 50–65°C within a few days.",
            "Turn the pile every 2–4 days.",
            "When temperature declines and material looks dark and crumbly, cure for 2–4 weeks."
        ],
        troubleshooting: [
            "No heat → add greens & water; mix.",
            "Pile too wet → add dry browns and turn."
        ],
        safety: "Allow pile to cool before heavy handling; keep away from children.",
        outcome: "Fast, pathogen-reduced compost.",
        tip: ""
    },
    {
        title: "Vermicomposting — Worm-Powered Gold",
        description: "Composting with worms for nutrient-rich soil.",
        materials: "Worm bin (plastic/wood), red worms (Eisenia fetida), bedding (shredded paper/cocopeat), kitchen scraps (no oily/very spicy food), spray bottle.",
        time: "Feed daily/weekly; harvest 2–3 months after setup",
        difficulty: "Medium",
        steps: [
            "Prepare bin with drainage holes and tray.",
            "Add damp bedding (~10 cm) and a handful of soil/finished compost.",
            "Introduce worms (start small: 500–1000 worms).",
            "Bury small amounts of food under bedding; feed gradually.",
            "Maintain temperature 15–25°C and moisture like a wrung sponge.",
            "After 8–12 weeks, separate castings by pushing food to one side — worms migrate."
        ],
        troubleshooting: [
            "Worms trying to escape → too acidic, too wet, or too hot/cold. Adjust moisture/temperature/pH.",
            "Bad smell → overfeeding or poor aeration; reduce feed and add dry bedding."
        ],
        safety: "Keep bin covered; wash hands after handling.",
        outcome: "Nutrient-dense worm castings and liquid fertilizer (worm tea).",
        tip: ""
    },
    {
        title: "Citrus Bio-Enzyme Cleaner",
        description: "Kitchen & surface cleaner from citrus peels.",
        materials: "Citrus peels (lemon/orange), jaggery/brown sugar or molasses, water, 1–2L airtight bottle, funnel, strainer, gloves.",
        time: "21–90 days (usable after 21–30 days)",
        difficulty: "Easy",
        steps: [
            "Chop peels into small pieces; fill 1/3 of bottle.",
            "Dissolve sugar in water (ratio 1:1:10 peels:sugar:water).",
            "Pour mixture leaving 15–20% headspace; close cap.",
            "Vent daily first week, then every 2–3 days.",
            "After 3–4 weeks, start straining; many wait 6–8 weeks for stronger enzyme.",
            "Dilute before use."
        ],
        troubleshooting: [
            "White film = normal; black mold = contamination, discard & restart.",
            "Very strong unpleasant smell = overfermentation; dilute or discard."
        ],
        safety: "Keep away from children/pets; label bottle; do not ingest.",
        outcome: "Multipurpose eco-cleaner with citrus fragrance.",
        tip: "Mix peel types for varied scent; store in cool, dark place."
    },
    {
        title: "Leaf Mulch — Water-Saving Ground Cover",
        description: "Mulch to reduce water usage and improve soil.",
        materials: "Dry leaves, rake/shredder (optional), gloves.",
        time: "15–30 minutes to spread; ongoing benefits",
        difficulty: "Very Easy",
        steps: [
            "Collect dry leaves and shred.",
            "Spread 3–5 cm around plant bases, keeping mulch 2–3 cm away from stem.",
            "Replenish every 2–3 months or as it settles."
        ],
        troubleshooting: [
            "Layer too thick → reduces airflow.",
            "Wet/compacting → mix with twigs or coarse material."
        ],
        safety: "Avoid placing mulch against building foundations.",
        outcome: "Reduced watering, cooler roots, fewer weeds.",
        tip: ""
    },
    {
        title: "Simple Briquettes from Agricultural/Wood Waste",
        description: "Small-scale fuel briquettes from agri or wood waste.",
        materials: "Dry sawdust/agri residue, binder (starch/clay), water, mold, drying rack/sun.",
        time: "Prep 1–2 days + drying 3–7 days",
        difficulty: "Medium",
        steps: [
            "Dry feedstock (<15% moisture) and grind to powder.",
            "Mix binder 5–10% with feedstock, add water to form paste.",
            "Pack into mold, compress, sun-dry until hard.",
            "Cure 2–3 days indoors to avoid moisture pickup."
        ],
        troubleshooting: [
            "Cracking = too wet or dried too fast.",
            "Poor burning = too much binder or high moisture."
        ],
        safety: "Dry & press in ventilated, non-flammable area.",
        outcome: "Inexpensive fuel briquettes.",
        tip: "Use cottage-scale/community setups for safety."
    },
    {
        title: "Incense Sticks from Floral Waste",
        description: "Make aromatic sticks from flowers.",
        materials: "Dried flower petals, fine sawdust, natural binder, bamboo sticks, tray, drying rack.",
        time: "Prep 1–2 days + drying 24–48 hours",
        difficulty: "Medium",
        steps: [
            "Dry flowers, grind into powder.",
            "Mix powder with sawdust (2:1) and binder to form dough.",
            "Apply paste to bamboo sticks evenly.",
            "Dry horizontally in shade 24–48 hrs until firm."
        ],
        troubleshooting: [
            "Paste too wet = sagging, add more sawdust.",
            "Weak scent = increase flower proportion or add essential oil."
        ],
        safety: "Dry in shaded, ventilated area; test one stick first.",
        outcome: "Aromatic incense from locally sourced floral waste.",
        tip: ""
    },
    {
        title: "Coconut Shell Planters / Hanging Cups",
        description: "Upcycle coconut shells into planters.",
        materials: "Coconut halves, drill, sandpaper, potting soil, small plants, rope (optional).",
        time: "30–60 minutes prep + planting",
        difficulty: "Easy",
        steps: [
            "Clean and dry coconut halves; sand rough edges.",
            "Drill 2–3 small drainage holes.",
            "Fill with potting mix and plant succulents/herbs.",
            "Optionally drill rim holes for hanging."
        ],
        troubleshooting: [
            "Rot risk → ensure drainage; use drought-tolerant plants.",
            "Shell odor → wash and sun-dry."
        ],
        safety: "Wear goggles when drilling; use coarse sandpaper.",
        outcome: "Decorative, biodegradable small plant planters.",
        tip: ""
    }
];

const DIYCorner = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // toggle
  };

  return (
    <section className="diy-corner">
      <h2>DIY Corner</h2>
      <p>Step-by-step guides to transform waste into something useful.</p>

      <div className="diy-list grid">
        {diyGuides.map((guide, index) => (
          <div key={index} className="diy-card">
            <div className="diy-header">
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <button onClick={() => handleClick(index)}>
                {activeIndex === index ? "Hide Steps" : "View Steps"}
              </button>
            </div>

            {/* Show card details only if this card is active */}
            {activeIndex === index && (
              <div className="diy-details">
                <p><strong>Materials:</strong> {guide.materials}</p>
                <p><strong>Time:</strong> {guide.time} | <strong>Difficulty:</strong> {guide.difficulty}</p>

                <p><strong>Steps:</strong></p>
                <ul>
                  {guide.steps.map((step, i) => <li key={i}>{step}</li>)}
                </ul>

                {guide.troubleshooting && guide.troubleshooting.length > 0 && (
                  <>
                    <p><strong>Troubleshooting:</strong></p>
                    <ul>
                      {guide.troubleshooting.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </>
                )}

                <p><strong>Safety:</strong> {guide.safety}</p>
                <p><strong>Outcome:</strong> {guide.outcome}</p>
                {guide.tip && <p><strong>Tip:</strong> {guide.tip}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DIYCorner;