import { ChangeEvent, DragEventHandler, FC, MutableRefObject } from "react";
import { Box } from "../Box";
import { Video } from "../Video";
import { Img } from "../Img";

interface Props {
  label?: string | undefined;
  isRequired?: boolean;
  handleDrag: DragEventHandler<HTMLDivElement>;
  value: string;
  className?: string | undefined;
  inputRef: MutableRefObject<any>;
  isLoading: boolean;
  handleFileChangeWithClick: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: () => void;
  isDragActive: boolean;
  handleDrop: DragEventHandler<HTMLDivElement>;
  filetype?: "image" | "video";
  onChange: (value: string) => void;
}

export const DropzoneForm: FC<Props> = (props) => {
  const {
    label,
    isRequired,
    handleDrag,
    value,
    className,
    inputRef,
    isLoading,
    handleFileChangeWithClick,
    onButtonClick,
    isDragActive,
    handleDrop,
    filetype,
    onChange,
  } = props;

  const renderDropzone = () => {
    if (isLoading) return <p className="text-indigo-600">Uploading file...</p>;

    if (!value)
      return (
        <>
          <p className="text-stone-400 z-10">Drag and drop your file here or</p>
          <Box className="z-10" onClick={onButtonClick}>
            Upload a file
          </Box>
          {isDragActive ? (
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className="bg-red h-full w-full z-50 absolute top-0 left-0"
            ></div>
          ) : undefined}
        </>
      );

    return undefined;
  };

  return (
    <label className="flex flex-col gap w-full max-w-md h-full max-h-[20rem]">
      {label ? (
        <strong className="font-medium">
          {label} {isRequired ? "*" : undefined}
        </strong>
      ) : undefined}
      <div
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(event) => event.preventDefault()}
        className={`w-full flex flex-col items-center gap-4 h-full ${
          value ? "" : "relative"
        }`}
      >
        <div
          className={
            value
              ? "h-0 mt-[-1rem]"
              : `bg-stone-50 border border-dashed border-stone-400 rounded relative w-full flex flex-col items-center justify-center gap-4 p-4 ${
                  className || ""
                }`
          }
        >
          <input
            ref={inputRef}
            type="file"
            id="input-file-upload"
            onChange={handleFileChangeWithClick}
            disabled={Boolean(value)}
            className={"absolute top-0 left-0 w-full h-full invisible"}
          />
          {renderDropzone()}
        </div>
        {value ? (
          <div className="flex flex-col gap-4">
            {filetype === "video" ? (
              <Video
                width={448}
                height={240}
                src={value}
                className="max-h-60"
              />
            ) : (
              <Img
                width={448}
                height={240}
                src={value}
                alt={label || ""}
                className="max-h-60"
              />
            )}
            <button
              className="flex gap-4 font-medium text-indigo-600"
              onClick={() => onChange("")}
            >
              Change
            </button>
          </div>
        ) : undefined}
      </div>
    </label>
  );
};
