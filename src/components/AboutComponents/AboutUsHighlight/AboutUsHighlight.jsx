import React from "react";

export default function AboutUsHighlight() {
  return (
    <div className="container px-6">
      {/* title and title photo */}

      <div className="w-[50%]">
        <h3 className="font-bold border-l-8 border-custom-primary pl-4 mb-6">
          Connecting Developers, Sharing Knowledge, and Building a Stronger
          <strong className="text-custom-primary text-4xl ml-2">Tech Community</strong>
        </h3>
        <img src="/AboutUs1.jpg" alt="" className="w-full h-72 object-cover rounded-xl" />
      </div>

      {/* description and users, questions */}
      <div>
        {/* two image side by side */}
         <div className="flex items-center gap-6">
            <img src="/AboutUs2.jpg" alt="" />
            <img src="/AboutUs3.jpg" alt="" />
         </div>
      </div>
    </div>
  );
}
