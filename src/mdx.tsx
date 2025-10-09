import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Mermaid from "./components/Mermaid";

// Optional: eigene Shortcodes/Komponenten in MDX nutzbar machen
const components = {
  Mermaid: (props: any) => <Mermaid {...props} />,
};

export default function MDXRoot({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

