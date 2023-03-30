import NewsLetterSubscription from "@/components/molecules/NewsLetterSubscription";

const Footer = () => {
  return (
    <div className="mt-10 flex flex-row justify-end w-full">
      <div className="w-[50%]">
        <NewsLetterSubscription />
      </div>
    </div>
  );
};

export default Footer;
