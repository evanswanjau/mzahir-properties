import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Camera, Megaphone, FileText } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
import { CallToAction } from "@/components/sections/CallToAction";

const SellPropertyPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Valuation request submitted");
  };

  const steps = [
    {
      icon: <MapPin className="w-12 h-12 text-green-700" />,
      title: "Property Evaluation",
      description:
        "We start with a detailed assessment of your property, analyzing its condition, location, and market trends to determine the best listing price.",
    },
    {
      icon: <Camera className="w-12 h-12 text-green-700" />,
      title: "Professional Marketing",
      description:
        "Our team creates a customized marketing plan, including professional photography, online listings, and targeted advertising to attract serious buyers.",
    },
    {
      icon: <Megaphone className="w-12 h-12 text-green-700" />,
      title: "Reach Potential Buyers",
      description:
        "We leverage our extensive network and digital platforms to showcase your property to a wide audience, ensuring maximum visibility.",
    },
    {
      icon: <FileText className="w-12 h-12 text-green-700" />,
      title: "Seamless Sale Closure",
      description:
        "We handle negotiations, paperwork, and legalities, ensuring a smooth and ethical transaction that meets your expectations.",
    },
  ];

  const testimonials = [
    {
      name: "David Ochieng",
      image: "/images/1.jpg",
      quote:
        "Selling my property was very seamless. They marketed my home beautifully and sold it in just 45 days! Their professionalism and attention to detail made all the difference.",
    },
    {
      name: "Fatima Mwende",
      image: "/images/2.jpg",
      quote:
        "The team at M. Zahir Properties exceeded my expectations. Their ethical approach and expertise made the process stress-free, and I felt supported every step of the way.",
    },
    {
      name: "Joseph Kiptoo",
      image: "/images/3.jpg",
      quote:
        "I was impressed by how quickly M. Zahir Properties found a buyer for my investment property. Their market knowledge and transparent dealings ensured I got the best value.",
    },
    {
      name: "Amina Hussein",
      image: "/images/4.jpg",
      quote:
        "Selling my first home with M. Zahir Properties was a breeze. Their personalized guidance and commitment to fairness gave me peace of mind, and the sale closed smoothly in record time.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="h-[calc(100vh-84px)] flex bg-white">
        <div className="w-full md:w-1/2 flex flex-col align-center justify-center px-34">
          <h1 className="text-4xl md:text-[5em] font-bold text-gray-800 mb-6 leading-21 tracking-wide">
            Sell Your Property with M.Zahir Properties
          </h1>
          <p className="text-gray-600 mb-8">
            Leverage our years of expertise and ethical practices to sell your
            property quickly and at the best price. Let us handle the details
            while you focus on your next move.
          </p>
          <a href="#valuation-form">
            <Button className="bg-green-700 border-green-700 cursor-pointer hover:bg-green-900 hover:border-green-900 text-white font-body px-8 py-7 rounded-lg transition-all duration-500">
              Get a Free Valuation
            </Button>
          </a>
        </div>
        <img
          src="/images/sell-property.jpg"
          alt="Sell Your Property"
          className="w-full md:w-1/2 h-[calc(100vh-84px)] object-cover"
        />
      </div>
      <div className="mx-auto">
        <div className="bg-green-900 text-white py-38 flex justify-center">
          <div className="max-w-[80%]">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Our Simple Selling Process
            </h2>
            <p className="text-white w-4xl mx-auto text-center mb-20">
              At M. Zahir Properties, we’ve streamlined the property selling
              process to make it as seamless and stress-free as possible. With
              over 15 years of experience and a commitment to Islamic ethics, we
              guide you through every step—from an expert valuation to a
              successful sale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl flex flex-col justify-between min-h-[300px]"
                >
                  <div>
                    <div className="flex mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  <div className="mt-4 text-2xl font-bold text-green-700">
                    Step {index + 1}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#valuation-form">
                <Button
                  variant="default"
                  className="bg-green-700 border border-green-700 cursor-pointer hover:bg-white hover:border-white text-white hover:text-green-700 font-body px-8 py-7 rounded-lg transition-all duration-500"
                >
                  Sell Your Property Today
                </Button>
              </a>
              <a href="/contact-us">
                <Button
                  variant="outline"
                  className="border-white bg-green-900 cursor-pointer text-white hover:bg-white hover:text-green-700 px-8 py-7 rounded-lg transition-all duration-500"
                >
                  Get in touch
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-16 pt-32 pb-48 bg-white">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Why Choose M. Zahir Properties?
          </h2>
          <p className="text-gray-600 mb-18 w-4xl mx-auto text-center">
            Discover the key reasons why clients choose us—from personalized
            support to comprehensive selling solutions—all designed to make your
            experience seamless and rewarding.
          </p>

          <div className="space-y-32 w-[80%] mx-auto px-24">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/sell-property.jpg"
                  alt="Proven Expertise"
                  className="w-full h-120 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold text-green-800 mb-6">
                  Proven Expertise
                </h1>
                <div className="text-gray-600 space-y-8">
                  <p>
                    With over 15 years in the real estate industry, M. Zahir
                    Properties has established itself as a trusted leader in
                    Nairobi’s competitive market. Our team has successfully sold
                    hundreds of properties, ranging from residential homes to
                    commercial spaces, consistently achieving maximum value for
                    our clients. This extensive experience is complemented by
                    our deep knowledge of construction materials and finishes,
                    which allows us to provide unique insights into property
                    quality, potential renovations, and market positioning.
                  </p>
                  <p>
                    Our expertise extends beyond transactions—we understand the
                    nuances of Nairobi’s neighborhoods, market trends, and buyer
                    preferences. This enables us to craft tailored strategies
                    that highlight your property’s strengths and attract the
                    right buyers. Whether you’re selling a family home in Karen
                    or an office space in Westlands, our proven track record
                    ensures that your property stands out in a crowded market,
                    delivering results you can rely on.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/sell-property.jpg"
                  alt="Ethical Practices"
                  className="w-full h-120 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold text-green-800 mb-6">
                  Ethical Practices
                </h1>
                <div className="text-gray-600 space-y-4">
                  <p>
                    At M. Zahir Properties, we adhere to strict Islamic
                    principles, ensuring that every transaction is conducted
                    with transparency, fairness, and integrity. Our commitment
                    to ethical practices means that we prioritize honesty in all
                    dealings, providing clients with clear, accurate information
                    about their property and the market. We avoid any form of
                    misrepresentation or hidden fees, fostering trust and
                    confidence in our services.
                  </p>
                  <p>
                    This ethical foundation extends to how we treat both buyers
                    and sellers, ensuring that all parties benefit from a fair
                    and balanced agreement. Our clients trust us to uphold these
                    moral values while delivering exceptional results, whether
                    they’re selling a small apartment or a luxury estate. By
                    aligning our operations with these principles, we’ve built a
                    reputation for reliability and respect, making us the go-to
                    choice for those who value integrity in real estate.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <img
                  src="/images/sell-property.jpg"
                  alt="Personalized Service"
                  className="w-full h-120 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold text-green-800 mb-6">
                  Personalized Service
                </h1>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Our dedicated team at M. Zahir Properties is committed to
                    providing personalized support tailored to your unique needs
                    and goals. From the initial valuation to the final closing,
                    we take the time to understand your priorities, whether
                    you’re looking to sell quickly, maximize profit, or
                    transition smoothly to your next property. We customize our
                    approach to ensure that every aspect of the selling process
                    aligns with your vision, offering guidance and advice at
                    every step.
                  </p>
                  <p>
                    We pride ourselves on being accessible and responsive,
                    keeping you informed with regular updates and addressing any
                    concerns promptly. Our personalized service extends to
                    handling the details—such as staging advice, buyer
                    negotiations, and legal paperwork—so you can focus on your
                    next chapter. With M. Zahir Properties, you’re not just
                    another client; you’re a partner in a collaborative journey
                    to achieve the best possible outcome for your property sale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-gray-50 py-20">
          <div className="max-w-[80%] mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-5">
              Client Testimonials
            </h2>
            <p className="w-4xl mx-auto text-gray-600 leading-relaxed text-center mb-16">
              Hear what our satisfied clients have to say about their
              experiences with M. Zahir Properties. We pride ourselves on
              delivering exceptional service and building lasting relationships.
            </p>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={3}
              slidesPerGroup={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <div className="bg-white rounded-xl p-6 h-full justify-center items-center flex flex-col space-y-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mr-4"
                    />
                    <p className="text-gray-800 text-lg font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <div className="pt-18 mb-42">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Request a Free Valuation
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name" className="text-gray-700 font-bold">
                  First Name
                </Label>
                <Input
                  id="first-name"
                  type="text"
                  placeholder="Your First Name"
                  className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                  required
                />
              </div>
              <div>
                <Label htmlFor="last-name" className="text-gray-700 font-bold">
                  Last Name
                </Label>
                <Input
                  id="last-name"
                  type="text"
                  placeholder="Your Last Name"
                  className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-700 font-bold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-700 font-bold">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
                className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                required
              />
            </div>
            <div>
              <Label htmlFor="location" className="text-gray-700 font-bold">
                Location
              </Label>
              <Input
                id="location"
                type="tel"
                placeholder="Property Location"
                className="mt-2 rounded-lg bg-white py-6 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                required
              />
            </div>
            <div>
              <Label htmlFor="property-address" className="text-gray-700">
                Details
              </Label>
              <Textarea
                id="details"
                placeholder="Add more details about your property"
                className="mt-2 rounded-lg h-24 bg-white py-4 px-4 focus-visible:ring-0 border-2 border-gray-200 shadow-none focus-visible:border-green-600"
                required
                rows={8}
              />
            </div>
            <Button
              type="submit"
              className="bg-green-700 cursor-pointer text-white hover:bg-green-800 w-full py-6 transition-all duration-300"
            >
              Submit Request
            </Button>
          </form>
        </div>

        <CallToAction />
      </div>
    </section>
  );
};

export default SellPropertyPage;
