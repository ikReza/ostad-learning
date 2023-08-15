import Image from "next/image";

const MyProfile = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="rounded-full border-4 border-black dark:border-slate-500 
                   drop-shadow-xl mx-auto mt-8 mb-4"
        src="/images/ash.png"
        alt="Ash"
        width={120}
        height={120}
        priority={true}
      />

      <p className="text-center text-2xl font-semibold dark:text-amber-700">
        Ash Ketchum
      </p>
    </section>
  );
};

export default MyProfile;
