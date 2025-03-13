import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const FeaturedFAQs = () => {
  const faqs = [
    {
      question: "What makes M. Zahir Properties different?",
      answer:
        "M. Zahir Properties stands out due to our unique combination of over 15 years of industry experience and a steadfast commitment to Islamic ethics. Our deep understanding of the real estate market, coupled with our ethical approach, ensures that all transactions are conducted with the utmost transparency and fairness. We prioritize our clients' needs and work diligently to provide personalized service that exceeds expectations.",
    },
    {
      question: "How do I start the process of buying or selling?",
      answer:
        "Starting the process with M. Zahir Properties is simple and straightforward. For buyers, we begin with an initial consultation to understand your preferences and requirements. We then provide a curated list of properties that match your criteria and arrange viewings at your convenience. For sellers, we offer a comprehensive property evaluation and market analysis to determine the best listing price. We then create a tailored marketing strategy to showcase your property to potential buyers. Throughout the process, our team is available to answer any questions and provide guidance to ensure a smooth transaction.",
    },
    {
      question: "Do you offer investment advice?",
      answer:
        "Yes, we offer expert investment advice tailored to your specific goals and financial situation. Our team of experienced professionals analyzes market trends, property values, and potential returns to provide you with informed recommendations. Whether you are looking to invest in residential, commercial, or rental properties, we help you make strategic decisions that align with your long-term objectives. Our goal is to maximize your investment potential while minimizing risks.",
    },
    {
      question: "What services do you provide for property sellers?",
      answer:
        "For property sellers, M. Zahir Properties offers a comprehensive range of services designed to maximize your property's value and ensure a successful sale. Our services include a detailed property evaluation, professional photography, and staging advice to enhance your property's appeal. We also create a customized marketing plan that includes online listings, social media promotion, and targeted advertising to reach potential buyers. Throughout the selling process, we provide regular updates and negotiate on your behalf to secure the best possible terms.",
    },
    {
      question: "How do you ensure ethical practices in your transactions?",
      answer:
        "At M. Zahir Properties, we adhere to strict ethical guidelines based on Islamic principles. This means that we conduct all transactions with honesty, integrity, and transparency. We provide clear and accurate information to our clients, avoid any form of deception or misrepresentation, and ensure that all agreements are fair and mutually beneficial. Our commitment to ethical practices builds trust with our clients and fosters long-term relationships based on respect and reliability.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {" "}
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="bg-white rounded-lg"
                >
                  <AccordionTrigger className="flex justify-between items-center p-6 text-left hover:no-underline">
                    <h3 className="font-semibold text-xl text-gray-800">
                      {faq.question}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
