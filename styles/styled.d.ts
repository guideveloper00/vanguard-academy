import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
    };
  }
}
