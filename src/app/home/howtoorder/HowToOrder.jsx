import { FaCirclePlay } from "react-icons/fa6";

const HowToOrder = () => {
  return (
    <div className="mt-10 flex rounded-lg p-5 gap-5 bg-gray-50">
      <div className="flex-grow flex flex-col justify-center text-black/70">
        <h3 className="text-3xl font-bold mb-5">কিভাবে ঔষধ অর্ডার করবেন?</h3>
        <ul className="text-base font-normal space-y-3">
          <li>
            ১. প্রেসক্রিপশন ছবি আপলোড করুন অথবা কেটাগরি থেকে বা ঔষধ সার্চ করে
            কিনুন।
          </li>
          <li>
            ২. আমাদের ফার্মাসিস্ট আপনার প্রদানকৃত প্রেসক্রিপশন ভেরিফাইড করে
            আপনাকে ফোন করে অর্ডার কনফার্ম করবেন।
          </li>
          <li>৩. ১২-২৪ ঘন্টার মধ্য আপনার ডেলিভারি বুঝে নিন।</li>
        </ul>
      </div>
      <div className="w-[500px] h-[300px] bg-primary/10 rounded-md flex justify-center items-center">
        <FaCirclePlay className="text-5xl" />
      </div>
    </div>
  );
};

export default HowToOrder;
