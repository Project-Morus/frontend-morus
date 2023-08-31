import { ComponentType, JSX } from 'react';
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ComponentPropsType<T> = T & JSX.IntrinsicAttributes

export function withTheme<T>(WrapperComponent: ComponentType<ComponentPropsType<T>>) {
  return (props: ComponentPropsType<T>) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <WrapperComponent {...props} />
      </ThemeProvider>
    );
  };
}

