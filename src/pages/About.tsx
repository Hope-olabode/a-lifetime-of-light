import Layout from "@/components/Layout";
import { GraduationCap, MapPin, Heart, Award } from "lucide-react";
import p from "../images/portrait.jpeg";

const About = () => {
  const timeline = [
    {
      period: "Early Life",
      years: "1967 - 1979",
      icon: Heart,
      content: `Oluyemisi Ibironke Kemiki was born on May 18, 1967, in Porogun, Ijebu Ode, Ogun State, into a family rooted in heritage and dignity. She is the daughter of the late Chief Edward Adebola Durogbola Kemiki of Mobegelu Compound, Porogun, Ijebu Ode, and Madam Celicia Durogbola Kemiki. Her formative years were shaped by a home that valued character and diligence. She began her scholastic journey at LadiLak Primary School from 1973 to 1979 — early years that would quietly nurture the educator she was destined to become.`,
    },
    {
      period: "Education & Training",
      years: "1979 - 1998",
      icon: GraduationCap,
      content: `Mrs. Fawunmi's educational journey was one of steady and purposeful growth. She completed her secondary education at National College II, Gbagada (1979–1984), before following her calling into pedagogy at the Lagos State College of Education, Otto-Ijanikin, where she studied Accounting and Business Management (1986–1989). Never content to stop learning, she pursued a degree in Accounting Education at Ogun State University — now Olabisi Onabanjo University — between 1995 and 1998.`,
    },
    {
      period: "Teaching Career",
      years: "1991 - 2026",
      icon: Award,
      content: `On March 11, 1991, Mrs. Fawunmi began her career with the Lagos State Teaching Service Commission — a journey that would span over three decades of transformative service. She taught Financial Accounting and Mathematics with distinction, earning a reputation for clarity, discipline, and genuine investment in her students' futures. Her career evolved from classroom teacher to Year Tutor, then Vice Principal, and ultimately Principal — a trajectory driven entirely by merit. She has served as a WAEC Team Leader for Financial Accounting examinations, a NECO examiner, and an active contributor to the Lagos State Financial Accounting Scheme of Work and textbook review committee, shaping how an entire generation of Lagos students learns accounting.`,
    },
    {
      period: "Communities Served",
      years: "1991 - 2026",
      icon: MapPin,
      content: `Over the course of her illustrious career, Mrs. Fawunmi has served with distinction across ten schools in Lagos State: Ebenezer Comprehensive High School, Government College, Vetland College (where she gave a remarkable decade of service), Ijaye-Ojokoro Senior High School, Ijaye-Ojokoro Senior College, Isefun Senior High School, Community Junior Grammar School Ipaja, Community Senior Grammar School, Abesan Comprehensive Junior College, and Orisunmbare Senior High School, Ayobo. Each posting brought new communities, new challenges, and new lives to impact — and in every one, she left things better than she found them.`,
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
                <div className="aspect-[3/4] rounded-lg border-4 border-secondary/30 overflow-hidden">
                  <img
                    src={p}
                    alt="Mrs. Fawunmi Oluyemisi Ibironke"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio Text */}
              <div className="flex-1 space-y-4">
                <h2 className="font-serif text-3xl text-foreground">Mrs. Fawunmi Oluyemisi Ibironke</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mrs. Fawunmi Oluyemisi Ibironke is a woman whose life has been a masterclass in purpose-driven service. Born with an innate vocation for teaching, she transformed every classroom she entered into a space of possibility — not merely instructing students in Financial Accounts and Business Management, but shaping the very character of a generation. For over three decades, her name has been synonymous with dedication, integrity, and academic excellence across the Lagos State public school system.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Those who have had the privilege of working alongside Mrs. Fawunmi speak of a woman of quiet strength and extraordinary resolve — one who rose steadily through the ranks not through shortcuts, but through sheer merit and consistent excellence. From her early days as a classroom teacher at Ebenezer Comprehensive High School to her elevation as Principal, she has carried herself with the same grace and commitment at every level. A devoted wife, a loving mother and grandmother, a faithful churchwoman, and a respected professional leader, Mrs. Fawunmi does not merely occupy roles — she enriches them. Her story is not just one of career milestones; it is a testimony to what happens when passion meets perseverance.
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
              Mrs. Oluyemisi Fawunmi's legacy is written not in monuments, but in the lives she has shaped across more than three decades of faithful service. Thousands of students who passed through her classrooms carry with them not just a knowledge of Financial Accounting, but the imprint of a teacher who believed in standards, in excellence, and in the dignity of hard work. Her influence extends far beyond any single school — through her work on the Lagos State Financial Accounting curriculum and her role as a WAEC Team Leader and NECO examiner, she has quietly helped define the quality of education delivered to an entire generation of Nigerian students. Colleagues remember her as a leader who led by example, an administrator who never lost the heart of a teacher, and a woman whose faith and integrity were as steady in the staffroom as they were in the sanctuary. In every role she occupied — teacher, year tutor, vice principal, principal — she raised the bar and then helped others reach it. That is a legacy that does not retire.
            </p>

            {/* Quote */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8 mt-8">
              <div className="text-4xl text-secondary mb-4">"</div>
              <blockquote className="font-serif text-xl md:text-2xl italic mb-4">
                Teaching is not just a profession — it is a calling. And I have answered it every single day.
              </blockquote>
              <p className="text-primary-foreground/70">— Mrs. Fawunmi Oluyemisi Ibironke, Director/Principal, Lagos State Teaching Service Commission</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
