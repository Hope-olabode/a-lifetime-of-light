import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Heart } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions, photos to share, or stories to tell? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-foreground mb-6">Contact Information</h2>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">[email@placeholder.com]</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        For general inquiries and submissions
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">[(XXX) XXX-XXXX]</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        Available during regular hours
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">[City, State]</p>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        The community she called home
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl text-foreground mb-6">How You Can Help</h2>

                <Card className="bg-cream-dark border-none">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-serif text-xl text-foreground mb-3">Share Your Memories</h3>
                    <p className="text-muted-foreground mb-4">
                      Do you have photos, stories, or memorabilia from her teaching career or 
                      personal life? We welcome contributions to help preserve her legacy.
                    </p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      <li>• Photographs from any period</li>
                      <li>• Written memories or anecdotes</li>
                      <li>• Documents or memorabilia</li>
                      <li>• Video or audio recordings</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground border-none">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl mb-3">For Former Students</h3>
                    <p className="text-primary-foreground/80">
                      Were you one of her students? We especially cherish hearing from those 
                      whose lives she shaped. Your stories help paint the full picture of her 
                      impact as an educator.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-foreground mb-6">A Note of Thanks</h2>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for visiting this tribute website. Every message, every shared memory, 
              and every photo helps keep her legacy alive. Whether you knew her personally or 
              simply want to pay your respects, your presence here means the world to us.
            </p>
            <div className="flex items-center justify-center gap-2 mt-8 text-secondary">
              <Heart className="w-5 h-5 fill-secondary" />
              <span className="font-serif text-lg">With gratitude</span>
              <Heart className="w-5 h-5 fill-secondary" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
