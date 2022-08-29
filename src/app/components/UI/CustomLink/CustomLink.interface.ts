import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export interface ICustomLinkinterface extends PropsWithChildren {
  to: string;
  className?: string;
}
