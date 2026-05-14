"use client";

export function MockPdfLink({ label = "Download PDF (mock)" }: { label?: string }) {
  return (
    <button
      type="button"
      className="mt-3 text-xs font-semibold text-[var(--tcmf-primary)]"
      onClick={() => alert("Receipt PDFs will be streamed from Django when the backend is ready.")}
    >
      {label}
    </button>
  );
}
