
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Guttering Needs Immediate Attention",
      excerpt: "Don't wait until it's too late. Learn the warning signs that your guttering system needs professional repair or replacement.",
      content: "Guttering problems can lead to serious structural damage if left untreated. Here are the key warning signs every homeowner should watch for...",
      author: "Jones & Son Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Maintenance Tips",
      image: "/lovable-uploads/e6465301-be66-41bb-a184-d68abe2683fa.png"
    },
    {
      id: 2,
      title: "UPVC vs Timber: Choosing the Right Fascias & Soffits",
      excerpt: "A comprehensive guide to help you decide between UPVC and timber for your fascias and soffits installation.",
      content: "When it comes to fascias and soffits, the material choice can significantly impact both aesthetics and longevity...",
      author: "Jones & Son Team",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Product Guide",
      image: "/lovable-uploads/35e81dc0-cacf-4de2-9650-101df24d9067.png"
    },
    {
      id: 3,
      title: "Winter Roof Maintenance: Protecting Your Property",
      excerpt: "Essential winter maintenance tips to keep your roof in top condition throughout the harsh Devon weather.",
      content: "Winter weather in North Devon can be particularly challenging for roofing systems. Here's how to prepare...",
      author: "Jones & Son Team",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Seasonal Care",
      image: "/lovable-uploads/3535d1c2-0265-4157-a4c3-17752daa5844.png"
    },
    {
      id: 4,
      title: "The Benefits of Professional Roof Cleaning",
      excerpt: "Discover why regular professional roof cleaning is essential for maintaining your property's value and structural integrity.",
      content: "Many homeowners underestimate the importance of regular roof cleaning. Professional cleaning not only improves appearance...",
      author: "Jones & Son Team",
      date: "2023-12-28",
      readTime: "4 min read",
      category: "Services",
      image: "/lovable-uploads/b08eef82-716b-4a9b-8c9c-698cd5876ed4.png"
    }
  ];

  const categories = ["All", "Maintenance Tips", "Product Guide", "Seasonal Care", "Services"];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Roofing & Property Tips
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Expert advice, maintenance tips, and industry insights from North Devon's trusted property specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest roofing tips, maintenance advice, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
