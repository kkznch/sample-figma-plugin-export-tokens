import { useCallback, useEffect } from "react";
import { Button } from "~/components/ui/button";

type MessageBody = {
	pluginId: string;
	pluginMessage: {
		type: "export-tokens-response";
		response: any;
	};
};

function App() {
	const onMessage = useCallback((event: MessageEvent<MessageBody>) => {
		const { type, response } = event.data.pluginMessage;
		if (type === "export-tokens-response") {
			console.log(response);
			parent.postMessage({ pluginMessage: { type: "close" } }, "*");
		}
	}, []);

	useEffect(() => {
		window.addEventListener("message", onMessage);
		return () => window.removeEventListener("message", onMessage);
	}, [onMessage]);

	const sendMessage = useCallback(() => {
		parent.postMessage({ pluginMessage: { type: "export-tokens" } }, "*");
	}, []);

	return (
		<>
			<div className="card">
				<Button onClick={sendMessage}>Tokenをエクスポートするぞ</Button>
			</div>
		</>
	);
}

export default App;
