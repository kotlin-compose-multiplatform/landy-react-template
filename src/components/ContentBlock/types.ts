import { TFunction } from "react-i18next";
import {ReactNode} from "react";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  actions?: ReactNode;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
