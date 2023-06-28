
function Card({ image, title, description, showExtraButton }) {
  return (
    <div className="container bg-white justify-between mx-auto overflow-hidden m-4 flex md:flex-row flex-col">
      <img className="h-96 w-full md:w-1/2 object-cover rounded-lg" src="../src/assets/teste2.png" alt={title}/>
      <div className="p-4 flex flex-col justify-between flex-grow w-444">
        <div>
          <h2 className="font-bold text-2xl mb-2">{title}</h2>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
        <div className="mt-4 flex md:flex-row flex-col">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
            Botão Principal
          </button>
          { showExtraButton &&
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
              Botão Extra
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Card;