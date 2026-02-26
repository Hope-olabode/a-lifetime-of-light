import { useState } from "react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import e1 from "../images/Early Years/WhatsApp Image 2026-02-23 at 20.48.00.jpeg"
import e2 from "../images/Early Years/WhatsApp Image 2026-02-23 at 20.48.13 (1).jpeg"
import e3 from "../images/Early Years/WhatsApp Image 2026-02-24 at 17.58.19.jpeg"
import t1 from "../images/Teaching/WhatsApp Image 2026-02-23 at 20.48.04.jpeg"
import t2 from "../images/Teaching/WhatsApp Image 2026-02-23 at 20.48.10.jpeg"
import t3 from "../images/Teaching/WhatsApp Image 2026-02-23 at 20.48.13.jpeg"
import t4 from "../images/Teaching/WhatsApp Image 2026-02-24 at 17.58.17.jpeg"
import t5 from "../images/Teaching/WhatsApp Image 2026-02-24 at 17.58.18 (1).jpeg"
import t6 from "../images/Teaching/WhatsApp Image 2026-02-24 at 17.58.18 (2).jpeg"
import t7 from "../images/Teaching/WhatsApp Image 2026-02-24 at 17.58.18.jpeg"
import f1 from "../images/Family/WhatsApp Image 2026-02-23 at 20.47.58.jpeg"
import f2 from "../images/Family/WhatsApp Image 2026-02-23 at 20.47.59 (1).jpeg"
import f3 from "../images/Family/WhatsApp Image 2026-02-23 at 20.47.59 (2).jpeg"
import f4 from "../images/Family/WhatsApp Image 2026-02-23 at 20.47.59.jpeg"
import f5 from "../images/Family/WhatsApp Image 2026-02-23 at 20.48.01.jpeg"
import f6 from "../images/Family/WhatsApp Image 2026-02-23 at 20.48.17.jpeg"
import f7 from "../images/Family/WhatsApp Image 2026-02-23 at 20.48.18 (2).jpeg"
import f8 from "../images/Family/WhatsApp Image 2026-02-23 at 20.48.18 (3).jpeg"
import s1 from "../images/Special Moments/WhatsApp Image 2026-02-23 at 20.48.05.jpeg"
import s2 from "../images/Special Moments/WhatsApp Image 2026-02-23 at 20.48.12.jpeg"
import s3 from "../images/Special Moments/WhatsApp Image 2026-02-23 at 20.48.18 (1).jpeg"
import s4 from "../images/Special Moments/WhatsApp Image 2026-02-23 at 20.48.18.jpeg"

interface Photo {
  id: number;
  src: string;
  category: string;
  caption: string;
  year?: string;
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Early Years", "Teaching", "Family", "Retirement", "Special Moments"];

  const photos: Photo[] = [
    { id: 1,  src: e1,  category: "Early Years",     caption: "",        year: "" },
    { id: 2,  src: e2,  category: "Early Years",     caption: "",        year: "" },
    { id: 3,  src: e3,  category: "Early Years",     caption: "",        year: "" },
    { id: 4,  src: t1,  category: "Teaching",        caption: "",        year:"" },
    { id: 5,  src: t2,  category: "Teaching",        caption: "",        year: "" },
    { id: 6,  src: t3,  category: "Teaching",        caption: "",        year: "" },
    { id: 7,  src: t4,  category: "Teaching",        caption: "",        year: "" },
    { id: 8,  src: t5,  category: "Teaching",        caption: "",        year: "" },
    { id: 9,  src: t6,  category: "Teaching",        caption: "",        year: "" },
    { id: 10, src: t7,  category: "Teaching",        caption: "",        year: "" },
    { id: 11, src: f1,  category: "Family",          caption: "",        year: "" },
    { id: 12, src: f2,  category: "Family",          caption: "",        year: "" },
    { id: 13, src: f3,  category: "Family",          caption: "",        year: "" },
    { id: 14, src: f4,  category: "Family",          caption: "",        year: "" },
    { id: 15, src: f5,  category: "Family",          caption: "",        year: "" },
    { id: 16, src: f6,  category: "Family",          caption: "",        year: "" },
    { id: 17, src: f7,  category: "Family",          caption: "",        year: "" },
    { id: 18, src: f8,  category: "Family",          caption: "",        year: "" },
    { id :19 ,src: s1,  category: "Special Moments", caption: "",        year: ""},
    { id :20 ,src: s2,  category: "Special Moments", caption: "",        year: ""},
    { id: 21, src: s3,  category: "Special Moments", caption: "",        year: "" },
    { id: 22, src: s4,  category: "Special Moments", caption: "",        year: "" },
  ];

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter(p => p.category === activeCategory);

  const currentIndex = selectedPhoto
    ? filteredPhotos.findIndex(p => p.id === selectedPhoto.id)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) setSelectedPhoto(filteredPhotos[currentIndex - 1]);
  };

  const goToNext = () => {
    if (currentIndex < filteredPhotos.length - 1) setSelectedPhoto(filteredPhotos[currentIndex + 1]);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Photo Gallery
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Cherished Memories</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            A visual journey through a life dedicated to education and community
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary/20 hover:border-secondary"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative aspect-square bg-muted rounded-lg overflow-hidden hover:ring-2 hover:ring-secondary transition-all"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3">
                  <span className="text-primary-foreground text-sm font-medium text-center">{photo.caption}</span>
                  {photo.year && <span className="text-secondary text-xs mt-1">{photo.year}</span>}
                </div>
              </button>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl p-0 bg-primary border-none">
          <DialogTitle className="sr-only">Photo Lightbox</DialogTitle>
          <div className="relative">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Left Navigation */}
            {currentIndex > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {/* Right Navigation */}
            {currentIndex < filteredPhotos.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}

            {/* Expanded Image */}
            <div className="aspect-[4/3] overflow-hidden">
              {selectedPhoto && (
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Caption Bar */}
            <div className="bg-primary/90 p-4 text-center">
              <p className="text-primary-foreground">{selectedPhoto?.caption}</p>
              <p className="text-secondary text-sm mt-1">
                {selectedPhoto?.category} {selectedPhoto?.year && `• ${selectedPhoto.year}`}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Photos CTA */}
      <section className="py-12 bg-cream-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl text-foreground mb-4">Have Photos to Share?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We welcome contributions to this photo collection. If you have pictures from any period
            of her life that you'd like to share, please reach out through our contact page.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;