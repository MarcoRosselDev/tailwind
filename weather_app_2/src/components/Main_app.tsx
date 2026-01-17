export default function Main_app(data: any) {
  return (
    <div>
      <div>
        this is loaded
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}
