import { Text, ThematicBreak } from "@metalnethq/baremetal-ui";
import { AuthButtons } from "../_components/authButtons";

function Social() {
  return (
    <>
      <Text className="text-center mb-3" weight="extraLight">
        Continue with
      </Text>
      <div>
        <AuthButtons authProviders={["google", "github"]} />
      </div>
      <ThematicBreak wrapperClassName="mb-3" weight="extraLight">
        Or
      </ThematicBreak>
    </>
  );
}

export default Social;
