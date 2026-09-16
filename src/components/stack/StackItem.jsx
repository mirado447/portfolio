function StackItem({ item }) {
  return (
    <div className="flex justify-center">
      <img
        src={item.icon}
        alt={item.name}
        title={item.name}
        className="w-12 h-12 object-contain"
      />
    </div>
  );
}

export default StackItem;
