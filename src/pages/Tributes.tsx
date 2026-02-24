import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Heart, MessageCircle, Send } from "lucide-react";
import { z } from "zod";

const tributeSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  relationship: z.string().trim().max(100, "Relationship must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required")/* .max(2000, "Message must be less than 2000 characters") */,
});

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const CHAR_LIMIT = 150;

const Tributes = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({ name: "", relationship: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const { data: tributes, isLoading } = useQuery({
    queryKey: ["tributes"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tributes")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const submitTribute = useMutation({
    mutationFn: async (tribute: { name: string; relationship?: string; message: string }) => {
      const { error } = await supabase.from("tributes").insert([tribute]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tributes"] });
      setFormData({ name: "", relationship: "", message: "" });
      setErrors({});
      toast({ title: "Thank you!", description: "Your tribute has been submitted." });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to submit your tribute. Please try again.", variant: "destructive" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = tributeSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) fieldErrors[error.path[0] as string] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    submitTribute.mutate({
      name: result.data.name,
      relationship: result.data.relationship || undefined,
      message: result.data.message,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">
            Tributes
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Share Your Memories</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Leave a message to honor her memory and share how she touched your life
          </p>
        </div>
      </section>

      {/* Submit Form */}
      <section className="py-12 bg-cream-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="font-serif text-2xl text-foreground">Leave a Tribute</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your name"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="relationship">Relationship (Optional)</Label>
                      <Input
                        id="relationship"
                        value={formData.relationship}
                        onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                        placeholder="e.g., Former Student, Colleague"
                        className={errors.relationship ? "border-destructive" : ""}
                      />
                      {errors.relationship && <p className="text-sm text-destructive">{errors.relationship}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your memory, story, or tribute..."
                      className={`min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-navy-light"
                    disabled={submitTribute.isPending}
                  >
                    {submitTribute.isPending ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Tribute
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tributes Display */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-foreground mb-2">Wall of Tributes</h2>
            <p className="text-muted-foreground">Messages from those whose lives she touched</p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-pulse text-muted-foreground">Loading tributes...</div>
            </div>
          ) : tributes && tributes.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {tributes.map((tribute) => {
                const isLong = tribute.message.length > CHAR_LIMIT;
                const isExpanded = expandedIds.has(tribute.id);

                return (
                  <Card key={tribute.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Heart className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{tribute.name}</p>
                          {tribute.relationship && (
                            <p className="text-sm text-secondary">{tribute.relationship}</p>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        "{isExpanded || !isLong
                          ? tribute.message
                          : tribute.message.slice(0, CHAR_LIMIT) + "..."}"
                      </p>
                      {isLong && (
                        <button
                          onClick={() => toggleExpanded(tribute.id)}
                          className="text-sm text-secondary hover:underline mb-3"
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </button>
                      )}
                      <p className="text-xs text-muted-foreground/70">
                        {formatDate(tribute.created_at)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-secondary/50 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Be the first to leave a tribute and share your memories.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Tributes;