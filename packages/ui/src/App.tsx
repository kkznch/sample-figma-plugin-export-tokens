function App() {
	return (
		<>
			<div className="card">
				<button onClick={() => parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: 3}}, '*')}>
					四角つくるよ！
				</button>
        <button onClick={() => parent.postMessage({ pluginMessage: { type: 'cancel'}}, '*')}>
					キャンセルするよ！
				</button>
			</div>
		</>
	);
}

export default App;
