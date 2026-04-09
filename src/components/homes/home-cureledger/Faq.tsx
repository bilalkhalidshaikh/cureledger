import { useRef, useState } from "react";
import gsap from "gsap";

interface DataType {
  id: number;
  title: string;
  desc: string;
  showAnswer: boolean;
}

const faq_content: DataType[] = [
  {
    id: 1,
    title: "How does CureLedger improve collection rates?",
    desc: "We close the gap between the industry average of 92% and our 98% collection rate by ensuring clean claim submissions and relentless A/R follow-up.",
    showAnswer: true,
  },
  {
    id: 2,
    title: "What clinical expertise do you provide?",
    desc: "Our team consists of clinically trained billing experts who understand dental procedures, ensuring high claim accuracy and reduced denials.",
    showAnswer: false,
  },
  {
    id: 3,
    title: "Can you help with insurance verification?",
    desc: "Yes, we provide accurate eligibility checks, deductibles, frequencies, and remaining benefits—everything verified upfront before you treat.",
    showAnswer: false,
  },
];

const Faq = () => {
  const [faqData, setFaqData] = useState<DataType[]>(faq_content);
  const imgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAnswer = (faqId: number) => {
    setFaqData((prev) =>
      prev.map((faq) => ({
        ...faq,
        showAnswer: faq.id === faqId ? !faq.showAnswer : false,
      })),
    );
  };

  // Interactive Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 992) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;

    if (imgRef.current)
      gsap.to(imgRef.current, {
        x: x * -1,
        y: y * -1,
        ease: "power2.out",
        duration: 1,
      });
    if (contentRef.current)
      gsap.to(contentRef.current, {
        x: x * 0.5,
        y: y * 0.5,
        ease: "power2.out",
        duration: 1,
      });
  };

  const handleMouseLeave = () => {
    gsap.to([imgRef.current, contentRef.current], {
      x: 0,
      y: 0,
      ease: "power3.out",
      duration: 1,
    });
  };

  return (
    <div
      className="td-faq-2-area pt-40 pb-120 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Parallax Image */}
          <div className="col-lg-6">
            <div
              ref={imgRef}
              className="td-faq-2-thumb mb-30 wow fadeInLeft p-relative"
              data-wow-delay=".3s"
            >
              <img
                className="w-100 shadow-lg"
               //  src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"
                src="/assets/img/sections/sectioneight.png"
                alt="Dental Specialist"
                style={{
                  borderRadius: "24px",
                  objectFit: "cover",
                  minHeight: "500px",
                }} 
              />
              {/* Decorative brand element */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  width: "100px",
                  height: "100px",
                  backgroundColor: "rgba(9, 178, 171, 0.1)",
                  borderRadius: "50%",
                  zIndex: -1,
                }}
              ></div>
            </div>
          </div>

          {/* Right Column: Accordion Content */}
          <div className="col-lg-6">
            <div
              ref={contentRef}
              className="td-faq-2-wrap-right ps-lg-5 mb-30 wow fadeInRight"
              data-wow-delay=".3s"
            >
              <div className="td-service-2-title-wrap mb-40">
                <span
                  className="d-inline-block mb-15 px-4 py-2 rounded-pill fw-bold"
                  style={{
                    backgroundColor: "rgba(9, 178, 171, 0.1)",
                    color: "#09B2AB",
                    fontSize: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  Common Questions
                </span>
                <h2
                  className="mb-0"
                  style={{
                    color: "#003941",
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    lineHeight: "1.2",
                    textTransform: "uppercase",
                  }}
                >
                  Everything you need to <br />
                  <span style={{ color: "#09B2AB" }}>
                    know about our process.
                  </span>
                </h2>
              </div>

              <div className="td-faq-accordion">
                {faqData.map((item) => (
                  <div
                    key={item.id}
                    className="mb-3 rounded-4"
                    style={{
                      border: "1px solid rgba(0, 57, 65, 0.08)",
                      backgroundColor: item.showAnswer ? "#F8FAFA" : "#fff",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <h2 className="m-0">
                      <button
                        className="d-flex align-items-center justify-content-between w-100 p-4 border-0 bg-transparent text-start"
                        onClick={() => toggleAnswer(item.id)}
                        style={{
                          color: "#003941",
                          fontSize: "1.1rem",
                          fontWeight: "700",
                          outline: "none",
                        }}
                      >
                        {item.title}
                        <span
                          style={{
                            color: "#09B2AB",
                            fontSize: "1.5rem",
                            transform: item.showAnswer
                              ? "rotate(45deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          +
                        </span>
                      </button>
                    </h2>
                    <div
                      style={{
                        maxHeight: item.showAnswer ? "200px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease",
                      }}
                    >
                      <div
                        className="p-4 pt-0"
                        style={{
                          color: "#002C34",
                          lineHeight: "1.6",
                          opacity: 0.8,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
