// components/TeamSection.js
import Image from "next/image";
import TeamMember1 from "../../public/images/about.jpg";
import TeamMember2 from "../../public/images/about.jpg";
import TeamMember3 from "../../public/images/about.jpg";

const TeamSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <Image
              src={TeamMember1}
              alt="Team Member 1"
              className="rounded-md"
              width={300}
              height={300}
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-gray-600">Chief executive officer</p>
            </div>
            <div className="flex mt-4"></div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={TeamMember2}
              alt="Team Member 2"
              className="rounded-md"
              width={300}
              height={300}
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-gray-600">chief technology officer </p>
            </div>
            <div className="flex mt-4"></div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={TeamMember3}
              alt="Team Member 3"
              className="rounded-md"
              width={300}
              height={300}
            />
            <div className="mt-4">
              <h3 className="text-lg font-bold">Alex Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="flex mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;