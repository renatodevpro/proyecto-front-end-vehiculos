declare module "@splidejs/react-splide" {
  import type { Options, Splide as SplideCore } from "@splidejs/splide"
  import type { ComponentType, HTMLAttributes } from "react"

  export type SplideProps = HTMLAttributes<HTMLDivElement> & {
    options?: Options
    hasTrack?: boolean
    tag?: "div" | "section" | "header" | "footer" | "nav"
  }

  export const Splide: ComponentType<SplideProps>
  export const SplideSlide: ComponentType<HTMLAttributes<HTMLLIElement>>
  export { Options, SplideCore }
}

declare module "@splidejs/react-splide/css"
