import data from './../data.json'

export default function Banderas() {
  console.log(data);
  return (
    <div>
      {data.toString()}
    </div>
  )
}