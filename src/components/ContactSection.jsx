import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            })
            setIsSubmitting(false)
        }, 1500)
    }

    return <section id="contact" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>   

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">

                        <div className="flex space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <Mail className="h-8 w-8" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:dennisdeifel@gmail.com" className="hover:text-primary transition-colors">
                                    dennisdeifel@gmail.com
                                </a>
                            </div>
                        </div>
                            

                        <div className="flex space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <Phone className="h-8 w-8"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+4917686093526" className="hover:text-primary transition-colors">
                                    +49 176 86093526
                                </a>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <div className="p-3 rounded-full bg-primary/20">
                                <MapPin className="h-8 w-8"/>
                            </div>
                            <div className="flex flex-col items-start">
                                <h4 className="font-medium">Location</h4>
                                <p className="hover:text-primary transition-colors">
                                    Bretzfeld, BW, Germany
                                </p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/dennisdeifel/" target="_blank"> <img src="linkedin-icon.svg" className="h-11 w-11"/> </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                    <input 
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden"
                                        placeholder="Max"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden"
                                        placeholder="max@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        className="w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden"
                                        placeholder="Hello, I'd like to talk about ..."
                                    />
                                </div>

                                <button type="submit" disabled={isSubmitting} className="cosmic-button w-full flex items-center justify-center gap-2">
                                    {isSubmitting ? "Sending ..." : "Send Message"}
                                    <Send size={16}/>
                                </button>
                            </form>
                        </div>

            </div>
        </div>
    </section>
}