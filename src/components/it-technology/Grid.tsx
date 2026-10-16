import type { ReactNode } from "react";

export const joinClasses = (
  ...items: Array<string | false | null | undefined>
): string => items.filter(Boolean).join(" ");

type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

type RowProps = {
  className?: string;
  children: ReactNode;
};

type ColProps = {
  xs?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  className?: string;
  children: ReactNode;
};

export const Container = ({ className, children }: ContainerProps) => (
  <div className={joinClasses("container", className)}>
    {children}
  </div>
);

export const Row = ({ className, children }: RowProps) => (
  <div className={joinClasses("web-app-development-row", className)}>
    {children}
  </div>
);

export const Col = ({ xs, sm, md, lg, xl, className, children }: ColProps) => {
  const breakpointList: Array<[string, ColumnSize | undefined]> = [
    ["xs", xs],
    ["sm", sm],
    ["md", md],
    ["lg", lg],
    ["xl", xl],
  ];

  const sizeClassList = breakpointList
    .filter(([, size]) => size)
    .map(([breakpoint, size]) => `web-app-development-col-${breakpoint}-${size}`);

  return (
    <div
      className={joinClasses("web-app-development-col", ...sizeClassList, className)}
    >
      {children}
    </div>
  );
};
