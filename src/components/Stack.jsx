import StackItem from "./stack/StackItem";
import stackItems from "./stack/stackData";

function Stack() {
  return (
    <section id="stack" className="pt-10 pb-10 md:pt-16">
      <h2 className="font-khand text-4xl font-normal text-brown mb-6 text-center">Stack</h2>
      <div className="bg-tan py-3">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 items-center gap-y-4 px-6">
          {stackItems.map((item) => (
            <StackItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
