"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    name: "Establish an Online Presence",
    content: "A strong internet presence is a vital component of growing a successful small business. It enables clients to find your business quickly and simply, as well as reaching a broader audience than traditional advertising. Establishing an online presence also improves client engagement because they can interact with you directly through contact forms or social media. A website also allows you to track and analyse user behaviour, as well as make quick and easy modifications to the site. Having an online presence also demonstrates to potential clients that you are current and reputable, as well as providing a platform for them to learn more about your products and services. Finally, having an online presence allows you to improve your search engine rankings and gain greater visibility and visitors through digital marketing initiatives. Finally, any small business that wants to stay competitive needs to have an internet presence and a website.",
  },
  {
    name: "Increase Visibility",
    content: "Having a website is an excellent approach to boost your small company' visibility. A website enables potential clients to quickly learn about your company - what it is all about, what services and goods you provide, and any deals you may be conducting. It also provides individuals with 24/7 access to information about your company, eliminating the need for a phone call or in-person visit. Customers may learn what they need to know when they want to. Having a website can also assist customers looking for services or products in the region in simply finding your business via a simple Google search. This raises the likelihood of them choosing your company over a competitor who does not have a website. Furthermore, having a well-designed website can help your small business appear more professional and respectable, which can help increase visibility and sales.",
  },
  {
    name: "Improve Customer Service",
    content:
      "Having a successful small business requires offering top-notch customer service. Establishing a website for your small business enables clients to learn about you and the goods or services you provide in a quick and simple manner. Additionally, a website lets you invite clients to get in touch with you directly with enquiries or criticism. Additionally, you can utilise your website to offer FAQs, updates on customer service, and other useful information. You can make sure that you always have one step up on the competition in terms of customer service by attending to consumers online. Moreover, a website lets you monitor client comments and satisfaction. You can utilise this information to modify your offerings in terms of goods, services, and customer support strategies. Increased customer satisfaction and loyalty will probably follow, which will bring in more revenue and attract new clients.",
  },
  {
    name: "Enhance Brand Identity",
    content:
      "Having a website can be a terrific way to strengthen the brand identification of your small business. Having a website enables potential clients to research your company online and learn more about your mission and values. A well-designed website need to have a logo and a concise description of the services your company provides. To help prospective clients understand the calibre of your company and the work you accomplish, it should also include client endorsements and evaluations. Along with your company's contact details, your website should provide information on how clients can get in touch with you. Making the effort to develop a visually appealing, dynamic website with interesting content can be a terrific way to differentiate your company from rivals and strengthen your brand identification.",
  },
  {
    name: "Grow Your Audience",
    content:
      "One of the finest methods to expand your audience and increase the visibility of your small business in the digital age is through your website. You can present your small business and its goods or services to the public by having a website. It will make it simple for potential clients to find you. Expanding your audience is one of the main goals of having a website for your small business. You can publish material on your website that highlights your goods and services and advertises your company. This may encourage more people to visit your establishment. Using social media to expand your audience is just another fantastic strategy. People will find it easier to connect with you if your website has links to your social media profiles. In addition to helping you reach more potential clients, your website may be a terrific addition to the material you provide on social media.",
  },
  {
    name: "Drive Traffic",
    content:
      "Expanding your audience is one of the main goals of having a website for your small business. You can publish material on your website that highlights your goods and services and advertises your company. This may encourage more people to visit your establishment. Using social media to expand your audience is just another fantastic strategy. People will find it easier to connect with you if your website has links to your social media profiles. In addition to helping you reach more potential clients, your website may be a terrific addition to the material you provide on social media. Including engaging material on your website, like blog entries, is another simple approach to attract users. For added benefit, you may also think about including links to the material on your website from other websites. Making sure your material is optimised for search engines and meets high standards for quality puts you in the best possible position to be discovered and rank naturally. Last but not least, one strategy to improve website traffic is to think about guest posting. By contributing articles to websites that are pertinent to your field, you can expand your readership and establish more reputation.",
  },
  {
    name: "Generate Leads",
    content:
      "One essential element of a small business is lead generation. Putting in the time and effort to create a strong website will benefit your company's promotion and lead generating in many ways. A well-designed, polished website can create a strong brand presence, convert visitors into customers, and draw in new leads both online and offline. Utilising search engine optimisation (SEO) strategies can boost website traffic and generate quality prospects that may convert. Furthermore, you can increase the amount of leads by sharing links to your website on other platforms, which will attract more people who are interested in your product or service.",
  },
  {
    name: "Increase Sales",
    content:
      "Your small business's visibility and sales can both rise with a website. Increasing your online presence and reaching a wider audience can be achieved by listing your goods and services on your website. A decent website should also have a simple, safe checkout procedure since it will entice users to make a purchase. Additionally, since offers and discounts are a great way to increase sales, you should think about including them on your website. Furthermore, SEO and website analytics can assist drive more traffic to your website, which raises the likelihood that a visitor will convert to a sale. Additionally, you may increase website traffic and introduce more people to your goods and services by interacting with your clients on social media.",
  },
];

const Benefits = () => {
  return (
    <div className="container h-auto flex flex-col justify-center gap-7 py-10 items-center">
      <h1 className="text-4xl font-extrabold text-center p-4">
        Key reasons why your business needs a website
      </h1>
      <Accordion type="single" collapsible className="w-[80vw] flex flex-col gap-1">
        {benefits.map((item, index) => {
          return (
            <AccordionItem
              value={`item-${index + 1}`}
              className="bg-slate-900 text-white px-5 rounded-md border border-black"
              key={index}
            >
              <AccordionTrigger className="font-bold">{item.name}</AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Benefits;
