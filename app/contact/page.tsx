"use client";
import { actionHandle } from "@/action/contactus";
import { ImageSection } from "@/components/image-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircleIcon } from "lucide-react";

import React, { useEffect, useState, useTransition } from "react";

const ContactUs = () => {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [mailData, setMailData] = useState({
    name: "",
    message: "",
    mobileNumber: "",
    email: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    setSuccess("")
    const { email, message, mobileNumber, name } = mailData;
    if (email == "" || name == "" || message == "" || mobileNumber == "") {
      setError("please fill all field");
      return;
    }
    startTransition(async () => {
      actionHandle(mailData)
        .then((data) => setSuccess("successfully sended"))
        .catch((err) => setError("something went wrong"));
    });
  };
  useEffect(() => {
    setError("");
  }, [mailData.name, mailData.email, mailData.message, mailData.mobileNumber]);
  return (
    <>
      <section className="w-full">
        <ImageSection label="Contact Us" imageUrl="contact1.jpg" />
        <div className="p-5 md:flex  gap-x-4 divide-x-2 divide-orange-600">
          <form className="space-y-2 flex-1 mb-2 " onSubmit={handleSubmit}>
            <h1 className="flex justify-center text-3xl">Contact Us</h1>
            <div className="flex flex-col space-y-3">
              <label htmlFor="name">Name <span className="text-red-500">*</span></label>
              <Input
                id="name"
                name="name"
                placeholder="full name"
                value={mailData.name}
                onChange={handleChange}
                disabled={pending}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="email">Email <span className="text-red-500">*</span></label>
              <Input
                name="email"
                placeholder="example@gmail.com"
                id="email"
                value={mailData.email}
                type="email"
                onChange={handleChange}
                disabled={pending}
              /> 
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="mobileNumber">Mobile number <span className="text-red-500">*</span></label>
              <Input
                name="mobileNumber"
                id="mobileNumber"
                placeholder="mobile number"
                value={mailData.mobileNumber}
                onChange={handleChange}
                disabled={pending}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="message">Message <span className="text-red-500">*</span></label>
              <textarea
                rows={6}
                name="message"
                id="message"
                className="border-2 border-slate-300 focus:border-black p-2 disabled:border-slate-100"
                placeholder="wrrite your message here"
                value={mailData.message}
                onChange={handleChange}
                disabled={pending}
              />
            </div>
            {error && <h1 className="text-red-500 ">{error}</h1>}
            {success && <h1 className="text-green-600 ">{success}</h1>}
            <Button className="w-full" disabled={pending}>
              {pending ? (
                <LoaderCircleIcon className="animate-spin  mr-2 w-6 h-6" />
              ) : (
                "send"
              )}
            </Button>
          </form>
          {/* embedded map location  */}
          <div className="flex-1 mt-10 flex   justify-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.908741697205!2d72.86815757525233!3d19.023742553610912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc20850f253%3A0x678ecbcca154be04!2sFalguni%20SRA%20building!5e0!3m2!1sen!2sin!4v1719755745552!5m2!1sen!2sin"
              width="450"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
