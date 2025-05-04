const Wheel = ({ image }: { image: string }) => {
  return (
    <>
      <div className="aspect-square w-full max-w-52 bg-gray-300 p-2.5 mt-2.5 border-8 border-black">
        <img
          src={image}
          alt={image}
          data-testid="wheel"
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
};

export default Wheel;
