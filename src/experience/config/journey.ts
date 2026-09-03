import type { ChamberDef } from "../types";

/**
 * The journey — Direction §3. Eight chambers of one instrument along a
 * world-space spine (−Z is deeper). Sections flow at natural height; the
 * real scroll bands are MEASURED from the DOM (lib/journey), so `share`
 * only seeds the pre-measure fallback. Each chamber's first cameraPoint
 * is its entry pose; the global spline threads every point in order
 * (see world/spine.ts).
 */

const v = (x: number, y: number, z: number) => ({ x, y, z });

export const CHAMBERS: ChamberDef[] = [
  {
    id: "threshold",
    index: 0,
    title: "The Threshold",
    emotion: "Curiosity",
    share: 7,
    spineZ: 0,
    cameraPoints: [v(0, 1.8, 9), v(0, 1.6, -16)],
    lookPoints: [v(0, 1.5, -14), v(0, 1.3, -44)],
  },
  {
    id: "paradox",
    index: 1,
    title: "The Paradox Gallery",
    emotion: "Insight",
    share: 15,
    spineZ: -60,
    cameraPoints: [v(1.6, 1.8, -40), v(-2.4, 1.9, -66)],
    lookPoints: [v(-1.2, 1.2, -60), v(1.4, 1.1, -85)],
  },
  {
    id: "listening",
    index: 2,
    title: "How It Works",
    emotion: "Wonder",
    share: 15,
    spineZ: -120,
    cameraPoints: [v(2.2, 1.7, -96), v(-1.9, 1.5, -124)],
    lookPoints: [v(-0.5, 1.3, -118), v(0.6, 1.1, -140)],
  },
  {
    id: "composition",
    index: 3,
    title: "The Composition Hall",
    emotion: "Understanding",
    share: 18,
    spineZ: -186,
    cameraPoints: [v(0, 1.4, -155), v(2, 1.6, -180), v(-2, 1.5, -205)],
    lookPoints: [v(0.8, 1.2, -175), v(-0.6, 1.3, -195), v(0.4, 1.2, -220)],
  },
  {
    id: "range",
    index: 4,
    title: "The Range",
    emotion: "Confidence",
    share: 12,
    spineZ: -250,
    cameraPoints: [v(0, 1.8, -230), v(0, 2.1, -250)],
    lookPoints: [v(0, 1.6, -250), v(0, 1.4, -280)],
  },
  {
    id: "observatory",
    index: 5,
    title: "The Observatory",
    emotion: "Trust",
    share: 10,
    spineZ: -320,
    cameraPoints: [v(0, 6.5, -290), v(0, 14, -320)],
    lookPoints: [v(0, 2, -310), v(0, -2.5, -330)],
  },
  {
    id: "invitation",
    index: 6,
    title: "The Invitation",
    emotion: "Desire",
    share: 15,
    spineZ: -380,
    cameraPoints: [v(0, 2.4, -350), v(0, 1.6, -375), v(0, 1.55, -380)],
    lookPoints: [v(0, 1.6, -370), v(0, 1.45, -390), v(0, 1.45, -390)],
  },
];

/**
 * Cumulative progress boundary at the END of each chamber, from shares —
 * ONLY the pre-measure fallback for the journey store's `bands`; the real
 * bands are measured from the DOM by JourneyScroll on every refresh.
 */
export const BOUNDARIES: number[] = (() => {
  const total = CHAMBERS.reduce((s, c) => s + c.share, 0);
  let acc = 0;
  return CHAMBERS.map((c) => (acc += c.share / total));
})();

export const CHAMBER_INDEX_BY_ID = Object.fromEntries(
  CHAMBERS.map((c) => [c.id, c.index]),
) as Record<ChamberDef["id"], number>;

/** the Lens — the one saturated object of the Invitation (Moment 13) */
export const LENS_POSITION = { x: 0, y: 1.5, z: -448 } as const;

/** the Core's center — chamber 3's camera path passes through it (Moment 7) */
export const CORE_POSITION = { x: 0, y: -2, z: -186 } as const;
