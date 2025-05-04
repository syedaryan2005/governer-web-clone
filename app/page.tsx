"use client"
"use client"
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";

function Home() {
  return (
    <div className="font-arial">
      <header
        className="sm:flex bg-[#044E83] justify-between items-center px-6 sm:px-6 lg:px-10 h-18"
        style={{
          height: "80px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        <div className="w-1/3 sm:w-auto mt-[30px] sm:mt-[70px]">
          <a href="/">
            <Image src="/logo.png" alt="logo" width={90} height={113} />
          </a>
        </div>

        <h1 className="hidden sm:block font-extrabold text-2xl sm:text-base lg:text-xl text-[#B9D8F3] text-center sm:text-left">
          Tuition Free Education Program on Latest Technologies
        </h1>

        <p className="sm:hidden text-[1.5rem] font-extrabold text-[#B9D8F3] text-center -m-32">Tuition Free Education</p>

        <nav className="flex gap-10 text-[#FAF9F6] font-medium text-base sm:text-sm">
          <a href="/">Home</a>
          <a href="/">Apply</a>
          <a href="/">Jobs</a>
          <a href="/">Result</a>
          <a href="/">Courses</a>
        </nav>
      </header>

      <main className="relative md:h-[calc(100vw/1.90)] w-full flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/bg_house.jpg')] bg-cover opacity-25 over flow-hidden z-0"></div>

        {/* Content Section */}
        <section className="relative pt-16 px-6 z-10 w-full h-fit flex-col justify-start items-start mt-14">
          <h1 className="text-[4.2rem] font-[900] text-[#044E83]">
            Governor Sindh
          </h1>
          <p className="text-[#044E83] text-[3rem] leading-4">
            Kamran Khan Tessori
          </p>
          <div className="text-[2.8rem] mt-10 font-extrabold text-[#2EB6E8] leading-tight">
            <h1>Certified Cloud</h1>
            <h1>Applied Generative AI</h1>
            <h1>Engineer (GenEng)</h1>
          </div>
          <p className="text-[#044E83] font-extrabold text-[1.5rem] mt-3">
            Earn up to $5,000 /month
          </p>
          <p className="text-[#044E83] font-extrabold text-[1.5rem] mt-2 leading-tight">
            Now admissions are open in <br /> Hyderabad
          </p>
          <div className="flex justify-start items-start mt-7">
            <button className="bg-[#044E83] text-white p-4 px-12 rounded-md font-bold text-center">
              APPLY NOW
            </button>
            <div className="text-center">
              <p className="text-[#044E83] font-extrabold ml-11 text-[1.8rem] leading-none">
                561,143
              </p>
              <p className="text-[1rem] text-[#044E83] ml-10">
                Accepted Applications
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative w-full h-full z-30 mt-40">
          <div className="absolute inset-0 right-0 mb-20 ml-56">
            <Image
              src="/cover.png"
              alt="piaic"
              layout="fill"
              className="object-cover"
            />
          </div>
        </section>
      </main>

      {/*Content*/}
      <main className="mt-16">
        <div>
          <h1 className="px-10 text-center text-[#044E83] text-[2rem] leading-none font-bold">
            Certified Cloud Applied Generative AI Engineer (GenEng) and
            Solopreneur Developing Billin-Dollar Valued Developers and
            Solopreneur
          </h1>
          <p className="mt-7 mb-8 px-6 text-[1.3rem] font-medium text-[#27272A]">
            The pace of technological change is accelerating, big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained
            in this program will win by automating work typically outsourced to
            employees, by directly connecting to customers by eliminating the
            middleman, and by developing vertical metaverses, thus paving the
            way for the first billion-dollar valued solopreneur businesses. This
            program has the objective to train this new breed of billion-dollar
            solopreneurs. These solopreneurs will adopt the ultra-lean business
            model and work independently and will not need to hire employees or
            other team members.
          </p>
        </div>
      </main>

      <div className="grid grid-cols-3 w-full h-[280px] gap-4 px-6 mb-10">
        <div className="relative w-full h-full shadow-2xl shadow-[#A7A7A7] rounded-lg">
          <Image
            src="/image1.jpg"
            alt="image1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full shadow-2xl shadow-[#A7A7A7] rounded-lg">
          <Image
            src="/image2.jpg"
            alt="image2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full shadow-2xl shadow-[#A7A7A7] rounded-lg">
          <Image
            src="/image3.jpg"
            alt="image3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 w-full h-[600px] px-6 gap-2">
        <div className="relative w-full h-full rounded-lg">
          <Image
            src="/slide1.jpg"
            alt="slide1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-full h-full rounded-lg">
          <Image
            src="/slide3.jpg"
            alt="slide3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <hr className="border-t-2 border-[#D4D4D8] mt-10 mb-4 mx-6" />

      <h1 className="pl-5 text-[#044E83] text-[2.3rem] font-bold mt-10">
        Core Courses Sequence
      </h1>

      <div className="grid grid-cols-3 mb-10 mt-6 px-6 mr-96 justify-items-start">
        <div className="rounded-xl overflow-hidden shadow-md shadow-[#A7A7A7]">
          <Image
            src="/program.jpg"
            alt="Programming Fundamentals"
            height={160}
            width={290}
            objectFit="cover"
            className="rounded-t-xl"
          />
          <div className="p-4 text-center">
            <p className="text-[#52525B] text-lg font-bold">
              Programming Fundamentals
            </p>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md shadow-[#A7A7A7]">
          <Image
            src="/nextjs.jpg"
            alt="Web2 Using NextJS"
            height={160}
            width={290}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-[#52525B] text-lg font-bold">
              Web2 Using NextJS
            </p>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-md shadow-[#A7A7A7]">
          <Image
            src="/earn.jpg"
            alt="Earn as You Learn"
            height={160}
            width={290}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-[#52525B] text-lg font-bold">
              Earn as You Learn
            </p>
          </div>
        </div>
      </div>

      <h1 className="pl-5 text-[#044E83] text-[2.3rem] font-bold mt-20">
        Advanced Courses
      </h1>

      <div className="grid grid-cols-4 mt-10 pl-6 gap-5 justify-items-start">
        <div className="relative rounded-lg overflow-hidden shadow-xl shadow-[#A7A7A7]">
          <Image
            src="/AI.jpg"
            alt="AI"
            height={160}
            width={300}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-[#52525B] text-lg font-bold">
              Artificial Intelligence
            </p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-xl shadow-[#A7A7A7]">
          <Image
            src="/metaverse.jpg"
            alt="metaverse"
            height={160}
            width={300}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-[#52525B] text-lg font-bold">
              Web 3 and Metaverse
            </p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-xl shadow-[#A7A7A7]">
          <Image
            src="/cloudComputing.jpg"
            alt="cloud"
            height={160}
            width={300}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-[#52525B] text-lg font-bold">
              Cloud-Native Computing
            </p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-xl shadow-[#A7A7A7]">
          <Image
            src="/iot.jpg"
            alt="iot"
            height={160}
            width={300}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="p-4 text-center">
            <p className="text-[#52525B] text-lg font-bold">
              Ambien Computing and IoT
            </p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-xl shadow-[#A7A7A7] mt-10 justify-items-start">
          <Image
            src="/genomics.jpg"
            alt="genomics"
            height={160}
            width={300}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="pl-5 text-center">
            <p className="text-[#52525B] text-lg font-bold p-1">
              Genomics and Bioinformatics
            </p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-xl shadow-[#A7A7A7] mt-10 justify-items-start">
          <Image
            src="/automation.jpg"
            alt="automation"
            height={160}
            width={300}
            objectFit="cover"
            className="rounded-t-lg"
          />
          <div className="pl-5 text-center p-1">
            <p className="text-[#52525B] text-lg font-bold">
              Network Programmability and
              <br />
              Automation
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F4F5] mt-20 pt-20 px-6 pb-44 flex">
        <div>
          <h1 className="font-bold text-xl">Core Courses</h1>
          <p className="leading-9 pt-5 text-lg font-semibold text-[#5C5C5F]">
            Programming Fundamentals
          </p>
          <p className="leading-9 text-lg font-semibold text-[#5C5C5F]">
            Web2 Using NextJS
          </p>
          <p className="leading-9 text-lg font-semibold text-[#5C5C5F]">
            Earn as You Learn
          </p>
        </div>
        <div className="scroll ml-60">
          <h1 className="font-bold text-xl">Advance Courses</h1>
          <p className="leading-9 pt-5 text-lg font-semibold text-[#5C5C5F]">
            Web 3 and Metaverse
          </p>
          <p className="leading-9 text-lg font-semibold text-[#5C5C5F]">
            Cloud-Native Computing
          </p>
          <p className="leading-9 text-lg font-semibold text-[#5C5C5F]">
            Artificial Intelligence (AI) and Deep Learning
          </p>
          <p className="leading-9 text-lg font-semibold text-[#5C5C5F]">
            Ambient Computing and IoT
          </p>
          <p className="leading-9 text-lg font-semibold text-[#5C5C5F]">
            Genomics and Bioinformatics
          </p>
          <p className="leading-9 text-lg font-semibold text-[#5C5C5F]">
            Network Programmability and Automation
          </p>
        </div>
        <div className="ml-28">
          <h1 className="font-bold text-xl">Social Links</h1>
          <div className="mt-5 flex gap-2">
            <Image
              src="/Facebook.png"
              height={25}
              width={25}
              alt="facebook"
              className="rounded-[50%] object-cover"
            />
            <Image
              src="/youtube.jpg"
              height={25}
              width={25}
              alt="youtube"
              className="rounded-[50%] object-cover"
            />
            <Image
              src="/twitter.png"
              height={25}
              width={25}
              alt="twitter"
              className="rounded-[50%] object-cover"
            />
            <Image
              src="/insta.jpeg"
              height={25}
              width={25}
              alt="insta"
              className="rounded-[50%] object-cover"
            />
            <Image
              src="/tiktok.png"
              height={25}
              width={25}
              alt="tiktok"
              className="rounded-[50%] object-cover"
            />
          </div>
          <div className="mt-5 text-[#044E83] underline text-base font-medium flex items-center">
            <span className="mr-3 text-[1.5rem]"><MdOutlineMail /></span>
            <span><a href="/">education@governorsindh.com</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
