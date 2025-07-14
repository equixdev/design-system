import { FC } from "react";

interface Props {
  height: number;
  width: number;
  src: string;
  className?: string;
}

export const Video: FC<Props> = (props) => {
  const { className, src } = props;
  return (
    <video {...props} className={`rounded ${className || ""}`} controls>
      <source src={src} type="video/mp4" />
    </video>
  );
};
