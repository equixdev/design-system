"use client";

import { FC, useState } from "react";
import { VALID_PHONE_NUMBER_LENGTH } from "../consts";
import { Box } from "./Box";
import { Input } from "./Input";

interface Props {
  codeLength: number;
  postPhoneNumber: (phoneNumber: string) => Promise<Response>;
  postConfirmationCode: (code: string) => Promise<Response>;
  handleSuccessfulConfirmation: () => void;
}

export const SmsAuthForm: FC<Props> = (props) => {
  const {
    codeLength,
    postPhoneNumber,
    postConfirmationCode,
    handleSuccessfulConfirmation,
  } = props;
  const [phone, setPhone] = useState("");
  const [isSmsSent, setIsSmsSent] = useState(false);
  const [code, setCode] = useState("");

  const handleGetCode = async () => {
    const res = await postPhoneNumber(phone);

    if (res.ok) setIsSmsSent(true);
  };

  const handlePhoneChange = (value: string) => setPhone(value.slice(1));

  const handleConfirmNumber = async () => {
    const res = await postConfirmationCode(code);

    if (res.ok) {
      const json = await res.json();

      if (json.data.accessToken && json.data.refreshToken) {
        localStorage.setItem("accessToken", json.data.accessToken);
        localStorage.setItem("refreshToken", json.data.refreshToken);
        handleSuccessfulConfirmation();
      }
    }
  };

  return (
    <div className="flex flex-col gap">
      {isSmsSent ? (
        <>
          <Input type="text" label="SMS code" value={code} onChange={setCode} />
          {code.length === codeLength ? (
            <Box
              className="text-white bg-black flex justify-center"
              onClick={handleConfirmNumber}
            >
              Confirm phone number
            </Box>
          ) : undefined}
        </>
      ) : (
        <>
          <Input
            type="tel"
            label="Phone number"
            value={`+${phone}`}
            onChange={handlePhoneChange}
          />
          {phone.length > VALID_PHONE_NUMBER_LENGTH ? (
            <Box
              className="text-white bg-black flex justify-center"
              onClick={handleGetCode}
            >
              Get code via SMS
            </Box>
          ) : undefined}
        </>
      )}
    </div>
  );
};
