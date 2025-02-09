```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This effect runs every time count changes,
    // even when it's not necessary. It also doesn't handle
    // cleanup properly, which can cause memory leaks.
    fetch(`/api/data?count=${count}`).then((res) => res.json()).then((data) => {
      // ...handle data...
    });
  }, [count]); // This dependency array is incorrect

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```