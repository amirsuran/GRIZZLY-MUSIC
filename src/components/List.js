export default function List({ data, title }) {
  const listItems = data.map((person) => (
    <li key={person.id}>
      <img src={person.imageId} alt={person.name} />
      <p className=" font-sans Inter ">{person.name}</p>
    </li>
  ));
  return (
    <div>
      <h2 className="text-white ml-7 mt-2 ">{title}</h2>
      <ul className="columns-6 rounded-xl text-white text-[20px] font-[Inter] mx-7 mt-5">
        {listItems}        
      </ul>
    </div>
  );
}
