import * as React from 'react';

interface IconSvgProps {
  width: number;
  height: number;
  onClick?:  () => void
}
export const FlagIconSvg: React.FC<IconSvgProps> = (props: IconSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
  >
    <path
      fill="#242424"
      d="M4.687 11.25v-7.5h10.035l-2.419 3.387a.625.625 0 0 0 0 .726l2.42 3.387H4.687Zm0 1.25h11.25a.625.625 0 0 0 .509-.988L13.58 7.5l2.866-4.012a.625.625 0 0 0-.509-.988H4.062a.625.625 0 0 0-.625.625v13.75a.625.625 0 1 0 1.25 0V12.5Z"
    />
  </svg>
);