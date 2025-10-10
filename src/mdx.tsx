import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Mermaid from "./components/Mermaid";
import { Checklist, CheckItem } from "./components/Checklist";
import GuideProgress from "./components/GuideProgress";

// Optional: eigene Shortcodes/Komponenten in MDX nutzbar machen
const components = {
  Mermaid: (props: any) => <Mermaid {...props} />,
  Checklist: (props: any) => <Checklist {...props} />,
  CheckItem: (props: any) => <CheckItem {...props} />,
  GuideProgress: (props: any) => <GuideProgress {...props} />,
};

export default function MDXRoot({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}




