import { featuresData } from "@/app/_lib/data";
import React from "react";

import Feature from "./Feature";

export default function FeaturesSection() {
  return (
    <section>
      {featuresData.map((feature, index) => (
        <React.Fragment key={index}>
          <Feature feature={feature} index={index} />
        </React.Fragment>
      ))}
    </section>
  );
}
