import { Text } from "@metalnethq/baremetal-ui";

export default function Logo() {
  return (
    <Text el="h3">
      <Text
        weight="extraBold"
        el="span"
        className="text-2xl text-white"
        intent="light"
      >
        MetalNet
      </Text>
      <Text
        weight="extraBold"
        el="span"
        className="text-2xl text-bm_primary-300"
        intent="light"
      >
        HQ
      </Text>
    </Text>
  );
}
