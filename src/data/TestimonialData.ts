interface DataType {
   id: number;
   page: string;
   avatar: string;
   name: string;
   desc: string;
}

const testi_data: DataType[] = [
   // home_3
   {
      id: 1,
      page: "home_3",
      avatar: "/assets/img/testimonial/tes-3/avatar.png",
      name: "@ Dr. Sarah Lee",
      desc: "CureLedger entirely transformed our billing process and ended revenue leaks. With their expert team handling daily claims, our practice collections have never been better."
   },
   {
      id: 2,
      page: "home_3",
      avatar: "/assets/img/testimonial/tes-3/avatar-2.png",
      name: "@ Dr. Mark Chen",
      desc: "Partnering with CureLedger was the best financial decision for our clinic. Their relentless A/R follow up and clean claim submissions increased revenue very rapidly today."
   },
   {
      id: 3,
      page: "home_3",
      avatar: "/assets/img/testimonial/tes-3/avatar-3.png",
      name: "@ Dr. Emily Ray",
      desc: "We struggled with insurance denials and slow payments before finding CureLedger. Now, we enjoy a seamless revenue cycle and our staff can finally focus purely on patients."
   },
   {
      id: 4,
      page: "home_3",
      avatar: "/assets/img/testimonial/tes-3/avatar-2.png",
      name: "@ Dr. Alan Tate",
      desc: "The team at CureLedger is exceptionally professional and detail oriented. By taking over our patient billing and credentialing, they eliminated all of front desk stresses."
   },
];

export default testi_data;