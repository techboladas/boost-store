import Image from "next/image";
import logo from "@/../public/boost-icon.svg";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen p-5 flex justify-center items-center"
    >
      <article className="flex gap-5 bg-boost-30 p-6 text-boost-60">
        <div className="flex flex-col  justify-center">
          <h2>Contacte-nos: </h2>
          <span>
            <strong>Whatsapp:</strong> 872204494
          </span>{" "}
          <br />
          <span>
            <strong>Email:</strong> techboladas@gmail.com
          </span>
        </div>
        <Image src={logo} alt="Boost Store logo" width={150} height={150} />
      </article>
    </section>
  );
};
