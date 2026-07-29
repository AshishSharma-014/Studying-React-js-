import { ArrowUpRight } from "lucide-react";
import notes from "../assets/notes.jpg";

function Hero() {
  return (
    <section className="w-full min-h-screen pt-36 pb-16 px-5 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
              AI Infrastructure for Modern Teams
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-none uppercase tracking-tight">

              <span className="block text-2xl md:text-3xl font-semibold mb-3">
                Build Smarter Products Powered By
              </span>

              <span className="block">
                Artificial
              </span>

              <span className="block">
                Intelligence
              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
              Transform complex workflows into intelligent experiences with
              enterprise-grade AI solutions designed for startups,
              product teams and global businesses.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-8 py-4 rounded-full border-2 border-black font-semibold hover:bg-black hover:text-white duration-300">
                Book a Demo
              </button>

              <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 duration-300">

                Start Building

                <span className="bg-white rounded-full text-black p-1">
                  <ArrowUpRight size={18} />
                </span>

              </button>

            </div>

            {/* Stats */}

            <div className="mt-16 bg-black rounded-[35px] text-white px-10 py-8">

              <div className="grid grid-cols-3 text-center">

                <div>
                  <h2 className="text-5xl font-bold">
                    98.7%
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Model Accuracy
                  </p>
                </div>

                <div className="border-x border-gray-700">
                  <h2 className="text-5xl font-bold">
                    120+
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Global Clients
                  </p>
                </div>

                <div>
                  <h2 className="text-5xl font-bold">
                    24/7
                  </h2>

                  <p className="mt-2 text-gray-400">
                    AI Automation
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">

            {/* Cutout Shape */}

            <div className="relative w-[520px] h-[660px]">

              {/* Main Shape */}

              <div
                className="
                absolute
                inset-0
                bg-[#ECECF4]
                rounded-[55px]
                overflow-hidden
                "
              >
                <img
                  src={notes}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left Cut */}

              <div
                className="
                absolute
                left-[-90px]
                top-[180px]
                w-[170px]
                h-[220px]
                bg-white
                rounded-r-[90px]
                "
              ></div>

              {/* Decorative Circle */}

              <div className="absolute top-12 left-10 w-72 h-72 rounded-full border-[3px] border-white/70"></div>

              <div className="absolute top-20 left-20 w-56 h-56 rounded-full border border-white/40"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;