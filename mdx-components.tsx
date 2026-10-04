import type { MDXComponents } from "mdx/types";
import Callout from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { Callout, pre: CodeBlock, ...components };
}