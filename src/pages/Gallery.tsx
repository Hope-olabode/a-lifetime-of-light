import { useState } from "react";
import Layout from "@/components/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";

interface Photo {
  id: number;
  category: string;
  caption: string;
  year?: string;
}

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Early Years", "Teaching", "Family", "Retirement", "Special Moments"];

  // Placeholder photos - replace with actual images
  const photos: Photo[] = [
    { id: 1, category: "Early Years", caption: "Childhood photo placeholder", year: "1950s" },
    { id: 2, category: "Early Years", caption: "Young adult years placeholder", year: "1960s" },
    { id: 3, category: "Teaching", caption: "First classroom placeholder", year: "1970s" },
    { id: 4, category: "Teaching", caption: "With students placeholder", year: "1980s" },
    { id: 5, category: "Teaching", caption: "School event placeholder", year: "1985" },
    { id: 6, category: "Teaching", caption: "Award ceremony placeholder", year: "1990" },
    { id: 7, category: "Family", caption: "Family gathering placeholder", year: "1995" },
    { id: 8, category: "Family", caption: "Holiday celebration placeholder", year: "2000" },
    { id: 9, category: "Teaching", caption: "Classroom activities placeholder", year: "2005" },
    { id: 10, category: "Retirement", caption: "Retirement celebration placeholder", year: "2015" },
    { id: 11, category: "Special Moments", caption: "Community recognition placeholder", year: "2018" },
    { id: 12, category: "Special Moments", caption: "Recent celebration placeholder", year: "2023" },
  ];

  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  const currentIndex = selectedPhoto ? filteredPhotos.findIndex(p => p.id === selectedPhoto.id) : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
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
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <Camera className="w-8 h-8 text-muted-foreground/50 mb-2" />
                  <p className="text-xs text-muted-foreground text-center">{photo.caption}</p>
                  {photo.year && (
                    <p className="text-xs text-secondary mt-1">{photo.year}</p>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-medium">View Photo</span>
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

            {/* Navigation */}
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

            {/* Image Placeholder */}
            <div className="aspect-[4/3] flex flex-col items-center justify-center p-8">
              <Camera className="w-16 h-16 text-secondary mb-4" />
              <p className="text-primary-foreground text-lg text-center">
                {selectedPhoto?.caption}
              </p>
              {selectedPhoto?.year && (
                <p className="text-secondary mt-2">{selectedPhoto.year}</p>
              )}
              <p className="text-primary-foreground/60 text-sm mt-4">
                Replace this placeholder with actual photo
              </p>
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
