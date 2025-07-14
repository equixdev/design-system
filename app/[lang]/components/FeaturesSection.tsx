import { Card } from "@/equix/components/Box";
import { Row } from "@/equix/components/Flex";
import { Icon } from "@/equix/components/Icon";
import data from "../data.json";

export const FeaturesSection = () => {
  const { features } = data;

  return (
    <div className="w-full gap grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))]">
      {features.map(({ name, description, iconName, href }, index) => (
        <Card key={index} href={href}>
          <Row className="items-center text-accent">
            <Icon name={iconName} className="text-2xl" />
            {name}
          </Row>
          <p className="line-clamp-4">{description}</p>
        </Card>
      ))}
    </div>
  );
};
