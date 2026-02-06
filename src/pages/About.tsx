import Layout from "@/components/Layout";
import { GraduationCap, MapPin, Heart, Award } from "lucide-react";

const About = () => {
  const timeline = [
    {
      period: "Early Life",
      years: "[Birth Year] - [Year]",
      icon: Heart,
      content: `[Placeholder: Describe the honoree's early life, childhood, family background, and the experiences that shaped who she would become. Include details about where she grew up, her family, and early influences that led her to education.]`,
    },
    {
      period: "Education & Training",
      years: "[Years]",
      icon: GraduationCap,
      content: `[Placeholder: Detail her educational journey—where she studied, degrees earned, certifications, and what inspired her passion for teaching. Include any mentors or pivotal moments during this time.]`,
    },
    {
      period: "Teaching Career",
      years: "[Start Year] - [End Year]",
      icon: Award,
      content: `[Placeholder: Describe her teaching career in detail. What subjects did she teach? What grade levels? What was her teaching philosophy? Include memorable moments, achievements, and the impact she had on students and colleagues.]`,
    },
    {
      period: "Communities Served",
      years: "[Years of Service]",
      icon: MapPin,
      content: `[Placeholder: List and describe the different schools and communities where she worked. How did she contribute to each? What unique challenges did she face and overcome? How did she adapt to different environments?]`,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Biography
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Her Life Story</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A journey of dedication, service, and love for education that spanned decades
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo Placeholder */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border-4 border-secondary/30">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-secondary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Portrait Photo</p>
                    <p className="text-xs text-muted-foreground/70">Replace with actual image</p>
                  </div>
                </div>
              </div>

              {/* Bio Text */}
              <div className="flex-1 space-y-4">
                <h2 className="font-serif text-3xl text-foreground">[Honoree Name]</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  [Placeholder: Write a compelling introduction about the honoree. Who was she at her core? What made her special? What drove her passion for teaching? This should be a warm, personal overview that captures her essence.]
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  [Placeholder: Continue with more details about her character, values, and the lasting impression she left on everyone who knew her. Include personal anecdotes if available.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
            A Life Well Lived
          </h2>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.period} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[23px] top-12 w-0.5 h-[calc(100%-48px)] bg-secondary/30" />
                )}

                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="font-serif text-xl text-foreground">{item.period}</h3>
                    <span className="text-secondary text-sm font-medium">{item.years}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Legacy & Impact
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              [Placeholder: Describe the lasting impact she had on education, her students, and the community. What is her legacy? How do people remember her? What values and lessons did she instill in others that continue to live on?]
            </p>

            {/* Quote */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 mt-8">
              <div className="text-4xl text-secondary mb-4">"</div>
              <blockquote className="font-serif text-xl md:text-2xl italic mb-4">
                [Placeholder: Add a meaningful quote from the honoree, or a quote from a student/colleague about her]
              </blockquote>
              <p className="text-primary-foreground/70">— [Attribution]</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
