import Image, { StaticImageData } from "next/image";
import React from "react";

export default function DownloadLinks({
  appStore,
  googlePlay,
}: {
  appStore: StaticImageData;
  googlePlay: StaticImageData;
}) {
  return (
    <>
      <div className="flex items-center gap-3">
        <a
          href="https://apps.apple.com/app/id6443902847"
          target="_blank"
          aria-label="App Store"
        >
          <Image
            src={appStore}
            className="object-cover"
            width={130}
            height={130}
            alt="icon"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=sa.salla.mahly&amp;pli=1"
          target="_blank"
          aria-label="Play Store"
        >
          <Image
            className="text-white object-cover"
            src={googlePlay}
            width={130}
            height={130}
            alt="icon"
          />
        </a>
      </div>
    </>
  );
}
