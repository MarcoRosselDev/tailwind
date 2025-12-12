type Params = {
  t: string;
  w: string;
  p: string;
  u: string;
};

export default function MyMain({ t, w, p, u }: Params) {
  return (
    <main>
      <p>{u}</p>
      <p>{t}</p>
      <p>{w}</p>
      <p>{p}</p>
    </main>
  );
}
