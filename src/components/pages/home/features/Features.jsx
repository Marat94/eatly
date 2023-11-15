import "./features.css";

const featuresInfo = [
  {
    title: "10K+",
    text: "Satisfied Customers All Over The World"
  },
  {
    title: "4M",
    text: "Healthy Dishes Sold Including Milk Shakes & Smoothies"
  },
  {
    title: "99.99%",
    text: "Reliable Customer Support Providing Great Experiences"
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-info">
        {featuresInfo.map((item, id) => (
          <div className="features-content" key={id}>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
