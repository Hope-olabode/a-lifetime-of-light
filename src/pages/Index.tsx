import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary via-emerald-light to-primary">
          <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23c5a44b%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        </div>

        <div className="relative z-[30px] container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            {/* Decorative Element */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-1 bg-secondary rounded-full" />
            </div>

            {/* Name Placeholder */}
            <p className="text-secondary font-medium tracking-widest uppercase text-sm md:text-base">
              Honoring the Life & Legacy of
            </p>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Mrs. Fawunmi Oluyemisi Ibironke
            </h1>

            <p className="text-xl md:text-2xl font-light text-primary-foreground/90 max-w-2xl mx-auto">
              A dedicated educator who touched countless lives through years of service in public schools
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="w-16 h-px bg-secondary/50" />
              <Heart className="w-5 h-5 text-secondary" />
              <div className="w-16 h-px bg-secondary/50" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-secondary lg:mb-10 text-secondary-foreground hover:bg-gold-light">
                <Link to="/about">
                  Read Her Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg"  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/tributes">Leave a Tribute</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(120, 20%, 97%)"
            />
          </svg>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center p-8 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">Years of Service</h3>
              <p className="text-muted-foreground">
                Decades of dedication to education, shaping young minds across multiple communities
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center p-8 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">Lives Touched</h3>
              <p className="text-muted-foreground">
                Thousands of students, families, and colleagues whose lives were enriched by her presence
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center p-8 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-foreground">Lasting Legacy</h3>
              <p className="text-muted-foreground">
                A legacy of kindness, wisdom, and unwavering commitment to the community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-mint-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl text-secondary mb-4">"</div>
            <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground mb-6">
              Education is not the filling of a pail, but the lighting of a fire.
            </blockquote>
            <p className="text-muted-foreground">— A guiding philosophy throughout her career</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Share Your Memory</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Were you a student, colleague, or friend? We'd love to hear your stories and memories.
            Leave a tribute to celebrate this remarkable life.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-gold-light">
            <Link to="/tributes">
              Leave a Tribute
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
