"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardGallery from "@/components/sections/hero/HeroBillboardGallery";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ContactText from "@/components/sections/contact/ContactText";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Sparkles, Car, Award, DollarSign, Heart, BookOpen, TrendingUp, Calendar, Zap, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="large"
      background="floatingGradient"
      cardStyle="inset"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Volva Sh"
          navItems={[
            { name: "Fleet", id: "fleet" },
            { name: "Why Us", id: "features" },
            { name: "Pricing", id: "pricing" },
            { name: "Testimonials", id: "testimonials" }
          ]}
          button={{
            text: "Book Now",            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Premium Car Rental Experience"
          description="Drive Your Dreams with Volva Sh. Discover our exclusive collection of luxury vehicles for every occasion."
          tag="Welcome to Excellence"
          tagIcon={Sparkles}
          background={{ variant: "gradient-bars" }}
          mediaItems={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/luxury-car-speeds-by-modern-building-dusk-generative-ai_188544-8048.jpg",              imageAlt: "Luxury sports car"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/elegant-uber-driver-giving-taxi-ride_23-2149241745.jpg",              imageAlt: "Premium family SUV"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/handsome-bearded-male-sunglasses-dressed-black-suit-sitting-luxury-car-against-skyscraper_613910-19325.jpg",              imageAlt: "Elegant sedan"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/fashionable-ladies-going-out-car_132075-12211.jpg",              imageAlt: "Modern electric vehicle"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/black-sedan-wet-highway-rain-rainy-drive_169016-69903.jpg",              imageAlt: "Luxury automobile"
            }
          ]}
          buttons={[
            { text: "Explore Fleet", href: "fleet" },
            { text: "Instant Booking", href: "contact" }
          ]}
        />
      </div>

      <div id="fleet" data-section="fleet">
        <ProductCardFour
          title="Our Premium Fleet"
          description="Handpicked vehicles for discerning travelers. Every car in our collection is meticulously maintained."
          tag="Featured Vehicles"
          tagIcon={Car}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",              name: "Luxury Sedan",              price: "$120/day",              variant: "Premium | Leather | 5 Seats",              imageSrc: "https://img.b2bpic.net/free-photo/grey-coupe-rainy-highway-motion-focus_169016-69693.jpg",              imageAlt: "Luxury sedan"
            },
            {
              id: "2",              name: "Executive SUV",              price: "$150/day",              variant: "Spacious | AWD | 7 Seats",              imageSrc: "https://img.b2bpic.net/free-photo/white-car-turning-city-street-modern-urban-motion_169016-69787.jpg",              imageAlt: "Executive SUV"
            },
            {
              id: "3",              name: "Sports Car",              price: "$180/day",              variant: "High Performance | Convertible | 2 Seats",              imageSrc: "https://img.b2bpic.net/free-photo/elegant-uber-driver-giving-taxi-ride_23-2149241747.jpg",              imageAlt: "Sports car"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          title="Why Choose Volva Sh"
          description="Experience unparalleled service and quality in every rental."
          tag="Our Advantages"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          features={[
            {
              id: "1",              title: "24/7 Customer Support",              tags: ["Support", "Always Available"],
              imageSrc: "https://img.b2bpic.net/free-photo/people-working-call-center_23-2149288189.jpg",              imageAlt: "Customer support team"
            },
            {
              id: "2",              title: "Comprehensive Insurance Included",              tags: ["Protection", "Peace of Mind"],
              imageSrc: "https://img.b2bpic.net/free-photo/young-distraught-call-center-agent-communicating-with-client-while-using-desktop-pc-office_637285-6461.jpg",              imageAlt: "Insurance coverage"
            },
            {
              id: "3",              title: "Flexible Rental Terms",              tags: ["Flexibility", "Your Schedule"],
              imageSrc: "https://img.b2bpic.net/free-photo/people-working-call-center_23-2149288192.jpg",              imageAlt: "Flexible options"
            },
            {
              id: "4",              title: "Competitive Pricing",              tags: ["Best Rates", "Transparent"],
              imageSrc: "https://img.b2bpic.net/free-photo/colleagues-working-together-call-center-office_23-2149256115.jpg",              imageAlt: "Affordable pricing"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Rental Plans for Every Journey"
          description="Choose the perfect plan tailored to your travel needs."
          tag="Transparent Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="invertDefault"
          plans={[
            {
              id: "daily",              badge: "Daily Rental",              badgeIcon: Calendar,
              price: "$100-180",              subtitle: "Perfect for short trips",              features: [
                "Pick-up and drop-off service",                "Free fuel top-up",                "Unlimited mileage",                "Basic insurance included"
              ]
            },
            {
              id: "weekly",              badge: "Weekly Rental",              badgeIcon: Zap,
              price: "$600-1,000",              subtitle: "Great value for extended stays",              features: [
                "Flexible scheduling",                "Complimentary vehicle upgrades",                "Premium roadside assistance",                "Full coverage insurance",                "Personal concierge service"
              ]
            },
            {
              id: "monthly",              badge: "Monthly Rental",              badgeIcon: Star,
              price: "$2,000-3,500",              subtitle: "Best rates for long-term needs",              features: [
                "Unlimited mileage",                "24/7 emergency support",                "Vehicle replacement included",                "Premium insurance package",                "Dedicated account manager",                "Priority booking access"
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Clients Say"
          description="Real experiences from satisfied customers who trusted Volva Sh."
          tag="Customer Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          speed={40}
          topMarqueeDirection="left"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              handle: "@sarahm_travels",              testimonial: "Volva Sh made my European road trip unforgettable. The luxury sedan was impeccable, and the service was exceptional. Highly recommended!",              imageSrc: "https://img.b2bpic.net/free-photo/confident-middle-aged-businesswoman_1262-20882.jpg",              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",              name: "James Chen",              handle: "@jchen_business",              testimonial: "As a business traveler, I appreciate the reliability and professionalism. The booking process was seamless, and the vehicles are always pristine.",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              imageAlt: "James Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              handle: "@emma_adventures",              testimonial: "Perfect for our family vacation! The spacious SUV, friendly staff, and competitive pricing made everything stress-free. We're booking again!",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-positive-executive-work_1098-519.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "Michael Thompson",              handle: "@mthompson_exec",              testimonial: "Premium experience from start to finish. The attention to detail in vehicle maintenance and customer service is unmatched. Worth every penny.",              imageSrc: "https://img.b2bpic.net/free-photo/close-up-smiley-woman-library_23-2149204737.jpg",              imageAlt: "Michael Thompson"
            },
            {
              id: "5",              name: "Lisa Anderson",              handle: "@lisaandtravel",              testimonial: "I've rented from many companies, but Volva Sh stands out. Excellent vehicles, transparent pricing, and genuine care for customer satisfaction.",              imageSrc: "https://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2533.jpg",              imageAlt: "Lisa Anderson"
            },
            {
              id: "6",              name: "David Park",              handle: "@davidpark_wheels",              testimonial: "The sports car rental was the highlight of my trip. Incredible performance, impeccable condition, and insurance hassle was completely taken care of.",              imageSrc: "https://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg",              imageAlt: "David Park"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Elevate Your Journey"
          description="Volva Sh combines luxury vehicles with exceptional service. For over a decade, we've been committed to providing world-class car rental experiences."
          tag="Our Story"
          tagIcon={BookOpen}
          imageSrc="https://img.b2bpic.net/free-photo/woman-getting-taxi-car_23-2149149625.jpg"
          imageAlt="Luxury vehicle interior"
          useInvertedBackground="invertDefault"
          buttons={[
            { text: "Learn More", href: "contact" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="By The Numbers"
          description="Trusted by thousands of satisfied customers worldwide."
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          metrics={[
            {
              id: "1",              icon: Car,
              title: "Vehicles",              value: "500+"
            },
            {
              id: "2",              icon: TrendingUp,
              title: "Happy Clients",              value: "25,000+"
            },
            {
              id: "3",              icon: TrendingUp,
              title: "Cities",              value: "45"
            },
            {
              id: "4",              icon: Award,
              title: "Years Experience",              value: "10+"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to start your next adventure? Book your perfect vehicle today and experience the Volva Sh difference."
          animationType="entrance-slide"
          useInvertedBackground="invertDefault"
          buttons={[
            { text: "Reserve Now", href: "#contact-form" },
            { text: "View Fleet", href: "fleet" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Volva Sh"
          copyrightText="© 2025 Volva Sh Car Rentals. All rights reserved."
          columns={[
            {
              title: "Service",              items: [
                { label: "Fleet", href: "fleet" },
                { label: "Pricing", href: "pricing" },
                { label: "Booking", href: "contact" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "about" },
                { label: "Why Choose Us", href: "features" },
                { label: "Testimonials", href: "testimonials" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}