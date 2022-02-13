import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    // type anything to override style components
    locals?: Record<string, unknown>
  }
}
