import React, { useState } from "react";
import style from "../styles/Home.module.css"; // Adjust the import path as necessary

const GitHubWarningLink = ({
  githubUrl,
  children,
}: {
  githubUrl: string;
  children: React.ReactNode;
}) => {
  const [showWarning, setShowWarning] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWarning(true);
  };

  const handleGoToGitHub = () => {
    window.open(githubUrl, "_blank", "noopener,noreferrer");
    setShowWarning(false);
  };

  return (
    <>
      <a
        href={githubUrl}
        onClick={handleLinkClick}
        className="block hover:text-slate-200"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
      {showWarning && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998] bg-black/50"
            onClick={() => setShowWarning(false)}
            aria-hidden="true"
          />
          {/* Modal */}
          <div className="fixed z-[9999] left-1/2 top-10 -translate-x-1/2 w-full max-w-md bg-slate-900 border border-yellow-400 rounded shadow-lg p-6 text-sm text-slate-200">
            <div className="flex items-start">
              <span className="mr-2 text-yellow-400 text-lg">⚠️</span>
              <div>
                <strong>Note on GitHub Activity:</strong>
                <p className="mt-1">
                  Most of my professional work has been done under private or
                  organization-owned repositories, which are not reflected in my
                  personal GitHub profile due to NDAs and company policies.
                  However, I’ve contributed to large-scale enterprise and B2B
                  applications used by thousands to millions of users. Please feel
                  free to reach out if you’d like to hear more about these
                  projects or discuss my technical experience in detail.
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    className="px-3 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
                    onClick={handleGoToGitHub}
                  >
                    Go to GitHub
                  </button>
                  <button
                    className="px-3 py-1 bg-slate-700 text-slate-200 rounded hover:bg-slate-600 transition"
                    onClick={() => setShowWarning(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GitHubWarningLink;