const Container = ({ children, className }) => {
  return (
    <section className={`${className} max-w-[1200px] mx-auto`}>
      {children}
    </section>
  );
};

export default Container;
