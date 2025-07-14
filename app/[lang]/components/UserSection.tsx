import { Box, Card } from "@/equix/components/Box";
import { Col, Row } from "@/equix/components/Flex";
import { Input } from "@/equix/components/Input";
import Image from "next/image";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  user: any;
}

export const UserSection: FC<Props> = (props) => {
  const { user } = props;

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [role, setRole] = useState(user.role || "");

  const router = useRouter();

  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth");
  };

  const handleContinue = async () => {
    if (user) {
      const res = await fetch(`/api/users/${user.id}`, {
        method: "PATCH",
        body: JSON.stringify({ name, email, phone, role }),
      });

      if (res) {
        if (role === "it") router.push("/pricing");
        
        if (role === "non-it") router.push("/profile/contact");
      }
    }
  };

  return (
    <Col className="gap-4 pb">
      <Row>
        Вы вошли как {user.email}
        <Box onClick={handleLogout} isInline>
          Выйти
        </Box>
      </Row>
      <Row className="flex-wrap sm:flex-nowrap">
        <Card className="w-[304px] shrink-0">
          <Row className="justify-between w-full">Заполните данные</Row>
          <Input label="ФИО" value={name} onChange={setName} />
          <Input
            type="email"
            value={email}
            onChange={setEmail}
            label="Электронная почта"
          />
          <Input type="tel" value={phone} onChange={setPhone} label="Телефон" />
        </Card>
        <Card className="w-full">
          Чтобы <b>узнать больше</b> о применении EQUIX в своих проектах, выберите вашу роль в разработке
          <Row className="h-full flex-wrap sm:flex-nowrap">
            {[
              {
                role: "it",
                name: "Дизайнер, программист, архитектор ПО или иной IT-специалист",
              },
              {
                role: "non-it",
                name: "Заказчик, project-менеджер или другой специалист",
              },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() => setRole(item.role)}
                className={`border-2 rounded sm:h-full overflow-hidden relative ${role === item.role ? "border-accent" : ""}`}
              >
                <Image
                  src={`/${item.role}.jpg`}
                  height="200"
                  width="200"
                  className="w-full h-full object-cover brightness-[35%]"
                  alt=""
                />
                <Box className="absolute left-0 bottom-0 text-white">
                  {item.name}
                </Box>
              </div>
            ))}
          </Row>
        </Card>
      </Row>
      {name && phone && role ? (
        <Box onClick={handleContinue} className="border">
          Продолжить
        </Box>
      ) : null}
    </Col>
  );
};
