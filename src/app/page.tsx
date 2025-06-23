import { onGetBlogPosts } from "@/actions/landing";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { ArrowRightCircleIcon, Check, Sparkles, Zap, Shield, Globe, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { getMonthName } from "@/lib/utils";

export default async function Home() {
  const posts:
    | {
        id: string;
        title: string;
        image: string;
        content: string;
        createdAt: Date;
      }[]
    | undefined = await onGetBlogPosts();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <NavBar />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20">
        {/* Subtle dot pattern overlay for hero section */}
        <div className="absolute h-full w-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center flex-col gap-8 text-center">
            {/* Badge */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <span className="relative bg-white/90 backdrop-blur-sm text-green-700 px-6 py-3 rounded-full text-sm font-medium border border-green-200/50 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Powered Sales Assistant Chatbot
              </span>
            </div>

            {/* Logo with glow effect */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <Image
                src="/images/Styxnet-ai-logo.png"
                width={600}
                height={120}
                alt="Logo"
                className="max-w-2xl object-contain relative z-10 drop-shadow-2xl"
              />
            </div>

            {/* Main heading */}
            <div className="space-y-6 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-900 bg-clip-text text-transparent leading-tight">
                Transform Your Website Into a 
                <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Sales Powerhouse
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                Embed our intelligent AI assistant into any website with just a snippet of code. 
                Watch your conversions soar with personalized customer interactions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/auth/sign-up">
                <Button className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                  Start Free Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-400 hover:border-green-400 hover:bg-green-50 transition-all duration-200 backdrop-blur-sm bg-white/80 text-gray-800">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg">
                <div className="text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/50 shadow-lg">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent mb-4">
              Why Choose Styxnet AI?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Powerful features designed to boost your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast Setup</h3>
              <p className="text-gray-700 leading-relaxed">
                Get your AI assistant running in minutes with our simple embed code. No technical expertise required.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-700 leading-relaxed">
                Bank-level security with end-to-end encryption to protect your customer data and conversations.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-700 leading-relaxed">
                Support multiple languages and time zones to serve customers worldwide, 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Flexible pricing that grows with your business. Start free, upgrade when ready.
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {pricingCards.map((card, index) => (
              <Card
                key={card.title}
                className={clsx(
                  "w-[350px] flex flex-col justify-between relative group bg-white/70 backdrop-blur-sm border-white/50 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl overflow-hidden",
                  {
                    "border-2 border-gradient-to-r from-orange-500 to-pink-500 shadow-2xl scale-105": card.title === "Ultimate",
                  }
                )}
              >
                {card.title === "Ultimate" && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className={card.title === "Ultimate" ? "pt-12" : ""}>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    {card.title}
                    {card.title === "Ultimate" && <Star className="w-5 h-5 text-green-600" />}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-lg">
                    {card.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {card.price}
                    </span>
                    {card.duration && (
                      <span className="text-gray-600 text-lg">/{card.duration}</span>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Link
                    href={`/dashboard?plan=${card.title}`}
                    className={clsx(
                      "w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105",
                      card.title === "Ultimate"
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300"
                    )}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Stay ahead with our expert insights on AI, technology, and business optimization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts &&
              posts.map((post) => (
                <Link href={`/blogs/${post.id}`} key={post.id}>
                  <Card className="group bg-white/70 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden h-full transform hover:scale-105 transition-all duration-300">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <Image
                        src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                        alt="post featured image"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-8 space-y-4">
                      <CardDescription className="text-green-600 font-medium">
                        {getMonthName(post.createdAt.getMonth())}{" "}
                        {post.createdAt.getDate()}, {post.createdAt.getFullYear()}
                      </CardDescription>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <div className="text-gray-700 leading-relaxed line-clamp-3">
                        {parse(post.content.slice(4, 120))}...
                      </div>
                      <div className="flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of businesses already using Styxnet AI to boost their sales and customer satisfaction.
              </p>
              <Link href="/auth/sign-up">
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
