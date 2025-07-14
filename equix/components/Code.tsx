import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export const Code: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => {
  const { children } = props;

  return (
    <code className="w-full whitespace-pre-wrap p bg-black text-white rounded h-full">
      {children}
    </code>
  );
};
