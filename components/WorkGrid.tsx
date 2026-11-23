"use client";

// Este es el único componente que corre en el navegador ("use client"),
// porque tiene estado: el filtro seleccionado. Todo lo demás se genera en el servidor.

import Image from "next/image";
import { useState } from "react";
import type { Category, Work } from "@/data/content";

type Filter = "todo" | Category;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "periodismo", label: "Periodismo" },
  { id: "audiovisual", label: "Audiovisual" },
];

export default function WorkGrid({ works }: { works: Work[] }) {
  const [filter, setFilter] = useState<Filter>("todo");
  const visible = filter === "todo" ? works : works.filter((w) => w.category === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar trabajos">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className="filter"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="work-grid">
        {visible.map((w) => (
          <a key={w.num} href={w.url} target="_blank" rel="noopener noreferrer" className="card">
            <div className="card-media">
              <Image
                src={w.image}
                alt={w.imageAlt}
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
                className="card-img"
                style={{ objectPosition: w.imagePosition ?? "50% 50%" }}
              />
              <div className="card-shade" />
              <div className="card-overlay">
                <div className="card-top">
                  <span>{w.kind}</span>
                  <span>{w.medium}</span>
                </div>
                <div className="card-bottom">
                  <span className="card-num">{w.num}</span>
                  <span className="dot" aria-hidden="true" />
                </div>
              </div>
            </div>
            <div className="card-body">
              <span className="meta">
                {w.date} · {w.role}
              </span>
              <h3>{w.title}</h3>
              <p>{w.description}</p>
              <span className="cta">
                {w.cta} <span className="arrow" aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
