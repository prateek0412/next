import { useStore } from "@/store/store";
import Image from "next/image";

import { Locale } from "../../i18n.config";
import { getDictionary } from "./lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: any };
}) {
  const task = useStore((state) => state.tasks);
  const { page } = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Root Page
    </main>
  );
}
