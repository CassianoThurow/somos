
// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md overflow-hidden max-w-xs mx-auto">
      <img className="w-full h-64 object-cover object-center rounded-t-lg" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
          Button 1
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
      </div>
    </div>
  );
};

export default Card;
