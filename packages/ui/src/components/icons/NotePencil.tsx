import * as React from 'react';

export const NotePencil = ({
  height = '1em',
  fill = 'currentColor',
  focusable = 'false',
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'children'>) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      d="m229.66 58.34l-32-32a8 8 0 0 0-11.32 0l-96 96A8 8 0 0 0 88 128v32a8 8 0 0 0 8 8h32a8 8 0 0 0 5.66-2.34l96-96a8 8 0 0 0 0-11.32M124.69 152H104v-20.69l64-64L188.69 88ZM200 76.69L179.31 56L192 43.31L212.69 64ZM224 120v88a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h88a8 8 0 0 1 0 16H48v160h160v-88a8 8 0 0 1 16 0"
    />
  </svg>
);
