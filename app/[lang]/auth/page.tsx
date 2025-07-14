"use client";

import { Box, Card } from "@/equix/components/Box";
import { Col } from "@/equix/components/Flex";
import { Input } from "@/equix/components/Input";
import { LandingLayout } from "@/equix/Landing/LandingLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleSendEmail = async () => {
    setIsLoading(true);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setIsLoading(false);
      setIsEmailSent(true);
    }
  };

  const handleSendCode = async () => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });

    const userId = await res.json();

    localStorage.setItem("userId", userId);

    router.push("/profile");
  };

  return (
    <LandingLayout className="justify-center">
      <Col className="w-full h-full justify-center items-center">
        {isLoading ? "Загрузка..." : <Card className="max-w-80">
          {isEmailSent ? (
            <>
              <Input
                label={`Введите шестизначный код, отправленный на почту ${email}`}
                type="text"
                value={code}
                onChange={setCode}
              />
              {code.length === 6 ? (
                <Box onClick={handleSendCode}>Продолжить</Box>
              ) : null}
            </>
          ) : (
            <>
              <Input
                label="Чтобы зарегистрироваться или войти, введите электронную почту"
                type="email"
                value={email}
                onChange={setEmail}
              />
              {/^[\w.-]+@(?:[\w-]+\.)+[\w-]{2,4}$/u.test(email) ? (
                <Box onClick={handleSendEmail}>Продолжить</Box>
              ) : null}
            </>
          )}
        </Card>}
      </Col>
    </LandingLayout>
  );
};

export default Page;
