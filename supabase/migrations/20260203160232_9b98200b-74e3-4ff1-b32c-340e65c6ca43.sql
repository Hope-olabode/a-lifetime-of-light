-- Create tributes table for storing visitor messages
CREATE TABLE public.tributes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  relationship TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tributes ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view tributes (public display)
CREATE POLICY "Anyone can view tributes" 
ON public.tributes 
FOR SELECT 
USING (true);

-- Allow anyone to submit tributes (public submission)
CREATE POLICY "Anyone can submit tributes" 
ON public.tributes 
FOR INSERT 
WITH CHECK (true);