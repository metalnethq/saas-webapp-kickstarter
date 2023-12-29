import { Text } from "@metalnethq/baremetal-ui";

export default function Logo() {
  return (
    <Text el="h3">
      <Text weight="extraBold" el="span" className="text-2xl" intent="light">
        MetalNet
      </Text>
      <Text weight="extraBold" el="span" className="text-2xl" intent="dark">
        HQ
      </Text>
    </Text>
  );
}
