import * as motion from "motion/react-client";

 function Hero({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className='dash'>{text}</h1>
    </motion.div>
  );
}
export default function Framer({ type, text }) {
  switch (type) {
    case "hero":
      return <Hero text={text} />;
    default:
      return (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='dash'>{text}</h1>
        </motion.div>
      );
  }
}