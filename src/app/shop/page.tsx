"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ShopPageContent = dynamic(() => import("../components/ShopPageContent"), {
  ssr: false,
});

export default function ShopPageWrapper() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-gray-400">Loading...</div>}>
      <ShopPageContent />
    </Suspense>
  );
}
