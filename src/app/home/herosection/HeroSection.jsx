import Image from "next/image";
import uploadFile from "../../../assets/file-upload-svgrepo-com.svg";
import calendar from "../../../assets/calendar-svgrepo-com.svg";
import onlineMedical from "../../../assets/online-medical-treatment-female-svgrepo-com.svg";
import call from "../../../assets/phone-call-emergency-svgrepo-com.svg";
const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[400px] rounded-3xl bg-primary/10 mt-6 flex items-center justify-center">
        <h3 className="text-center">
          this is hero section
          <br />
          in this section we will use some offer banners
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6">
        {/* 1 */}
        <div className="flex gap-3 h-[130px] items-center justify-center bg-gradient-to-r from-primary/40 to-primary/50 rounded-xl text-xl font-semibold text-white">
          <Image
            height={40}
            width={40}
            src={uploadFile}
            alt="upload prescription"
          />
          <p>
            Upload
            <br />
            Prescription
          </p>
        </div>
        {/* 2 */}
        <div className="flex gap-3 h-[130px] items-center justify-center bg-gradient-to-r from-primary/70 to-primary/80 rounded-xl text-xl font-semibold text-white">
          <Image height={40} width={40} src={calendar} alt="book appointment" />
          <p>
            Book
            <br />
            Appointment
          </p>
        </div>
        {/* 3 */}
        <div className="flex gap-3 h-[130px] items-center justify-center bg-gradient-to-r from-primary/60 to-primary/70 rounded-xl text-xl font-semibold text-white">
          <Image
            height={40}
            width={40}
            src={onlineMedical}
            alt="book appointment"
          />
          <p>
            Doctor Video
            <br />
            Consultation
          </p>
        </div>
        {/* 4 */}
        <div className="flex gap-3 h-[130px] items-center justify-center bg-gradient-to-r from-primary/80 to-primary/90 rounded-xl text-xl font-semibold text-white">
          <Image height={40} width={40} src={call} alt="book appointment" />
          <p>
            Call to Order:
            <br />
            01234567890
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
