import { ChecklistClient } from "@/components/cpns/checklist-client";
import { SectionHeading } from "@/components/cpns/shared";

export const metadata = { title: "Checklist Administrasi — Belajar CPNS" };

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Persiapan pendaftaran"
        title="Checklist Administrasi CPNS"
        desc="Centang dokumen yang sudah kamu siapkan. Progres tersimpan otomatis di perangkat ini — kembali kapan pun tanpa kehilangan centangan."
      />
      <div className="mt-10">
        <ChecklistClient />
      </div>
    </div>
  );
}
