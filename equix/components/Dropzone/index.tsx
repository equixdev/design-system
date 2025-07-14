import { ChangeEvent, DragEventHandler, FC, useRef, useState } from "react";
import { DropzoneForm } from "./Dropzone";

interface Props {
  label?: string;
  isRequired?: boolean;
  value: string;
  onChange: (value: string) => void;
  filetype?: "image" | "video";
  className?: string;
  url: string;
}

export const Dropzone: FC<Props> = (props) => {
  const {
    label,
    isRequired = false,
    value,
    filetype = "image",
    className,
    onChange,
    url,
  } = props;

  const [isDragActive, setIsDragActive] = useState(false);
  const inputReference = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFile = async (file: File) => {
    setIsLoading(true);

    const data = new FormData();

    data.append("file", file);

    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    const json = await res.json();

    onChange(json.url);
    setIsLoading(false);
  };

  const handleDrag: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === "dragenter" || event.type === "dragover") {
      setIsDragActive(true);
    }

    if (event.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragActive(false);

    if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
      handleFile(event.dataTransfer.files[0]);
    }
  };

  const handleFileChangeWithClick = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.target.files && event.target.files[0]) {
      handleFile(event.target.files[0]);
    }
  };

  const onButtonClick = () => {
    if (inputReference.current) inputReference.current.click();
  };

  return (
    <DropzoneForm
      label={label}
      isRequired={isRequired}
      handleDrag={handleDrag}
      value={value}
      className={className}
      inputRef={inputReference}
      isLoading={isLoading}
      handleFileChangeWithClick={handleFileChangeWithClick}
      onButtonClick={onButtonClick}
      isDragActive={isDragActive}
      handleDrop={handleDrop}
      filetype={filetype}
      onChange={onChange}
    />
  );
};
