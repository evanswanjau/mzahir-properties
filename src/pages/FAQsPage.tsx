import FeaturedBlogs from "@/components/sections/FeaturedBlogs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQsPage = () => {
  const faqs = [
    {
      question: "What makes M. Zahir Properties different?",
      answer:
        "M. Zahir Properties stands out due to our unique combination of over 15 years of industry experience and a steadfast commitment to Islamic ethics. Our deep understanding of the real estate market, coupled with our ethical approach, ensures that all transactions are conducted with the utmost transparency and fairness. We prioritize our clients' needs and work diligently to provide personalized service that exceeds expectations. Additionally, our expertise in construction materials and finishes allows us to offer valuable insights into property quality and potential improvements.",
    },
    {
      question: "How do I start the process of buying or selling?",
      answer:
        "Starting the process with M. Zahir Properties is simple and straightforward. For buyers, we begin with an initial consultation to understand your preferences, budget, and specific requirements, such as location or property type. We then provide a curated list of properties that match your criteria and arrange viewings at your convenience, ensuring flexibility to accommodate your schedule. For sellers, we offer a comprehensive property evaluation, including a detailed market analysis to determine the best listing price. We then create a tailored marketing strategy that includes professional photography, online listings, and targeted outreach to attract serious buyers. Throughout the process, our team is available to answer questions, handle negotiations, and provide guidance to ensure a smooth and successful transaction.",
    },
    {
      question: "Do you offer investment advice?",
      answer:
        "Yes, we offer expert investment advice tailored to your specific goals and financial situation. Our team of experienced professionals conducts thorough analyses of market trends, property values, and potential returns to provide you with informed recommendations. Whether you are interested in residential properties, commercial real estate, or rental income opportunities, we help you identify high-potential investments that align with your long-term objectives. We also assess risks and provide strategies to mitigate them, such as diversification or timing your entry into the market. Our goal is to maximize your investment potential while ensuring your financial security.",
    },
    {
      question: "What services do you provide for property sellers?",
      answer:
        "For property sellers, M. Zahir Properties offers a comprehensive range of services designed to maximize your property's value and ensure a successful sale. Our services include a detailed property evaluation by our experienced team, professional photography to highlight your property’s best features, and staging advice to enhance its appeal to potential buyers. We also create a customized marketing plan that includes online listings on major real estate platforms, social media promotion, and targeted advertising to reach a wide audience of qualified buyers. Throughout the selling process, we provide regular updates on interest and offers, negotiate on your behalf to secure the best possible terms, and handle all paperwork to streamline the transaction.",
    },
    {
      question: "How do you ensure ethical practices in your transactions?",
      answer:
        "At M. Zahir Properties, we adhere to strict ethical guidelines rooted in Islamic principles, ensuring that all transactions are conducted with honesty, integrity, and transparency. This includes providing clear and accurate information about properties, avoiding any form of deception or misrepresentation, and ensuring that all agreements are fair and mutually beneficial for all parties involved. We maintain open communication with our clients, disclose all relevant details, and avoid conflicts of interest. Our commitment to ethical practices not only builds trust with our clients but also fosters long-term relationships based on respect, reliability, and a shared commitment to moral values.",
    },
    {
      question: "What types of properties do you specialize in?",
      answer:
        "M. Zahir Properties specializes in a diverse range of property types to meet the varied needs of our clients. We focus on residential properties, including single-family homes, apartments, and townhouses, catering to first-time buyers, families, and investors alike. We also handle commercial properties such as office spaces, retail shops, and warehouses, offering tailored solutions for business owners and investors. Additionally, we provide expertise in rental properties, assisting landlords with property management and tenants with finding suitable rentals. Our extensive knowledge of Nairobi’s real estate market allows us to identify opportunities across these categories and deliver exceptional service.",
    },
    {
      question: "How long does it typically take to sell a property?",
      answer:
        "The time it takes to sell a property with M. Zahir Properties depends on several factors, including the property’s location, condition, market demand, and pricing strategy. On average, well-priced properties in high-demand areas like Nairobi can sell within 30 to 60 days. Our team conducts a thorough market analysis to set a competitive price and employs an aggressive marketing strategy to attract buyers quickly. We also provide regular feedback and adjust our approach as needed to expedite the process. While timelines vary, our goal is to secure a sale that meets your expectations in the shortest possible time while maximizing your return.",
    },
    {
      question: "Can you assist with property financing options?",
      answer:
        "Yes, M. Zahir Properties can assist with property financing options to make your buying process smoother. We collaborate with trusted financial institutions and mortgage providers to help you explore loan options, interest rates, and repayment plans that suit your budget. Our team provides guidance on eligibility criteria, documentation requirements, and the application process, ensuring you have all the information needed to secure financing. While we do not provide loans directly, our expertise in connecting you with the right financial partners can save you time and help you find the best possible terms for your property purchase.",
    },
    {
      question: "What should I do to prepare my property for sale?",
      answer:
        "Preparing your property for sale is crucial to attract buyers and achieve the best price. At M. Zahir Properties, we recommend starting with a thorough cleaning and decluttering to make your space more appealing. Address any minor repairs, such as fixing leaks or repainting walls, to enhance the property’s condition. We also suggest staging key areas like the living room and kitchen to showcase their potential. Our team provides professional advice on curb appeal improvements, such as landscaping or exterior maintenance, and can arrange for professional photography to highlight your property’s best features. This preparation ensures your property stands out in a competitive market.",
    },
    {
      question: "How do you handle disputes or issues during a transaction?",
      answer:
        "At M. Zahir Properties, we are committed to resolving disputes or issues during a transaction with professionalism and fairness. Our experienced team acts as a mediator to address concerns between buyers and sellers, ensuring open communication and a clear understanding of all parties’ needs. We rely on detailed documentation and legal agreements to prevent misunderstandings and quickly address any discrepancies. If a dispute arises, we work to find an amicable solution, and in complex cases, we can recommend legal or arbitration services to protect your interests. Our priority is to maintain trust and ensure a smooth resolution for all involved.",
    },
  ];

  return (
    <>
      <section className="bg-gray-50 py-24 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 leading-relaxed mb-16 w-4xl mx-auto text-center">
            Our responses reflect our commitment to transparency, Islamic
            ethics, and personalized service, ensuring you have the confidence
            and clarity needed to achieve your real estate goals with ease.
          </p>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="bg-white rounded-lg"
              >
                <AccordionTrigger className="flex justify-between items-center p-6 text-left hover:no-underline">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <FeaturedBlogs />
    </>
  );
};

export default FAQsPage;
