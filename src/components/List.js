export default function List({ data, title }) {
  const listItems = data.map((person) => (
    <li key={person.id}>
      <img src={person.imageId} alt={person.name} />
      <p>
        <b>{person.name}</b>
      </p>
    </li>
  ));
  return (
    <div>
      <h2 className="text-white">{title}</h2>
      <ul className="columns-6 rounded-xl text-white text-[20px] font-[Inter] mx-7 mt-5">
        {listItems}
      </ul>
    </div>
  );
}
