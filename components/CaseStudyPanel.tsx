import React, { useState } from "react";

type CaseStudy = {
  problem: string;
  role: string;
  tech: string;
  impact: string;
  image?: string;
};

const CaseStudyPanel = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        className="text-teal-400 font-medium flex items-center focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>Case Study</span>
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="mt-4 space-y-4 bg-slate-900/70 rounded p-4 border border-slate-700">
          <div>
            <h4 className="font-semibold text-slate-200">Problem &amp; Context</h4>
            <p className="text-slate-300">{caseStudy.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200">Your Role</h4>
            <p className="text-slate-300">{caseStudy.role}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200">Tech Stack</h4>
            <p className="text-slate-300">{caseStudy.tech}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200">Impact</h4>
            <p className="text-slate-300">{caseStudy.impact}</p>
          </div>
          {caseStudy.image && (
            <div>
              <h4 className="font-semibold text-slate-200">Screenshot / Wireframe</h4>
              <img
                src={caseStudy.image}
                alt="Case study visual"
                className="rounded border border-slate-700 max-w-full h-48 object-cover bg-slate-900 mt-2"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CaseStudyPanel;