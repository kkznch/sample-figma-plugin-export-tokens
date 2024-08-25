figma.showUI(__html__);

type MessageType = {
	type: "export-tokens" | "close";
};

figma.ui.onmessage = async (msg: MessageType) => {
  switch (msg.type) {
    case "export-tokens":
      const variables = await figma.variables.getLocalVariablesAsync();
      figma.ui.postMessage({
        type: "export-tokens-response",
        response: variables,
      });
      break;
    case "close":
      figma.closePlugin();
      break;
  }
};
