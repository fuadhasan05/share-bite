import { FaUtensils } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaUtensils className="text-[#f7ca18] text-6xl mb-8" />,
      title: "Choose Your Favorite",
      description:
        "Choose your favorite meals and order online or by phone. It's easy to customize your order.",
    },
    {
      icon: <FaMotorcycle className="text-[#f7ca18] text-6xl mb-8" />,
      title: "We Deliver Your Meals",
      description:
        "We prepare and deliver meals right to your door, fresh and ready to enjoy.",
    },
    {
      icon: <GiNoodles className="text-[#f7ca18] text-6xl mb-8" />,
      title: "Eat And Enjoy",
      description:
        "No shopping, no cooking, no counting and no cleaning. Enjoy your healthy meals with your family.",
    },
  ];

  return (
    <section className="py-16 text-center">
      <h2
        className="text-3xl font-semibold mb-12 tracking-wide "
        style={{ wordSpacing: "8px" }}
      >
        HOW IT WORKS
      </h2>
      <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center px-10">
            {step.icon}
            <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
